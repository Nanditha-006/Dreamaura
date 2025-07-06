'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
}

export default function Section5() {
    return (
        <div className="testimonials1-section-area sp1">
            <div className="testimonial-img2">
                <img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="Testimonial Background" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="testimonial-header heading2">
                            <h5 data-aos="fade-left" data-aos-duration={1000}>Testimonials</h5>
                            <div className="space16" />
                            <h2 className="text-anime-style-3">What Our Clients Say</h2>
                            <p data-aos="fade-left" data-aos-duration={900}>
                                Discover how Dream Aura Events has transformed special moments into unforgettable memories for our clients.
                            </p>
                        </div>
                        <div className="space32" />
                        <Swiper {...swiperOptions} className="testimonial-content-slider owl-carousel">
                            {/* Testimonial 1 */}
                            <SwiperSlide className="testimonial-widget-box">
                                <div className="list-display">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                            <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space22" />
                                <p>“Dream Aura Events made our ROBOTICA magical. Their attention to detail and creativity exceeded our expectations!”</p>
                                <div className="space24" />
                                <div className="auhtor-area">
                                    <div className="name-area">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/testimonials/testimonial-img1.png" alt="Client Testimonial" />
                                        </div>
                                        <div className="text">
                                            <Link href="/speakers">Hariharan</Link>
                                            <div className="space12" />
                                            <p>otomatiks-Tambaram</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Testimonial 2 */}
                            <SwiperSlide className="testimonial-widget-box">
                                <div className="list-display">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                            <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space22" />
                                <p>“Our wedding was flawless thanks to Dream Aura Events. The decor and coordination were simply perfect!”</p>
                                <div className="space24" />
                                <div className="auhtor-area">
                                    <div className="name-area">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="Client Testimonial" />
                                        </div>
                                        <div className="text">
                                            <Link href="/speakers">Priya & Arjun</Link>
                                            <div className="space12" />
                                            <p>Chennai</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Testimonial 3 */}
                            <SwiperSlide className="testimonial-widget-box">
                                <div className="list-display">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                            <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space22" />
                                <p>“Professional, creative, and reliable! Our corporate event was a huge success because of their team.”</p>
                                <div className="space24" />
                                <div className="auhtor-area">
                                    <div className="name-area">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/testimonials/testimonial-img3.png" alt="Client Testimonial" />
                                        </div>
                                        <div className="text">
                                            <Link href="/speakers">Ramesh Kumar</Link>
                                            <div className="space12" />
                                            <p>Infosys, Chennai</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Testimonial 4 */}
                            <SwiperSlide className="testimonial-widget-box">
                                <div className="list-display">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="icons">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={24} viewBox="0 0 28 24" fill="none">
                                            <path d="M15.3469 5.73963C15.3469 7.2063 15.7303 8.43797 16.4969 9.43463C17.0403 10.1213 17.7775 10.5724 18.7086 10.788C19.6253 11.0013 20.4919 11.0163 21.2753 10.8346C21.5419 12.418 21.1086 14.0946 20.0086 15.8713C18.9064 17.6469 17.4853 18.9819 15.7453 19.8763L18.3803 23.668C19.7136 23.008 20.9803 22.1713 22.1469 21.1596C23.3303 20.148 24.3803 18.9846 25.3136 17.6696C26.2469 16.3546 26.9469 14.8696 27.3969 13.1863C27.8469 11.503 27.9719 9.7863 27.7569 8.01963C27.4769 5.6863 26.7236 3.81963 25.4969 2.4363C24.2714 1.03519 22.7447 0.334633 20.9169 0.334633C19.3086 0.334633 17.9736 0.817966 16.9169 1.79797C15.8714 2.75797 15.3492 4.07352 15.3503 5.74463L15.3469 5.73963ZM0.140263 5.73963C0.140263 7.2063 0.523598 8.43797 1.29026 9.43463C1.83471 10.1346 2.57193 10.5885 3.50193 10.7963C4.43526 11.0019 5.29082 11.0141 6.06859 10.833C6.33526 12.3996 5.9186 14.083 4.81526 15.8663C3.71526 17.633 2.29526 18.9663 0.555264 19.8663L3.1836 23.668C4.51804 23.008 5.7736 22.1719 6.95026 21.1596C8.14426 20.1329 9.20475 18.9604 10.1069 17.6696C11.0336 16.353 11.7236 14.8696 12.1736 13.1863C12.6307 11.5043 12.7536 9.74894 12.5353 8.01963C12.2586 5.6863 11.5086 3.81963 10.2853 2.4363C9.06304 1.04519 7.53915 0.349634 5.7136 0.349634C4.10248 0.347412 2.76804 0.834633 1.71026 1.8113C0.664705 2.7713 0.141375 4.08685 0.140263 5.75797V5.73963Z" fill="#FFBA00" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="space22" />
                                <p>“The birthday party was a dream come true for our daughter. Thank you for making it so special!”</p>
                                <div className="space24" />
                                <div className="auhtor-area">
                                    <div className="name-area">
                                        <div className="img1">
                                            <img src="/assets/img/all-images/testimonials/testimonial-img4.png" alt="Client Testimonial" />
                                        </div>
                                        <div className="text">
                                            <Link href="/speakers">Meena S.</Link>
                                            <div className="space12" />
                                            <p>Anna Nagar</p>
                                        </div>
                                    </div>
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
    )
}


