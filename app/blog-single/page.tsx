'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import '@/node_modules/react-modal-video/css/modal-video.css';

import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogSingle() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg14.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Blog Details</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Blog Details</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== BLOG AREA STARTS =======*/}
                    <div className="blog-details-section sp8">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog-deatils-content heading2">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/blog/blog-img7.png" alt="" />
                                        </div>
                                        <div className="space32" />
                                        <ul>
                                            <li>
                                                <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
                                            </li>
                                            <li>
                                                <Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Priya <span> | </span></Link>
                                            </li>
                                            <li>
                                                <Link href="/#"><img src="/assets/img/icons/comments1.svg" alt="" />2 Comments</Link>
                                            </li>
                                        </ul>
                                        <div className="space18" />
                                        <h2>Top 5 Wedding Decor Trends in India</h2>
                                        <div className="space16" />
                                        <p>Indian weddings are known for their grandeur and vibrant decor. In this blog, we explore the latest trends in wedding decorations that are making celebrations truly magical. From floral installations to eco-friendly themes, discover how Dream Aura Events can transform your special day.</p>
                                        <div className="space48" />
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="img1 image-anime">
                                                    <img src="/assets/img/all-images/blog/blog-img8.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="space30 d-md-none d-block" />
                                                <div className="img1 image-anime">
                                                    <img src="/assets/img/all-images/blog/blog-img9.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <h3>Personalized Touches for Every Couple</h3>
                                        <div className="space16" />
                                        <p>Every couple is unique, and so should be their wedding decor. Our team at Dream Aura Events specializes in customizing themes, colors, and elements to reflect your personality and story.</p>
                                        <div className="space16" />
                                        <p>From traditional mandaps to contemporary stage designs, we ensure every detail is perfect for your big day. Let us help you create memories that last a lifetime.</p>
                                        <div className="space48" />
                                        <div className="video-btn-area">
                                            <div className="img1">
                                                <img src="/assets/img/all-images/blog/blog-img10.png" alt="" />
                                            </div>
                                            <div className="play">
                                                <a onClick={() => setOpen(true)} className="popup-youtube"><i className="fa-solid fa-play" /></a>
                                            </div>
                                        </div>
                                        <div className="space32" />
                                        <h3>Why Choose Dream Aura Events?</h3>
                                        <div className="space16" />
                                        <p>With years of experience and a passion for creativity, Dream Aura Events is your trusted partner for weddings, birthdays, anniversaries, and more across India. Our expert team brings your vision to life with attention to detail and flawless execution.</p>
                                        <div className="space32" />
                                        <div className="tags-social-area">
                                            <div className="tags">
                                                <h4>Tags:</h4>
                                                <ul>
                                                    <li><Link href="/#">#WeddingDecor</Link></li>
                                                    <li><Link href="/#" className="m-0">#IndianEvents</Link></li>
                                                </ul>
                                            </div>
                                            <div className="social">
                                                <h4>Social:</h4>
                                                <ul>
                                                    <li>
                                                        <Link href="https://facebook.com/dreamaura.events"><i className="fa-brands fa-facebook-f" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://instagram.com/dreamaura.events"><i className="fa-brands fa-instagram" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://youtube.com/dreamauraevents" className="m-0"><i className="fa-brands fa-youtube" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="space30 d-lg-none d-block" />
                                    <div className="blog-auhtor-details">
                                        <div className="search-area">
                                            <h3>Search</h3>
                                            <div className="space24" />
                                            <form>
                                                <input type="text" placeholder="Search..." />
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                                            </form>
                                        </div>
                                        <div className="space32" />
                                        <div className="blog-categories">
                                            <h3>Blog Category</h3>
                                            <div className="space12" />
                                            <ul>
                                                <li>
                                                    <Link href="/#">Wedding Inspiration <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">Birthday Parties <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">Anniversary Ideas <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">Event Planning Tips <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">Decor Trends <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">Memorable Moments <span><i className="fa-solid fa-angle-right" /></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space32" />
                                        <div className="tags-area">
                                            <h3>Popular Hashtags</h3>
                                            <div className="space12" />
                                            <ul>
                                                <li><Link href="/#">#WeddingDecor</Link></li>
                                                <li><Link href="/#">#BirthdayIdeas</Link></li>
                                                <li><Link href="/#">#EventPlanning</Link></li>
                                            </ul>
                                            <ul>
                                                <li><Link href="/#">#DreamAuraEvents</Link></li>
                                                <li><Link href="/#">#IndianWeddings</Link></li>
                                            </ul>
                                            <ul>
                                                <li><Link href="/#">#Celebrations</Link></li>
                                                <li><Link href="/#">#EventTrends</Link></li>
                                            </ul>
                                        </div>
                                        <div className="space32" />
                                        <div className="author-images-area">
                                            <h3>Popular Authors</h3>
                                            <div className="space12" />
                                            <ul>
                                                <li><img src="/assets/img/all-images/blog/blog-img11.png" alt="" /></li>
                                                <li><img src="/assets/img/all-images/blog/blog-img12.png" alt="" /></li>
                                                <li><img src="/assets/img/all-images/blog/blog-img13.png" alt="" /></li>
                                                <li><img src="/assets/img/all-images/blog/blog-img14.png" alt="" /></li>
                                            </ul>
                                            <ul>
                                                <li><img src="/assets/img/all-images/blog/blog-img15.png" alt="" /></li>
                                                <li><img src="/assets/img/all-images/blog/blog-img16.png" alt="" /></li>
                                                <li><img src="/assets/img/all-images/blog/blog-img17.png" alt="" /></li>
                                                <li><img src="/assets/img/all-images/blog/blog-img18.png" alt="" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== BLOG AREA ENDS =======*/}
                    {/*===== BLOG AREA STARTS =======*/}
                    <div className="bloginner-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Read More Blogs</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                    <div className="blog4-boxarea">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/memory/memory-img7.png" alt="" />
                                        </div>
                                        <div className="content-area">
                                            <ul>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />26 Jan 2025 <span> | </span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Anjali</Link>
                                                </li>
                                            </ul>
                                            <div className="space20" />
                                            <Link href="/blog-single">Unique Anniversary Celebration Ideas</Link>
                                            <div className="space24" />
                                            <Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
                                            <div className="arrow">
                                                <Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                                    <div className="blog4-boxarea">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/memory/memory-img8.png" alt="" />
                                        </div>
                                        <div className="content-area">
                                            <ul>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />15 Feb 2025 <span> | </span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Rahul</Link>
                                                </li>
                                            </ul>
                                            <div className="space20" />
                                            <Link href="/blog-single">How to Plan a Memorable Birthday Party</Link>
                                            <div className="space24" />
                                            <Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
                                            <div className="arrow">
                                                <Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                                    <div className="blog4-boxarea">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/memory/memory-img9.png" alt="" />
                                        </div>
                                        <div className="content-area">
                                            <ul>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />10 Mar 2025 <span> | </span></Link>
                                                </li>
                                                <li>
                                                    <Link href="/#"><img src="/assets/img/icons/user1.svg" alt="" />Priya</Link>
                                                </li>
                                            </ul>
                                            <div className="space20" />
                                            <Link href="/blog-single">Top 5 Wedding Decor Trends in India</Link>
                                            <div className="space24" />
                                            <Link href="/blog-single" className="readmore">read more <i className="fa-solid fa-arrow-right" /></Link>
                                            <div className="arrow">
                                                <Link href="/blog-single"><i className="fa-solid fa-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== BLOG AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-block d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="timer-btn-area">
                                            <Countdown />
                                            <div className="btn-area1">
                                                <Link href="/contact" className="vl-btn1">Plan Your Event</Link>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
                                            </li>
                                            <li className="m-0">
                                                <Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== CTA AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-none d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="timer-btn-area">
                                            <Countdown />
                                            <div className="btn-area1">
                                                <Link href="/contact" className="vl-btn1">Plan Your Event</Link>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
                                            </li>
                                            <li className="m-0">
                                                <Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}