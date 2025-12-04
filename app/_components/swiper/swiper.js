"use client"; // Swiper must run on the client

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GuruverseSwiper() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* <h2 className="text-3xl font-bold text-center mb-6 text-black">
        Kegiatan Kami
      </h2> */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
      >
        <SwiperSlide>
          <div className=" text-white  flex flex-col justify-center items-center pb-12">
            <img src="/images/kegiatan1.jpg" className="w-full h-auto rounded-3xl "/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white  flex flex-col justify-center items-center pb-12">
            <img src="/images/kegiatan2.jpg" className="w-full h-auto rounded-3xl "/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white  flex flex-col justify-center items-center pb-12">
            <img src="/images/kegiatan3.jpg" className="w-full h-auto rounded-3xl "/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white  flex flex-col justify-center items-center pb-12">
            <img src="/images/kegiatan4.jpg" className="w-full h-auto rounded-3xl "/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-white flex flex-col justify-center items-center pb-12">
            <img src="/images/kegiatan5.jpg" className="w-full h-auto rounded-3xl "/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
