import subprocess
import pandas as pd

# Model path
model_path = "/Users/nandhu/Downloads/best.pt"
dataset = "coco128.yaml"  # Change this if using a custom dataset

# Function to run evaluation commands
def run_command(command):
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    return result.stdout

# Run evaluation for different YOLO versions
results = []

# YOLOv6
command_v6 = f"python tools/eval.py --weights {model_path} --data {dataset} --task val --device cpu"
output_v6 = run_command(command_v6)

# YOLOv7
command_v7 = f"python yolov7/detect.py --weights {model_path} --source 0"
output_v7 = run_command(command_v7)

# YOLOv8
command_v8 = f"yolo val model={model_path} data={dataset}"
output_v8 = run_command(command_v8)

# YOLOv9, v10, v11, v12 (Placeholder commands, modify based on actual repo setup)
command_v9 = f"yolo val model={model_path} data={dataset}"
command_v10 = f"yolo val model={model_path} data={dataset}"
command_v11 = f"yolo val model={model_path} data={dataset}"
command_v12 = f"yolo val model={model_path} data={dataset}"

output_v9 = run_command(command_v9)
output_v10 = run_command(command_v10)
output_v11 = run_command(command_v11)
output_v12 = run_command(command_v12)

# Function to extract key metrics
def extract_metrics(output, version):
    try:
        lines = output.split("\n")
        for line in lines:
            if "all" in line:
                values = line.split()
                precision = values[3]
                recall = values[4]
                map50 = values[5]
                map50_95 = values[6]
                return {"YOLO Version": version, "Precision": precision, "Recall": recall, "mAP@50": map50, "mAP@50-95": map50_95}
    except Exception as e:
        return {"YOLO Version": version, "Precision": "Error", "Recall": "Error", "mAP@50": "Error", "mAP@50-95": "Error"}

# Collect results
results.append(extract_metrics(output_v6, "YOLOv6"))
results.append(extract_metrics(output_v7, "YOLOv7"))
results.append(extract_metrics(output_v8, "YOLOv8"))
results.append(extract_metrics(output_v9, "YOLOv9"))
results.append(extract_metrics(output_v10, "YOLOv10"))
results.append(extract_metrics(output_v11, "YOLOv11"))
results.append(extract_metrics(output_v12, "YOLOv12"))

# Convert to DataFrame and print
df = pd.DataFrame(results)
print(df)

# Save results
df.to_csv("yolo_comparison_results.csv", index=False)