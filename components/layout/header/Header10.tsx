import Link from 'next/link'

export default function Header10({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage10 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo5.png" alt="Dream Aura Events Logo" /></Link>
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
                                                                        <Link className="vl-btn10" href="/"><span className="demo">View Demo</span></Link>
                                                                    </div>
                                                                    <div className="homemenu-text">
                                                                        <Link href="/">Dream Aura - Homepage 01</Link>
                                                                    </div>
                                                                </div>
                                                                {/* Add more homepage demos as needed */}
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
                                                    <li><Link href="/services/entertainment">Entertainment</Link></li>
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
                                        <div className="search-icon header__search header-search-btn" onClick={handleSearch}>
                                            <a><img src="/assets/img/icons/search1.svg" alt="Search Icon" /></a>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="https://facebook.com/dreamauraevents"><i className="fa-brands fa-facebook-f" /></Link>
                                            </li>
                                            <li>
                                                <Link href="https://instagram.com/dreamauraevents"><i className="fa-brands fa-instagram" /></Link>
                                            </li>
                                            <li>
                                                <Link href="https://linkedin.com/company/dreamauraevents"><i className="fa-brands fa-linkedin-in" /></Link>
                                            </li>
                                            <li>
                                                <Link href="https://pinterest.com/dreamauraevents" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
                                            </li>
                                        </ul>
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
