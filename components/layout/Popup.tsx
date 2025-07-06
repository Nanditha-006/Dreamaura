'use client'
import Link from 'next/link'
import { useEffect, useRef, useCallback, useState } from 'react'

export default function Popup() {
    const [visible, setVisible] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const closePopup = useCallback(() => {
        setVisible(false)
    }, [])

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setVisible(true)
        }, 100)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    if (!visible) return null

    return (
        <>
            <div id="popup" className="popup-overlay" style={{ display: 'flex' }}>
                <div className="popup-content">
                    <span className="close-btn" id="close-popup" onClick={closePopup}>×</span>
                    <div className="popup-icon">
                        <img src="/assets/img/logo/popup-logo.png" alt="Dream Aura Events Logo" />
                    </div>
                    <div className="space32" />
                    <div className="heading2">
                        <h2>Make Your Events Unforgettable</h2>
                        <div className="space8" />
                        <ul>
                            <li><img src="/assets/img/icons/check3.svg" alt="" />Expert Event Planning Services</li>
                            <li><img src="/assets/img/icons/check3.svg" alt="" />Professional Photography &amp; Videography</li>
                            <li><img src="/assets/img/icons/check3.svg" alt="" />Custom Decor &amp; Entertainment</li>
                        </ul>
                    </div>
                    <div className="space50" />
                    <Link className="vl-btn2" href="/contact">
                        <span className="demo">Contact Us Now</span>
                        <span className="arrow">
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}
