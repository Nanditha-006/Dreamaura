"use client";
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Memories() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div>
                {/* HEADER */}
                <div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg12.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="heading1 text-center">
                                    <h1>Recent Memories</h1>
                                    <div className="space20" />
                                    <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Recent Memories</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MEMORY SECTION */}
                <div className="memory-inner-section-area sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img4.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/family">Family Day</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img5.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        <p></p>
                                        <div className="space12" />
                                        <Link href="/pre-wedding">Pre-Wedding Shoot</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img6.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/robotica">Robotica 2024</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img7.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                       
                                        <div className="space12" />
                                        <Link href="/farewell">AVM Farewell Party</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img8.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/geodis-event">Geodis event</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img9.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/annual-day">Annual Day DAV</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img10.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/farewell">AVM Farewell Party</Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img1.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/dakshinchitra">Dakshin Chitra Event</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="memory3-boxarea">
                                    <div className="img1">
                                        <img src="/assets/img/all-images/memory/memory-img11.png" alt="memory" loading="lazy" />
                                    </div>
                                    <div className="content-area">
                                        
                                        <div className="space12" />
                                        <Link href="/college-culturals">College Culturals 2024</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              

            </div>
        </Layout>
    )
}