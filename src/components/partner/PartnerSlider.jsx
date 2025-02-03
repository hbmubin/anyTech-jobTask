import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


import partner1 from "../../assets/partner/partner1.png";
import partner2 from "../../assets/partner/partner2.png";
import partner3 from "../../assets/partner/partner3.png";
import partner4 from "../../assets/partner/partner4.png";
import partner5 from "../../assets/partner/partner5.png";
import partner6 from "../../assets/partner/partner6.png";
import partner7 from "../../assets/partner/partner7.png";
import partner8 from "../../assets/partner/partner8.png";
import partner9 from "../../assets/partner/partner9.png";
import partner10 from "../../assets/partner/partner10.png";
import partner11 from "../../assets/partner/partner11.png";
import partner12 from "../../assets/partner/partner12.png";
import partner13 from "../../assets/partner/partner13.png";
import partner14 from "../../assets/partner/partner14.png";
import partner15 from "../../assets/partner/partner15.png";
import useGetWidth from '../../hooks/useGetWidth';

const partners = [
  {
    id: 1,
    img: partner1,
    title: `Bank of Challenge`,
  },
  {
    id: 2,
    img: partner2,
    title: `BANK OF CHINA`,
  },
  {
    id: 3,
    img: partner3,
    title: `Bank of Shanghai`,
  },
  {
    id: 4,
    img: partner4,
    title: `CGB`,
  },
  {
    id: 5,
    img: partner5,
    title: `CHINA CITIC BANK`,
  },
  {
    id: 6,
    img: partner6,
    title: `OneBank`,
  },
  {
    id: 7,
    img: partner7,
    title: `PING AN BANK`,
  },
  {
    id: 8,
    img: partner8,
    title: `POSTAL SAVINGS BANK OF CHINA`,
  },
  {
    id: 9,
    img: partner9,
    title: `sea`,
  },
  {
    id: 10,
    img: partner10,
    title: `Shandong City Commercial Bank Alliance`,
  },
  {
    id: 11,
    img: partner11,
    title: `VipFubon Consumer Finance`,
  },
  {
    id: 12,
    img: partner12,
    title: `XIAMEN INTERNATIONAL BANK`,
  },
  {
    id: 13,
    img: partner13,
    title: `XW`,
  },
  {
    id: 14,
    img: partner14,
    title: `SPD BANK`,
  },
  {
    id: 15,
    img: partner15,
    title: `DCS`,
  },
];
const PartnerSlider = () => {
    const size = useGetWidth()
    const slidesPerViewConfig = {
        xs: 2,
        sm: 3.5,
        md: 3.5,
        lg: 5,
        xl: 5,
      };
    return (
        <Swiper
        slidesPerView={slidesPerViewConfig[size] || 2}
        spaceBetween={0}
        autoHeight={false}
        centeredSlides ={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000, 
            disableOnInteraction: false, 
          }}
          speed={2000}
          modules={[Autoplay]} 
        className="mySwiper h-20 my-10"
      >
        {partners.map((p) => (
            <SwiperSlide key={p.id}><figure
            className="h-20 grid place-items-center"
          >
            <img className='md:w-auto w-[150px]' src={p.img} alt={p.title} />
          </figure></SwiperSlide>
            
          ))}
      </Swiper>
    );
};

export default PartnerSlider;