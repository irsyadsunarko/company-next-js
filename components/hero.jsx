'use client'; // Pastikan ini ada di bagian atas file

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[610px] w-full">
            <img
              src="/images/wallpaper-1.jpg"
              alt="Slide 1"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white">Selamat Datang di Perusahaan Kami</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[610px] w-full">
          <img
              src="/images/wallpaper-2.jpg"
              alt="Slide 1"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white">Solusi Kelistrikan Terbaik</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[610px] w-full">
          <img
              src="/images/wallpaper-3.jpg"
              alt="Slide 1"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white">Portofolio Proyek Kami</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}