export default function Preloader() {
	return (
		<div className="preloader">
			<div className="loading-container">
				<div className="loading" />
				{/* <div id="loading-icon">
					<img src="/assets/img/logo/dreamaura-preloader.png" alt="Dream Aura Events Loading" />
				</div> */}
				<div className="preloader-text">
					Loading Dream Aura Events...
				</div>
			</div>
		</div>
	)
}
