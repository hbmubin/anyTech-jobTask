import { Swiper, SwiperSlide } from "swiper/react";
import philo1 from "../../assets/icons/philo-1.png";
import philo2 from "../../assets/icons/philo-2.png";
import philo3 from "../../assets/icons/philo-3.png";

import "swiper/css";
import "swiper/css/pagination";

const PhiloSlider = () => {
    
  return (
    <Swiper
  slidesPerView={window.innerWidth < 480 ? 1.2 : 1.5}
  spaceBetween={18}
  pagination={{ clickable: true }}
  className="mySwiper"
>
  {[
    {
      img: philo1,
      title: "Full-suite solutions",
      text: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      img: philo2,
      title: "Simplify the complex",
      text: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      img: philo3,
      title: "Cutting-edge tech",
      text: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ].map((slide, index) => (
    <SwiperSlide key={index} className="p-8 bg-[#F7FBFE] rounded-[20px] ">
      <figure>
        <img className="w-8" src={slide.img} alt="philo-icon" />
      </figure>
      <h4 className="my-2 default-cardTitle">{slide.title}</h4>
      <p className="default-para text-blueMedium">{slide.text}</p>
    </SwiperSlide>
  ))}
</Swiper>

  );
};

export default PhiloSlider;
