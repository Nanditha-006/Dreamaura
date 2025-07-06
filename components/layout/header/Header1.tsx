'use client';

import Link from 'next/link';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
  return (
    <header>
      <div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-elements">
                {/* Logo */}
                <div className="site-logo">
                  <Link href="/">
                    <img
                      src="/assets/img/logo/logo2.png"
                      alt="Dream Aura Events Logo"
                      style={{ maxHeight: 48, width: "auto", display: "block" }}
                    />
                  </Link>
                </div>

                {/* Menu */}
                <div className="main-menu">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services/catering">Catering</Link></li>
                    <li><Link href="/services/decor">Decor</Link></li>
                    <li><Link href="/services/photography">Photography</Link></li>
                    <li><Link href="/services/videography">Videography</Link></li>
                    <li><Link href="/memories">Gallery</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>

                {/* Social Icons */}
                <div className="btn-area">
                  <ul>
                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                    <li><Link href="https://www.instagram.com/dreamauraevents?igsh=MjNyeTl2dnA5ZHV1"><i className="fa-brands fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
