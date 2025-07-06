'use client'
import Link from 'next/link'

export default function Footer1() {
    return (
        <div className="footer1-section-area" style={{ background: "#fff", padding: "40px 0" }}>
            <div className="container">
                {/* Top Row: Logo, Services, Contact */}
                <div className="row" style={{ columnGap: "20px", rowGap: "20px", display: "flex", flexWrap: "wrap" }}>
                    
                    {/* Logo & About */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <img
                            src="/assets/img/logo/logo2.png"
                            alt="Dream Aura Events Logo"
                            style={{ maxWidth: "100%", height: "auto", marginBottom: 16 }}
                        />
                        <p style={{ color: "#000", fontSize: "14px" }}>
                            At Dream Aura Events, we create magical celebrations—weddings, birthdays, anniversaries, and more. Let us turn your dreams into unforgettable memories.
                        </p>
                        <ul style={{ display: "flex", gap: 12, padding: 0, listStyle: "none" }}>
                            <li><Link href="https://facebook.com/dreamaura.events" target="_blank"><i className="fa-brands fa-facebook-f" style={{ color: "#000" }} /></Link></li>
                            <li><Link href="https://www.instagram.com/dreamauraevents" target="_blank"><i className="fa-brands fa-instagram" style={{ color: "#000" }} /></Link></li>
                            <li><Link href="https://linkedin.com/company/dreamauraevents" target="_blank"><i className="fa-brands fa-linkedin-in" style={{ color: "#000" }} /></Link></li>
                            <li><Link href="https://pinterest.com/dreamauraevents" target="_blank"><i className="fa-brands fa-pinterest-p" style={{ color: "#000" }} /></Link></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="col-md-2 col-sm-6 mb-4">
                        <h5 style={{ color: "#000", marginBottom: 16 }}>Our Services</h5>
                        <ul style={{ padding: 0, listStyle: "none", lineHeight: "2", fontSize: "14px" }}>
                            <li><Link href="/services/catering" style={{ color: "#000", textDecoration: "none" }}>Catering</Link></li>
                            <li><Link href="/services/decor" style={{ color: "#000", textDecoration: "none" }}>Decor</Link></li>
                            <li><Link href="/services/photography" style={{ color: "#000", textDecoration: "none" }}>Photography</Link></li>
                            <li><Link href="/services/videography" style={{ color: "#000", textDecoration: "none" }}>Videography</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 style={{ color: "#000", marginBottom: 16 }}>Contact Us</h5>
                        <ul style={{ padding: 0, listStyle: "none", fontSize: "14px" }}>
                            <li style={{ marginBottom: 8 }}>
                                <Link href="tel:+919876543210" style={{ color: "#000", textDecoration: "none" }}>
                                    <img src="/assets/img/icons/phn1.svg" alt="Phone" style={{ marginRight: 8, verticalAlign: "middle" }} />
                                    +91 98765 43210
                                </Link>
                            </li>
                            <li style={{ marginBottom: 8 }}>
                                <Link href="#" style={{ color: "#000", textDecoration: "none" }}>
                                    <img src="/assets/img/icons/location1.svg" alt="Location" style={{ marginRight: 8, verticalAlign: "middle" }} />
                                    Chennai, India
                                </Link>
                            </li>
                            <li style={{ marginBottom: 8 }}>
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
                </div> {/* <-- This closes the main row with Logo, Services, Contact Us */}

                {/* Event Gallery Row - Centered */}
                <div className="row justify-content-center mt-4">
                    <div className="col-md-8 text-center mx-auto">
                        <h5 style={{ color: "#000", marginBottom: 16 }}>Our Recent Event Gallery</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <div key={num} style={{ width: '110px', position: 'relative' }}>
                                    <img
                                        src={`/assets/img/all-images/footer/footer-img${num}.png`}
                                        alt={`Gallery ${num}`}
                                        style={{ width: '100%', borderRadius: 6, objectFit: 'cover' }}
                                        loading="lazy"
                                    />
                                    <div style={{ position: 'absolute', top: 4, right: 4 }}>
                                        <Link href="https://www.instagram.com/dreamauraevents" target="_blank">
                                            <i className="fa-brands fa-instagram" style={{ color: "#000", fontSize: 12 }} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p style={{ color: "#000", fontSize: "14px" }}>
                            © {new Date().getFullYear()} - Dream Aura Events. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}