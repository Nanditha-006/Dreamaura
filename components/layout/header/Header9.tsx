import Link from 'next/link'

export default function Header9({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage9 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
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
