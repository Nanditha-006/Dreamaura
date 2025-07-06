'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 30 },
        575: { slidesPerView: 2, spaceBetween: 30 },
        767: { slidesPerView: 2, spaceBetween: 30 },
        991: { slidesPerView: 3, spaceBetween: 30 },
        1199: { slidesPerView: 4, spaceBetween: 30 },
        1350: { slidesPerView: 4, spaceBetween: 30 },
    }
}

export default function BrandSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="brand-slider-area owl-carousel">
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img1.png" alt="Taj Hotels - Event Venue Partner" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img2.png" alt="ITC Grand Chola - Luxury Events" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img3.png" alt="The Leela Palace - Premium Celebrations" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img4.png" alt="Radisson Blu - Hospitality Partner" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img5.png" alt="Hyatt Regency - Event Collaborator" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img6.png" alt="Vivanta by Taj - Wedding Partner" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img7.png" alt="Marriott - Banquet Partner" />
                </SwiperSlide>
                <SwiperSlide className="brand-box">
                    <img src="/assets/img/elements/brand-img8.png" alt="Park Hyatt - Luxury Events" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
