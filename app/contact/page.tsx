"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const [errors, setErrors] = React.useState({});
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.Name.trim())) {
      newErrors.Name = "Name must contain only letters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Enter a valid email";
    }

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.Phone)) {
      newErrors.Phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.Subject.trim()) {
      newErrors.Subject = "Subject is required";
    }

    if (!formData.Message.trim()) {
      newErrors.Message = "Message is required";
    } else if (formData.Message.length < 10) {
      newErrors.Message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxZoaQ99BTEn-hBmvlUMkvd6VLtjjZ5Kgp59gM9mLTTeJxxVoJBIxxMd1rf9H73_4c6pg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.result !== "success") {
        throw new Error(result.message || "Submission failed");
      }

      setMessage("✅ Your message has been sent successfully!");
      setFormData({
        Name: "",
        Email: "",
        Phone: "",
        Subject: "",
        Message: "",
      });
      setErrors({});
    } catch (error: any) {
      console.error("Error:", error);
      setMessage("❌ There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="contact-inner-section sp1">
        <div className="container">
          <h2 className="text-center mb-5">📞 Get In Touch</h2>
          <form onSubmit={handleSubmit} className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="form-control"
                value={formData.Name}
                onChange={handleChange}
              />
              {errors.Name && <p style={{ color: "red" }}>{errors.Name}</p>}
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="Phone"
                placeholder="Phone"
                className="form-control"
                value={formData.Phone}
                onChange={handleChange}
              />
              {errors.Phone && <p style={{ color: "red" }}>{errors.Phone}</p>}
            </div>
            <div className="col-md-12 mb-3">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="form-control"
                value={formData.Email}
                onChange={handleChange}
              />
              {errors.Email && <p style={{ color: "red" }}>{errors.Email}</p>}
            </div>
            <div className="col-md-12 mb-3">
              <select
                name="Subject"
                className="form-control"
                value={formData.Subject}
                onChange={handleChange}
              >
                <option value="">Select Service Required</option>
                <option value="Photography">Photography</option>
                <option value="Videography">Videography</option>
                <option value="Catering">Catering</option>
                <option value="Decor">Decor</option>
                <option value="Other">Other</option>
              </select>
              {errors.Subject && <p style={{ color: "red" }}>{errors.Subject}</p>}
            </div>
            <div className="col-md-12 mb-3">
              <textarea
                name="Message"
                placeholder="Your Message"
                className="form-control"
                value={formData.Message}
                onChange={handleChange}
              />
              {errors.Message && <p style={{ color: "red" }}>{errors.Message}</p>}
            </div>
            <div className="col-md-12 text-end">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Now"}
              </button>
            </div>
            {message && <p className="mt-3">{message}</p>}
          </form>
        </div>
      </div>
    </Layout>
  );
}
