"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GhostButton from "@/components/Button/GhostButton";
import Link from "next/link";

const sliders = [
  {
    id: 1,
    image: "/bg-img/curly_hair_girl-1.jpg",
    imageTablet: "/bg-img/curly_hair_girl-1-tablet.png",
    imageMobile: "/bg-img/curly_hair_girl-1_mobile.jpg",

    titleUp: "Stories and Ideas",
    titleDown: "Inspiring Life Journeys",
    rightText: false,
    link: "/tags?tag=All",
  },
  {
    id: 2,
    image: "/bg-img/Fashion-Man1.jpg",
    imageTablet: "/bg-img/Fashion-Man1-tablet.jpg",
    imageMobile: "/bg-img/curly_hair_white-1_mobile.jpg",
    titleUp: "Lets Talk About Fashion",
    titleDown: "The Latest Trends and Styles",
    rightText: false,
    link: "/tags?tag=Fashion",
  },
];

const Slideshow = () => {
  return (
    <>
      <div className="relative -top-20 h-100 w-full z-20 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            type: "fraction",
            dynamicBullets: true,
          }}
          className="mySwiper "
          style={
            {
              "--swiper-navigation-color": "#133522",
              "--swiper-pagination-color": "#133522",
            } as React.CSSProperties
          }
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <Link href={slider.link}>
                <div className="hidden lg:block h-[90vh]">
                  <Image
                    layout="responsive"
                    src={slider.image}
                    width={1144}
                    height={572}
                    alt={"some name"}
                  />
                </div>
                <div className="hidden sm:block lg:hidden ">
                  <Image
                    layout="responsive"
                    src={slider.imageTablet}
                    width={820}
                    height={720}
                    alt={"some name"}
                  />
                </div>
                <div className="sm:hidden">
                  <Image
                    layout="responsive"
                    src={slider.imageMobile}
                    width={428}
                    height={800}
                    alt={"some name"}
                  />
                </div>
                <div
                  className={
                    slider.rightText ? "rightTextSection" : "leftTextSection"
                  }
                >
                  <span
                    className={` my-4 text-center ${
                      slider.rightText ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <span className="font-bold text-2xl sm:text-5xl md:text-6xl lg:text-4xl">
                      {slider.titleUp}{" "}
                    </span>
                    <br />
                    <span className=" text-xl">{slider.titleDown}</span>
                  </span>
                  <GhostButton inverted={true}>Explore</GhostButton>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slideshow;
