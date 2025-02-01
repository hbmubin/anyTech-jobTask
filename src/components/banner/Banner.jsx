import bannerImg from "../../assets/image/banner-image.png";
import desktop1 from "../../assets/banner/WaveLinesDesktop1.svg"
import desktop2 from "../../assets/banner/WaveLinesDesktop2.svg"
import desktop3 from "../../assets/banner/WaveLinesDesktop3.svg"
import desktop4 from "../../assets/banner/WaveLinesDesktop4.svg"
import { RiArrowDropRightLine } from "react-icons/ri";


const Banner = () => {
  return (
    <section className="pt-[140px] pb-[140px] overflow-hidden relative">
      <div className="default-container">
        <div className="w-[65%]">
          <header className="mb-8 text-white">
            <h1 className="default-heading">Embrace the future of finance</h1>
            <h5 className="font-semibold text-base leading-[160%] w-[80%] mt-6 font-montserrat">Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</h5>
          </header>
          <div>
            <button className="text-lg font-semibold py-[13px] px-[38px] rounded-[3px] flex items-center cursor-pointer bg-blueAmber  duration-200 text-white">
              <span>Reach Out to Us</span> <RiArrowDropRightLine size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-10">
        <figure className=" flex justify-end relative">
        <img className="w-9/12" src={bannerImg} alt="banner-img" />
        <div className="absolute -top-20 -right-50 w-[600px] h-72 bg-gradient-to-b rotate-[20deg] from-[#1F80F0] via-[#1F80F0]  to-transparent"></div>
        <div className="absolute -top-20 -right-50 w-[600px] h-72 bg-gradient-to-b rotate-[20deg] from-[#1F80F0] via-[#1F80F0]  to-transparent"></div>
        </figure>
      </div>
      <div className="absolute h-full w-full top-0 left-0 -z-10">
        <div className="relative h-full w-full">
          <div className="top-triangle absolute top-0 left-0"></div>
          <div className="bottom-corner absolute bottom-0 right-0"></div>
          <figure className="absolute -top-36 -left-[600px]"><img src={desktop1} alt="shape" /></figure>
          <figure className="absolute top-20 right-36 w-[110%]"><img src={desktop1} alt="shape" /></figure>
          <figure className="absolute -top-[700px] right-12 w-[110%]"><img src={desktop2} alt="shape" /></figure>
          {/* <figure className="absolute -top-40 right-96"><img src={desktop3} alt="shape" /></figure> */}
          {/* <figure className="absolute -top-20 right-72"><img src={desktop4} alt="shape" /></figure> */}
          <div className="bottom-triangle absolute -bottom-[1px] right-0 border-b border-b-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
