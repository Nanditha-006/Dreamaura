import Link from 'next/link'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage3 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="menu-top-area">
                                    <div className="top-menu-area">
                                        <ul>
                                            <li>
                                                <Link href="mailto:dreamauraevents@gmail.com">
                                                    <img src="/assets/img/icons/mail1.svg" alt="Email Icon" />
                                                    dreamauraevents@gmail.com <span> | </span>
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
                                </div>
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo2.png" alt="Dream Aura Events Logo" /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/memories">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        <ul>
                                            <li>
                                                <Link href="https://instagram.com/dreamauraevents">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Removed search bar, facebook, linkedin, pinterest */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
