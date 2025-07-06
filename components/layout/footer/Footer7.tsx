import Link from 'next/link'

export default function Footer7() {
    return (
        <>
            <div className="footer7-sertion-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-logo-area">
                                <img src="/assets/img/logo/logo2.png" alt="Dream Aura Events Logo" />
                                <div className="space16" />
                                <p>
                                    At Dream Aura Events, we create magical celebrations—weddings, birthdays, anniversaries, and more. Let us turn your dreams into unforgettable memories.
                                </p>
                                <div className="space24" />
                                <ul>
                                    <li>
                                        <Link href="https://facebook.com/dreamaura.events" target="_blank"><i className="fa-brands fa-facebook-f" /></Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com/dreamaura.events" target="_blank"><i className="fa-brands fa-instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link href="https://linkedin.com/company/dreamauraevents" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
                                    <li>
                                        <Link href="https://pinterest.com/dreamauraevents" target="_blank" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="link-content">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/gallery">Gallery</Link></li>
                                    <li><Link href="/event-schedule">Event Schedule</Link></li>
                                    <li><Link href="/packages">Packages</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="link-content2">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>
                                        <Link href="tel:+919876543210"><img src="/assets/img/icons/phn1.svg" alt="Phone" />+91 98765 43210</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><img src="/assets/img/icons/location1.svg" alt="Location" />Chennai, India</Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:contact@dreamauraevents.com"><img src="/assets/img/icons/mail1.svg" alt="Email" />contact@dreamauraevents.com</Link>
                                    </li>
                                    <li>
                                        <Link href="https://dreamauraevents.com" target="_blank"><img src="/assets/img/icons/world1.svg" alt="Website" />dreamauraevents.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-social-box">
                                <h3>Our Recent Event Gallery</h3>
                                <div className="space12" />
                                <div className="row">
                                    {[1,2,3,4,5,6].map(num => (
                                        <div className="col-lg-4 col-md-4 col-4" key={num}>
                                            <div className="img1">
                                                <img src={`/assets/img/all-images/footer/footer-img${num}.png`} alt={`Event Gallery ${num}`} />
                                                <div className="icons">
                                                    <Link href="https://instagram.com/dreamaura.events" target="_blank"><i className="fa-brands fa-instagram" /></Link>
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
                            <div className="copyright">
                                <p>© Copyright {new Date().getFullYear()} - Dream Aura Events. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
