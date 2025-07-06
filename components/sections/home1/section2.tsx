import Link from 'next/link'

export default function Section2() {
    return (
        <>
            <div className="about1-section-area sp1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-imges">
                                <div className="img1 reveal image-anime">
                                    <img src="/assets/img/all-images/about/about-img1.png" alt="Event Planning" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="space30" />
                                        <div className="img1 reveal image-anime">
                                            <img src="/assets/img/all-images/about/about-img2.png" alt="Photography" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="space30" />
                                        <div className="img1 reveal image-anime">
                                            <img src="/assets/img/all-images/about/about-img3.png" alt="Decor & Design" />
                                        </div>
                                    </div>
                                </div>
                                {/* Removed the "View Pricing" button */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-header-area heading2">
                                <h5 data-aos="fade-left" data-aos-duration={800}>About Dream Aura Events</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Creating Timeless Memories with Passion</h2>
                                <div className="space16" />
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    At Dream Aura Events, we specialize in crafting unforgettable experiences. From weddings to corporate events, our team ensures every detail is handled with precision and creativity.
                                </p>
                                <div className="space32" />
                                <div className="about-auhtor-box" data-aos="fade-left" data-aos-duration={1000}>
                                    <div className="icons">
                                        <img src="/assets/img/icons/about-icon1.svg" alt="Event Planning Icon" />
                                    </div>
                                    <div className="text">
                                        <Link href="/services/event-planning">Event Planning</Link>
                                        <div className="space12" />
                                        <p>We bring your vision to life with meticulous planning and flawless execution.</p>
                                    </div>
                                </div>
                                <div className="space20" />
                                <div className="about-auhtor-box" data-aos="fade-left" data-aos-duration={1100}>
                                    <div className="icons">
                                        <img src="/assets/img/icons/about-icon2.svg" alt="Photography Icon" />
                                    </div>
                                    <div className="text">
                                        <Link href="/services/photography">Photography & Videography</Link>
                                        <div className="space12" />
                                        <p>Capture every special moment with our professional photography and videography services.</p>
                                    </div>
                                </div>
                                <div className="space32" />
                                <div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link href="/contact" className="vl-btn1">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
