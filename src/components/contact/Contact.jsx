import { RiArrowDropRightLine } from "react-icons/ri";
import useGetWidth from "../../hooks/useGetWidth";

const Contact = () => {
    const size = useGetWidth()
  return (
    <section className=" lg:pt-[190px] lg:pb-[142px] pt-[116px] pb-[62px] relative">
      <div className="default-container">
        <div>
          <h2 className="default-title text-white">Legacy no longer</h2>
          <p className="text-xl leading-[160%] text-white mb-[30px] mt-6">Talk to us to find out how we can transform your organization for the future</p>
          <div>
            <a href="#" className="text-lg btn-shadow lg:w-auto w-full font-semibold py-[14px] px-[36px] rounded-[3px] inline-flex items-center lg:justify-start justify-center leading-[23px] group cursor-pointer bg-blueAmber  duration-200 text-white">
              <span className="group-hover:-translate-x-1 duration-300">Contact Us</span> <span className="group-hover:translate-x-1 duration-300"><RiArrowDropRightLine size={24} /></span>
            </a>
          </div>
        </div>
      </div>
      <div className={`${size == 'xl' ? 'contact-triangle-xl' : size == 'lg' ? 'contact-triangle-lg' : 'contact-triangle-md'} contact-triangle absolute top-0 left-0 -z-10`}></div>
    </section>
  );
};

export default Contact;
