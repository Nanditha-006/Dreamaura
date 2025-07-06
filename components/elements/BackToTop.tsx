'use client'
import { useEffect, useState } from "react"

interface BackToTopProps {
    target: string
}

export default function BackToTop({ target }: BackToTopProps) {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleClick = () => {
        const el = document.querySelector(target)
        if (el) {
            window.scrollTo({
                top: (el as HTMLElement).offsetTop,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <>
            {hasScrolled && (
                <div className="paginacontainer" onClick={handleClick}>
                    <div className="progress-wrap">
                        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                        </svg>
                    </div>
                </div>
            )}
        </>
    )
}
