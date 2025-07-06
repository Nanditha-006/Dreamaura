'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')
        const homepageClasses = Array.from({ length: 10 }, (_, i) => `homepage${i + 1}-body`)

        if (bodyElement) {
            // Remove all homepage body classes
            homepageClasses.forEach(cls => bodyElement.classList.remove(cls))

            // Map pathname to corresponding class
            const classMap: { [key: string]: string } = {
                '/': 'homepage1-body',
                '/index2': 'homepage2-body',
                '/index3': 'homepage3-body',
                '/index4': 'homepage4-body',
                '/index5': 'homepage5-body',
                '/index6': 'homepage6-body',
                '/index7': 'homepage7-body',
                '/index8': 'homepage8-body',
                '/index9': 'homepage9-body',
                '/index10': 'homepage10-body',
            }

            const className = classMap[pathname || '/'] || 'homepage1-body'
            bodyElement.classList.add(className)
        }

        // Scroll to the top of the page with a slight delay
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        }, 0)
    }, [pathname])

    return null
}
