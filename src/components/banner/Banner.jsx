import bannerImg from "../../assets/image/banner-image.png";
import bannerImgRes from "../../assets/image/banner-image-res.png";
import desktop1 from "../../assets/banner/WaveLinesDesktop1.svg";
import desktop2 from "../../assets/banner/WaveLinesDesktop2.svg";
import desktop3 from "../../assets/banner/WaveLinesDesktop3.svg";
import desktop4 from "../../assets/banner/WaveLinesDesktop4.svg";
import { RiArrowDropRightLine } from "react-icons/ri";
import useGetWidth from "../../hooks/useGetWidth";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Banner = () => {
  const size = useGetWidth();
  console.log(size);
  return (
    <section>
      <div className="pt-[140px] pb-[137px] overflow-hidden relative">
        <div className="default-container">
          <div className="lg:w-[70%] ">
            <header className="mb-8 text-white">
              <h1 className="default-heading">Embrace the future of finance</h1>
              <h5 className="font-semibold text-base leading-[160%] w-[80%] mt-6 font-montserrat">
                Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
              </h5>
            </header>
            <div>
              <a
                href="#"
                className="text-lg font-semibold py-[13px] px-[38px] lg:w-auto w-full rounded-[3px] inline-flex items-center lg:justify-start justify-center cursor-pointer bg-blueAmber  duration-200 group text-white btn-shadow"
              >
                <span className="group-hover:-translate-x-1 duration-300">Reach Out to Us</span> <span className="group-hover:translate-x-1 duration-300"><RiArrowDropRightLine size={24} /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute lg:block hidden right-0 top-0 -z-10 ">
          <figure className=" flex justify-end ">
            <LazyLoadImage className="xl:w-[1136px] lg:w-[1020px] xl:-top-5 xl:-right-3 lg:top-5 lg:-right-48 relative " src={bannerImg} alt="banner-img" />
            <div className="absolute xl:-top-20 lg:-top-32 -right-50 w-[600px] h-72 bg-gradient-to-b rotate-[20deg] from-[#1F80F0] via-[#1f80f082]  to-transparent"></div>
            <div className="absolute xl:-top-20 lg:-top-32 -right-50 w-[600px] h-72 bg-gradient-to-b rotate-[20deg] from-[#1F80F0] via-[#1F80F0]  to-transparent"></div>
          </figure>
        </div>
        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <div className="relative h-full w-full">
            <div className={`${size == "xl" ? "top-triangle-xl" : size == "lg" ? "top-triangle-lg" : "top-triangle-md"} top-triangle absolute top-0 xl:right-[330px] lg:right-[160px]`}></div>
            <div className="bottom-corner lg:block hidden absolute bottom-0 right-0"></div>
            {/* <figure className="absolute -top-36 -left-[600px]"><img src={desktop1} alt="shape" /></figure> */}
            {/* <figure className="absolute top-20 right-36 w-[110%]"><img src={desktop1} alt="shape" /></figure> */}
            {/* <figure className="absolute -top-[700px] right-12 w-[110%]"><img src={desktop2} alt="shape" /></figure> */}
            {/* <figure className="absolute -top-40 right-96"><img src={desktop3} alt="shape" /></figure> */}
            {/* <figure className="absolute -top-20 right-72"><img src={desktop4} alt="shape" /></figure> */}
            <div className="bottom-triangle absolute lg:block hidden -bottom-[1px] right-0 border-b border-b-white"></div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block overflow-hidden relative right-0 res-banner-img -top-[102px]  -mb-[102px]">
        <figure className="">
          <LazyLoadImage className=" " src={bannerImgRes} alt="banner-img" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
