'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
    const [isAccordion, setIsAccordion] = useState(1)

    const handleAccordion = (key: any) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <div className="mobile-header mobile-haeder1 d-block d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/img/logo/logo.png" alt="Dream Aura Events Logo" /></Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars-staggered" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
                <div className="logosicon-area">
                    <div className="logos">
                        <img src="/assets/img/logo/logo2.png" alt="Dream Aura Events Logo" />
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <ul className="mobile-nav-list nav-list1">
                        <li className="has-sub hash-has-sub">
                            {/* <span className={`submenu-button ${isAccordion == 1 ? "submenu-opened" : ""}`} onClick={() => handleAccordion(1)}><em /></span> */}
                            <Link href="/" className="hash-nav">Home</Link>
                        </li>
                        <li className="hash-has-sub">
                            <Link href="/services/catering">Catering</Link>
                          </li >
                          <li className="hash-has-sub">
                            <Link href="/services/decor">Decor</Link>
                          </li >
                          <li className="hash-has-sub">
                            <Link href="/services/photography">Photography</Link>
                          </li>
                          <li className="hash-has-sub">
                            <Link href="/services/videography">Videography</Link>
                          </li>

                           <li className="hash-has-sub"><Link href="/memories" className="hash-nav">Gallery</Link></li>
                        <li className="hash-has-sub"><Link href="/contact" className="hash-nav">Contact Us</Link></li>

                    </ul>

                    <div className="allmobilesection">
                       
                        <div className="single-footer">
                            <h3>Contact Info</h3>
                            <div className="footer1-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <span><i className="fa-solid fa-phone-volume" /></span>
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="tel:+917550277296">+91 75502 77296</Link>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <span><i className="fa-solid fa-envelope" /></span>
                                    </div>
                                    <div className="contact-info-text">
                                        <Link href="mailto:Dreamauraevent@gmail.com">dreamauraevent@gmail.com</Link>
                                    </div>
                                </div>
                                <div className="single-footer">
                                    <h3>Our Location</h3>
                                    <div className="contact-info-single">
                                        <div className="contact-info-icon">
                                            <span><i className="fa-solid fa-location-dot" /></span>
                                        </div>
                                        <div className="contact-info-text">
                                              <Link href="mailto:Dreamauraevent@gmail.com">Chennai, India</Link>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="single-footer">
                                    <h3>Social Links</h3>
                                    <div className="social-links-mobile-menu">
                                        <ul>
                                            <li><Link href="https://facebook.com/dreamaura.events"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="https://instagram.com/dreamaura.events"><i className="fa-brands fa-instagram" /></Link></li>
                                               
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
