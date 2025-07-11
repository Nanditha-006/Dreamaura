import BrandSlider from '@/components/slider/BrandSlider'


export default function Section3() {
	return (
		<>

			<div className="brands2-section-area sp2">
				<div className="container">
					<div className="row">
						<div className="col-lg-5 m-auto">
							<div className="brand-header heading4 space-margin60 text-center">
								<h3>Trusted by Hundreds of Happy Clients</h3>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
						<BrandSlider />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
