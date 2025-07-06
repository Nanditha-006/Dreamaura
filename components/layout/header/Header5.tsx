import Link from 'next/link'

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage5 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo2.png" alt="Dream Aura Events Logo" /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link href="/#">Home <i className="fa-solid fa-angle-down" /></Link>
                                                <div className="tp-submenu">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="all-images-menu">
                                                                <div className="homemenu-thumb">
                                                                    <div className="img1">
                                                                        <img src="/assets/img/all-images/demo/demo-img1.png" alt="Homepage 1" />
                                                                    </div>
                                                                    <div className="homemenu-btn">
                                                                        <Link className="vl-btn5" href="/"><span className="demo">View Demo</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="homemenu-text">
                                                                        <Link href="/">Dream Aura - Homepage 01</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li>
                                                <Link href="/#">Services <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/services/event-planning">Event Planning</Link></li>
                                                    <li><Link href="/services/photography">Photography</Link></li>
                                                    <li><Link href="/services/catering">Catering</Link></li>
                                                    <li><Link href="/services/decor">Decor & Design</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/portfolio">Portfolio</Link></li>
                                            <li>
                                                <Link href="/#">Blogs <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/blog">Our Blog</Link></li>
                                                    <li><Link href="/blog-single">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/#">Pages <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/memories">Our Memories</Link></li>
                                                    <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                                                    <li><Link href="/faq">FAQs</Link></li>
                                                    <li><Link href="/contact">Contact Us</Link></li>
                                                </ul>
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
                                        <div className="search-icon header__search header-search-btn" onClick={handleSearch}>
                                            <a><img src="/assets/img/icons/search1.svg" alt="Search Icon" /></a>
                                        </div>
                                        <div className="btn-area1">
                                            <Link className="vl-btn5" href="/pricing-plan"><span className="demo">Get a Quote</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={`header-search-form-wrapper ${isSearch ? 'open' : ''}`}>
                                        <div className="tx-search-close tx-close" onClick={handleSearch}><i className="fa-solid fa-xmark" /></div>
                                        <div className="header-search-container">
                                            <form role="search" className="search-form">
                                                <input type="search" className="search-field" placeholder="Search …" name="s" />
                                                <button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="Search Icon" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    {isSearch && <div className="body-overlay active" onClick={handleSearch} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
