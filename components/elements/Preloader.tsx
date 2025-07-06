'use client'
import { useEffect, useState } from "react"

export default function Preloader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200) // Adjust duration as needed
        return () => clearTimeout(timer)
    }, [])

    if (!loading) return null

    return (
        <div className="preloader">
            <div className="preloader-inner">
                <img src="/assets/img/logo/logo1.png" alt="Dream Aura Events Logo" className="preloader-logo" />
                <div className="preloader-spinner"></div>
                <p>Loading Dream Aura Events...</p>
            </div>
            <style jsx>{`
                .preloader {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: #fff;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .preloader-inner {
                    text-align: center;
                }
                .preloader-logo {
                    width: 80px;
                    margin-bottom: 20px;
                }
                .preloader-spinner {
                    border: 4px solid #eee;
                    border-top: 4px solid #e91e63;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 16px auto;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
            `}</style>
        </div>
    )
}