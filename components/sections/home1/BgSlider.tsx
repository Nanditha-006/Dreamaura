'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function BgSlider() {
  const bgImages = [
    '/assets/img/bg/header-bg1.png',
    '/assets/img/bg/header-bg2.png',
    '/assets/img/bg/header-bg3.png',
    '/assets/img/bg/header-bg4.png',
    '/assets/img/bg/header-bg5.png',
    '/assets/img/bg/header-bg6.png',
    '/assets/img/bg/header-bg7.png',
  ];

  return (
    <div style={{
      position: 'absolute', // Changed from 'fixed' to 'absolute'
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
    }}>
      <Swiper
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        style={{ width: '100%', height: '100%' }}
      >
        {bgImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Background ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
