import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>
            <ul className="sub-menu">
                <Link href="/" className={router.pathname == "/" ? "active" : ""}>Home</Link>
                <Link href="/about" className={router.pathname == "/about" ? "active" : ""}>About Us</Link>
                <Link href="/services" className={router.pathname == "/services" ? "active" : ""}>Services</Link>
                <Link href="/portfolio" className={router.pathname == "/portfolio" ? "active" : ""}>Portfolio</Link>
                <Link href="/blog" className={router.pathname == "/blog" ? "active" : ""}>Blog</Link>
                <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Contact Us</Link>
                <li>
                    <a href="tel:+917550277296">+91 75502 77296</a>
                </li>
                <li>
                    <a href="mailto:Dreamauraevent@gmail.com">Dreamauraevent@gmail.com</a>
                </li>
            </ul>
        </>
    )
}
