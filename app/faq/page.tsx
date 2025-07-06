'use client'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Faq() {
    const [isTab, setIsTab] = useState(1)
    const handleTab = (i: number) => {
        setIsTab(i)
    }
    const [isAccordion, setIsAccordion] = useState(1)

    const handleAccordion = (key: any) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg15.png)' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 m-auto">
                                    <div className="heading1 text-center">
                                        <h1>Frequently Asked Questions</h1>
                                        <div className="space20" />
                                        <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Frequently Asked Questions</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA ENDS =======*/}
                    {/*===== FAQ AREA STARTS =======*/}
                    <div className="faq-inner-section-area sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 m-auto">
                                    <div className="heading2 text-center space-margin60">
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-11">
                                    <div className="faq-widget-area">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" onClick={() => handleTab(1)}>
                                                <button className={isTab == 1 ? "nav-link active" : "nav-link"}>All</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleTab(2)}>
                                                <button className={isTab == 2 ? "nav-link active" : "nav-link"}>Event Information</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleTab(3)}>
                                                <button className={isTab == 3 ? "nav-link active" : "nav-link"}>Booking &amp; Payment</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleTab(4)}>
                                                <button className={isTab == 4 ? "nav-link active" : "nav-link"}>Event Experience</button>
                                            </li>
                                            <li className="nav-item" onClick={() => handleTab(5)}>
                                                <button className={isTab == 5 ? "nav-link m-0 active" : "nav-link m-0"}>Vendors &amp; Services</button>
                                            </li>
                                        </ul>
                                        <div className="space48" />
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                <div className="faq-section-area">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(1)}>
                                                                            <button className={isAccordion == 1 ? "accordion-button" : "accordion-button collapsed"}>What types of events do you organize?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>We organize weddings, birthdays, anniversaries, corporate events, and more across India. Our team customizes every event to your needs.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(2)}>
                                                                            <button className={isAccordion == 2 ? "accordion-button" : "accordion-button collapsed"}>Where are you based and do you provide services pan-India?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Dream Aura Events is based in Chennai, but we provide event planning and management services all over India.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(3)}>
                                                                            <button className={isAccordion == 3 ? "accordion-button" : "accordion-button collapsed"}>How far in advance should I book my event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>We recommend booking at least 2-3 months in advance for the best availability, but we also accommodate last-minute requests whenever possible.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(4)}>
                                                                            <button className={isAccordion == 4 ? "accordion-button" : "accordion-button collapsed"}>Can you help with both traditional and modern themes?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Absolutely! Our team specializes in both traditional Indian celebrations and contemporary event themes.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(5)}>
                                                                            <button className={isAccordion == 5 ? "accordion-button" : "accordion-button collapsed"}>Do you offer customized packages?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Yes, we offer fully customized event packages to suit your preferences and budget.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample2">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(6)}>
                                                                            <button className={isAccordion == 6 ? "accordion-button" : "accordion-button collapsed"}>What payment methods do you accept?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>We accept UPI, bank transfer, credit/debit cards, and cash payments for your convenience.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(7)}>
                                                                            <button className={isAccordion == 7 ? "accordion-button" : "accordion-button collapsed"}>Can I visit your office for a consultation?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Yes! Please call us at +91 75502 77296 or email Dreamauraevent@gmail.com to schedule a meeting at our Chennai office.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(8)}>
                                                                            <button className={isAccordion == 8 ? "accordion-button" : "accordion-button collapsed"}>Do you provide vendor recommendations?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>We work with top vendors across India for catering, decor, photography, and entertainment, and can recommend the best for your event.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(9)}>
                                                                            <button className={isAccordion == 9 ? "accordion-button" : "accordion-button collapsed"}>How do I stay updated on your latest events?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Follow us on Instagram <Link href="https://instagram.com/dreamaura.events" target="_blank">@dreamaura.events</Link> or check our blog for updates and inspiration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(10)}>
                                                                            <button className={isAccordion == 10 ? "accordion-button" : "accordion-button collapsed"}>Can you handle last-minute bookings?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>We do our best to accommodate last-minute requests, subject to availability. Contact us as soon as possible for urgent bookings.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                <div className="faq-section-area">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample3">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(11)}>
                                                                            <button className={isAccordion == 11 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(12)}>
                                                                            <button className={isAccordion == 12 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 12 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(13)}>
                                                                            <button className={isAccordion == 13 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 13 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(14)}>
                                                                            <button className={isAccordion == 14 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 14 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(15)}>
                                                                            <button className={isAccordion == 15 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 15 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample4">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(16)}>
                                                                            <button className={isAccordion == 16 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 16 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(17)}>
                                                                            <button className={isAccordion == 17 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 17 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(18)}>
                                                                            <button className={isAccordion == 18 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 18 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(19)}>
                                                                            <button className={isAccordion == 19 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 19 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(20)}>
                                                                            <button className={isAccordion == 20 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 20 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                <div className="faq-section-area">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample5">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(21)}>
                                                                            <button className={isAccordion == 21 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 21 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(22)}>
                                                                            <button className={isAccordion == 22 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 22 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(23)}>
                                                                            <button className={isAccordion == 23 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 23 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(24)}>
                                                                            <button className={isAccordion == 24 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 24 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(25)}>
                                                                            <button className={isAccordion == 25 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 25 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample6">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(26)}>
                                                                            <button className={isAccordion == 26 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 26 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(27)}>
                                                                            <button className={isAccordion == 27 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 27 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(28)}>
                                                                            <button className={isAccordion == 28 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 28 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(29)}>
                                                                            <button className={isAccordion == 29 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 29 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(30)}>
                                                                            <button className={isAccordion == 30 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 30 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                <div className="faq-section-area">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample7">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(31)}>
                                                                            <button className={isAccordion == 31 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 31 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(32)}>
                                                                            <button className={isAccordion == 32 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 32 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(33)}>
                                                                            <button className={isAccordion == 33 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 33 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(34)}>
                                                                            <button className={isAccordion == 34 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 34 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(35)}>
                                                                            <button className={isAccordion == 35 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 35 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample8">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(36)}>
                                                                            <button className={isAccordion == 36 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 36 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(37)}>
                                                                            <button className={isAccordion == 37 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 37 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(38)}>
                                                                            <button className={isAccordion == 38 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 38 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(39)}>
                                                                            <button className={isAccordion == 39 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 39 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(40)}>
                                                                            <button className={isAccordion == 40 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 40 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"}>
                                                <div className="faq-section-area">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample9">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(41)}>
                                                                            <button className={isAccordion == 41 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 41 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(42)}>
                                                                            <button className={isAccordion == 42 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 42 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(43)}>
                                                                            <button className={isAccordion == 43 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 43 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(44)}>
                                                                            <button className={isAccordion == 44 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 44 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(45)}>
                                                                            <button className={isAccordion == 45 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 45 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="accordian-area">
                                                                <div className="accordion" id="accordionExample10">
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(46)}>
                                                                            <button className={isAccordion == 46 ? "accordion-button" : "accordion-button collapsed"}>What is Eventify, and who is it for?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 46 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(47)}>
                                                                            <button className={isAccordion == 47 ? "accordion-button" : "accordion-button collapsed"}>When and where is Eventify 2024 taking place?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 47 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(48)}>
                                                                            <button className={isAccordion == 48 ? "accordion-button" : "accordion-button collapsed"}>How much does it cost to attend Eventify 2024?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 48 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(49)}>
                                                                            <button className={isAccordion == 49 ? "accordion-button" : "accordion-button collapsed"}>Will there be networking opportunities Eventify?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 49 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="space20" />
                                                                    <div className="accordion-item">
                                                                        <h2 className="accordion-header" onClick={() => handleAccordion(50)}>
                                                                            <button className={isAccordion == 50 ? "accordion-button" : "accordion-button collapsed"}>How can I access session materials after event?</button>
                                                                        </h2>
                                                                        <div className={isAccordion == 50 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                                                                            <div className="accordion-body">
                                                                                <p>Eventify 2024 will be held on 26 at USA , located in New York. Full event details, including timings and venue information, will be provided after registration.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== FAQ AREA ENDS =======*/}
                    {/*===== CTA AREA STARTS =======*/}
                    <div className="cta1-section-area d-lg-block d-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="cta1-main-boxarea">
                                        <div className="timer-btn-area">
                                            <Countdown />
                                            <div className="btn-area1">
                                                <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
                                            </li>
                                            <li className="m-0">
                                                <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
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
                                                <Link href="/pricing-plan" className="vl-btn1">Book Now</Link>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link href="#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
                                            </li>
                                            <li className="m-0">
                                                <Link href="#"><img src="/assets/img/icons/location1.svg" alt="" />Chennai, India</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}