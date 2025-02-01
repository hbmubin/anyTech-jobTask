import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import slideImg1 from "../../assets/technology/slide1.png";
import slideImg2 from "../../assets/technology/slide2.png";
import slideImg3 from "../../assets/technology/slide3.png";
import slideImg4 from "../../assets/technology/slide4.png";

import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";

const slideData = [
  {
    id: 1,
    img: slideImg1,
    sub: `Customer focused`,
    title: `Purpose-built financial services`,
    des: {
      strong: `Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.`,
      normal: `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.`,
    },
  },
  {
    id: 2,
    img: slideImg2,
    sub: `Agile and adaptable`,
    title: `Agile and adaptable for growth`,
    des: {
      strong: `Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.`,
      normal: `Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.`,
    },
  },
  {
    id: 3,
    img: slideImg3,
    sub: `Compliance ready`,
    title: `Manage compliance with ease`,
    des: {
      strong: `Navigate through the evolving regulatory landscape with confidence by streamlining compliance management— through real-time risk monitoring solutions powered by Al and machine learning.`,
      normal: `Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.`,
    },
  },
  {
    id: 4,
    img: slideImg4,
    sub: `Secure and safe`,
    title: `Highly secure and safe`,
    des: {
      strong: `Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.`,
      normal: `Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.`,
    },
  },
];

const Slider = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center mx-4 py-8 gap-4">
        {slideData.map((slide, index) => (
          <button key={slide.id} className={`text-lg text-nowrap px-12 py-2.5 text-blueLight rounded-full font-semibold transition-all duration-200 cursor-pointer ${
            activeIndex === index
              ? "bg-blue-200"
              : "hover:bg-blue-50"
          }`} onClick={() => swiperRef.current?.slideTo(index)}>
            {slide.sub}
          </button>
        ))}
      </div>
      <Swiper
        spaceBetween={50}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Pagination]}
        className="mySwiper rounded-[20px]"
      >
        {slideData.map((data) => (
          <SwiperSlide className="rounded-[20px] bg-white" key={data.id}>
            <article className="p-16 grid grid-cols-2 gap-8 lg:h-[550px]">
              <header>
                <h6 className="default-subTitle text-blueLight mb-8">{data.sub}</h6>
                <h2 className="text-[40px] leading-[120%] font-semibold font-montserrat text-blueDeep">{data.title}</h2>
                <div className="mt-8">
                  <p className={`default-para text-blueMedium`}>{data.id !=4 ? <strong>{data.des.strong}</strong> : data.des.strong}</p>
                  <p className="default-para text-blueMedium mt-6">{data.des.normal}</p>
                </div>
              </header>
              <figure>
                <img className="rounded-[20px] size-full object-cover" src={data.img} alt={data.title} />
              </figure>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
