import Link from 'next/link'

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage4 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo3.png" alt="Dream Aura Events Logo" /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link href="/#">Services <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/services/event-planning">Event Planning</Link></li>
                                                    <li><Link href="/services/photography">Photography</Link></li>
                                                    <li><Link href="/services/catering">Catering</Link></li>
                                                    <li><Link href="/services/decor">Decor & Design</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/portfolio">Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">Blog</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <div className="top-menu-area">
                                            <ul>
                                                <li>
                                                    <Link href="mailto:dreamauraevents@gmail.com">
                                                        <img src="/assets/img/icons/mail1.svg" alt="Email Icon" />
                                                        dreamauraevents@gmail.com
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="tel:7550277298">
                                                        <img src="/assets/img/icons/phn1.svg" alt="Phone Icon" />
                                                        7550277298
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="https://instagram.com/dreamauraevents">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
