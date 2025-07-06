'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Footer5 from './footer/Footer5'
import Footer6 from './footer/Footer6'
import Footer7 from './footer/Footer7'
import Footer8 from './footer/Footer8'
import Footer9 from './footer/Footer9'
import Footer10 from './footer/Footer10'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Header4 from './header/Header4'
import Header5 from './header/Header5'
import Header6 from './header/Header6'
import Header7 from './header/Header7'
import Header8 from './header/Header8'
import Header9 from './header/Header9'
import Header10 from './header/Header10'
import MobileMenu from './MobileMenu'

interface LayoutProps {
    headerStyle?: Number
    footerStyle?: Number
    children?: React.ReactNode
    breadcrumbTitle?: string
}

const headers = [
    Header1, Header2, Header3, Header4, Header5,
    Header6, Header7, Header8, Header9, Header10
]
const footers = [
    Footer1, Footer2, Footer3, Footer4, Footer5,
    Footer6, Footer7, Footer8, Footer9, Footer10
]

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false)
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
    const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu)
    const [isSearch, setSearch] = useState<boolean>(false)
    const handleSearch = (): void => setSearch(!isSearch)

    useEffect(() => {
        AOS.init()
        const handleScroll = (): void => {
            const scrollCheck: boolean = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])

    const HeaderComponent = headerStyle
        ? headers[(headerStyle as number) - 1]
        : Header1

    const FooterComponent = footerStyle
        ? footers[(footerStyle as number) - 1]
        : Footer1

    return (
        <>
            <div id="top" />
            <AddClassBody />
            {/* <AnimatedText /> */}
            <HeaderComponent
                scroll={scroll}
                isMobileMenu={isMobileMenu}
                handleMobileMenu={handleMobileMenu}
                isSearch={isSearch}
                handleSearch={handleSearch}
            />
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            {children}
            <div style={{ background: "#f3eafd" }}>
                <FooterComponent />
            </div>
            <BackToTop target="#top" />
        </>
    )
}
