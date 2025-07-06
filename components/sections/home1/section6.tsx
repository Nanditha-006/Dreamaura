'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        575: { slidesPerView: 2, spaceBetween: 30 },
        767: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 2, spaceBetween: 30 },
        1199: { slidesPerView: 3, spaceBetween: 30 },
        1350: { slidesPerView: 3, spaceBetween: 30 },
    }
}

export default function Section6() {
    return (
        <>
            <div className="memory1-section-area sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="memory-header text-center heading2 space-margin60">
                                <h5 data-aos="fade-left" data-aos-duration={800}>Cherished Memories</h5>
                                <div className="space16" />
                                <h2 className="text-anime-style-3">Unforgettable Events of Dream Aura</h2>
                                <p data-aos="fade-left" data-aos-duration={900}>
                                    Relive the magic of our most memorable events. From weddings to corporate galas, every moment is crafted with care and precision.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 memory-slider-area">
                            <Swiper {...swiperOptions} className="owl-carousel">
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/memory/new-image1.png" alt="Cultural Festival" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="Dream Aura Logo" className="logo1 keyframe5" />
                                        <div className="space18" />
                                        <p>Cultural Festival</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/memory/new-image2.png" alt="House Warming" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="Dream Aura Logo" className="logo1 keyframe5" />
                                        <div className="space18" />
                                        <p>House Warming</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="memory-boxarea">
                                    <div className="img1 image-anime">
                                        <img src="/assets/img/all-images/memory/new-image3.png" alt="Robo Fest" />
                                    </div>
                                    <div className="content-area">
                                        <img src="/assets/img/icons/logo1.svg" alt="Dream Aura Logo" className="logo1 keyframe5" />
                                        <div className="space18" />
                                        <p>Robo Fest</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="owl-nav">
                                <button type="button" role="presentation" className="owl-prev h1p">
                                    <i className="fa-solid fa-angle-left" />
                                </button>
                                <button type="button" role="presentation" className="owl-next h1n">
                                    <i className="fa-solid fa-angle-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}