import BrandSlider from '@/components/slider/BrandSlider'
import Link from 'next/link'

export default function Section8() {
    return (
        <>
            <div className="brands10-section-area sp8">
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
                <div
                    className="contact10-bg-section"
                    style={{
                        background: "#fff",
                        borderRadius: 16,
                        boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
                        maxWidth: 1100,
                        margin: "40px auto 0 auto",
                        padding: 32
                    }}
                >
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="contact-boxarea d-flex align-items-left"
                                style={{
                                    minHeight: 110,
                                    width: "100%",
                                    background: "#fff",
                                    borderRadius: 12,
                                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                                    padding: "24px 32px"
                                }}
                            >
                                <div className="icons me-3">
                                    <img src="/assets/img/icons/mail1.svg" alt="Email" />
                                </div>
                                <div className="text">
                                    <h5 style={{ marginBottom: 8 }}>GMAIL</h5>
                                    <Link href="mailto:dreamauraevent@gmail.com" style={{ wordBreak: "break-all" }}>
                                        dreamauraevent@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="contact-boxarea d-flex align-items-center"
                                style={{
                                    minHeight: 110,
                                    width: "100%",
                                    background: "#fff",
                                    borderRadius: 12,
                                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                                    padding: "24px 32px"
                                }}
                            >
                                <div className="icons me-3">
                                    <img src="/assets/img/icons/phn1.svg" alt="Phone" />
                                </div>
                                <div className="text">
                                    <h5 style={{ marginBottom: 8 }}>CALL/MESSAGE</h5>
                                    <Link href="tel:+917550277296">+91 75502 77296</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="contact-boxarea d-flex align-items-left "
                                style={{
                                    minHeight: 110,
                                    width: "100%",
                                    background: "#fff",
                                    borderRadius: 12,
                                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                                    padding: "24px 32px"
                                }}
                            >
                                <div className="icons me-3">
                                    <img src="/assets/img/icons/location1.svg" alt="Location" />
                                </div>
                                <div className="text">
                                    <h5 style={{ marginBottom: 8 }}>OUR LOCATION</h5>
                                    <span>Chennai, Tamil Nadu, India</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div
                                className="contact-boxarea d-flex align-items-right"
                                style={{
                                    minHeight: 110,
                                    width: "100%",
                                    background: "#fff",
                                    borderRadius: 12,
                                    boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                                    padding: "24px 32px"
                                }}
                            >
                                <div className="icons me-3">
                                    <img src="/assets/img/icons/instagram.svg" alt="Instagram" />
                                </div>
                                <div className="text">
                                    <h5 style={{ marginBottom: 8 }}>INSTAGRAM</h5>
                                    <Link href="https://instagram.com/dreamaura.events" target="_blank">
                                        dreamaura.events
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-10">
                            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                                <iframe
                                    title="Chennai Location"
                                    src="https://www.google.com/maps?q=Chennai,Tamil+Nadu,India&output=embed"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, width: "100%" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
