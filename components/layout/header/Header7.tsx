import Link from 'next/link'

export default function Header7({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage7 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo1.png" alt="Dream Aura Events Logo" /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery">Gallery</Link>
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
                                        <div className="search-icon header__search header-search-btn" onClick={handleSearch}>
                                            <a><img src="/assets/img/icons/search1.svg" alt="Search Icon" /></a>
                                        </div>
                                        <div className="btn-area1">
                                            <Link className="vl-btn7" href="/pricing-plan"><span className="demo">Get a Quote</span><span className="arrow"><i className="fa-solid fa-arrow-right" /></span></Link>
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
