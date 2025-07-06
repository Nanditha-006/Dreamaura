import BrandSlider from '@/components/slider/BrandSlider'
import Link from 'next/link'

export default function Section4() {
    return (
        <>
            <div className="brands8-section-area sp8" style={{ backgroundImage: 'url(assets/img/bg/header-bg20.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <img src="/assets/img/elements/layer1.png" alt="" className="layer1" />
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
                <div className="space60" />
                <div className="contact8-bg-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="space48" />
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={900}>
                                            <div className="icons">
                                                <img src="/assets/img/icons/mail1.svg" alt="Email" />
                                            </div>
                                            <div className="text">
                                                <h5>Gmail</h5>
                                                <div className="space14" />
                                                <Link href="mailto:dreamauraevent@gmail.com">dreamauraevent@gmail.com</Link>
                                            </div>
                                        </div>
                                        <div className="space18" />
                                        <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                                            <div className="icons">
                                                <img src="/assets/img/icons/location1.svg" alt="Location" />
                                            </div>
                                            <div className="text">
                                                <h5>Our Location</h5>
                                                <div className="space14" />
                                                <Link href="#">Chennai, India</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="space20 d-md-none d-block" />
                                        <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
                                            <div className="icons">
                                                <img src="/assets/img/icons/phn1.svg" alt="Phone" />
                                            </div>
                                            <div className="text">
                                                <h5>Call/Message</h5>
                                                <div className="space14" />
                                                <Link href="tel:+919876543210">+91 98765 43210</Link>
                                            </div>
                                        </div>
                                        <div className="space18" />
                                        <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
                                            <div className="icons">
                                                <img src="/assets/img/icons/instagram.svg" alt="Instagram" />
                                            </div>
                                            <div className="text">
                                                <h5>Instagram</h5>
                                                <div className="space14" />
                                                <Link href="https://instagram.com/dreamaura.events" target="_blank">dreamaura.events</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space48" />
                            </div>
                        </div>
                    </div>
                    {/* Google Map removed */}
                </div>
            </div>
        </>
    )
}
