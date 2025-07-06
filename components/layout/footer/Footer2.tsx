import Link from 'next/link'

export default function Footer1() {
    return (
        <>
            <div className="footer1-sertion-area" style={{ background: "#fff" }}>
                <div className="container">
                    <div className="row" style={{ alignItems: "flex-start", color: "#000" }}>
                        {/* Logo & About */}
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-logo-area" style={{ marginTop: '-10px', paddingTop: '0px', color: "#000" }}>
                                <img
                                    src="/assets/img/logo/logo2.png"
                                    alt="Dream Aura Events Logo"
                                    style={{ maxWidth: "100%", height: "auto", marginBottom: 8 }}
                                />
                                <p style={{ color: "#000", marginBottom: 12, marginTop: 0 }}>
                                    At Dream Aura Events, we create magical celebrations—weddings, birthdays, anniversaries, and more. Let us turn your dreams into unforgettable memories.
                                </p>
                                <ul style={{ display: "flex", gap: 12, padding: 0, listStyle: "none", margin: 0 }}>
                                    <li>
                                        <Link href="https://facebook.com/dreamaura.events" target="_blank"><i className="fa-brands fa-facebook-f" style={{ color: "#000" }} /></Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com/dreamaura.events" target="_blank"><i className="fa-brands fa-instagram" style={{ color: "#000" }} /></Link>
                                    </li>
                                    <li>
                                        <Link href="https://linkedin.com/company/dreamauraevents" target="_blank"><i className="fa-brands fa-linkedin-in" style={{ color: "#000" }} /></Link>
                                    </li>
                                    <li>
                                        <Link href="https://pinterest.com/dreamauraevents" target="_blank" className="m-0"><i className="fa-brands fa-pinterest-p" style={{ color: "#000" }} /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="link-content2" style={{ color: "#000" }}>
                                <h3 style={{ color: "#000", marginBottom: 20 }}>Contact Us</h3>
                                <ul style={{ padding: 0, listStyle: "none", color: "#000" }}>
                                    <li style={{ marginBottom: 12 }}>
                                        <Link href="tel:+919876543210" style={{ color: "#000", textDecoration: "none" }}>
                                            <img src="/assets/img/icons/phn1.svg" alt="Phone" style={{ marginRight: 8, verticalAlign: "middle" }} />
                                            +91 98765 43210
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: 12 }}>
                                        <Link href="#" style={{ color: "#000", textDecoration: "none" }}>
                                            <img src="/assets/img/icons/location1.svg" alt="Location" style={{ marginRight: 8, verticalAlign: "middle" }} />
                                            Chennai, India
                                        </Link>
                                    </li>
                                    <li style={{ marginBottom: 12 }}>
                                        <Link href="mailto:dreamauraevent@gmail.com" style={{ color: "#000", textDecoration: "none" }}>
                                            <img src="/assets/img/icons/mail1.svg" alt="Email" style={{ marginRight: 8, verticalAlign: "middle" }} />
                                            dreamauraevent@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://dreamauraevents.com" target="_blank" style={{ color: "#000", textDecoration: "none" }}>
                                            <img src="/assets/img/icons/world1.svg" alt="Website" style={{ marginRight: 8, verticalAlign: "middle" }} />
                                            dreamauraevents.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Event Gallery */}
                        <div className="col-lg-4 col-md-12">
                            <div className="footer-social-box" style={{ color: "#000" }}>
                                <h3 style={{ color: "#000", marginBottom: 20 }}>Our Recent Event Gallery</h3>
                                <div className="row g-2">
                                    {[1, 2, 3, 4, 5, 6].map(num => (
                                        <div className="col-4" key={num} style={{ marginBottom: 12 }}>
                                            <div className="img1" style={{ position: "relative" }}>
                                                <img
                                                    src={`/assets/img/all-images/footer/footer-img${num}.png`}
                                                    alt={`Event Gallery ${num}`}
                                                    style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
                                                />
                                                <div className="icons" style={{ position: "absolute", top: 8, right: 8 }}>
                                                    <Link href="https://instagram.com/dreamaura.events" target="_blank">
                                                        <i className="fa-brands fa-instagram" style={{ color: "#000" }} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright" style={{ color: "#000", textAlign: "center" }}>
                                <p>© Copyright {new Date().getFullYear()} - Dream Aura Events. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}