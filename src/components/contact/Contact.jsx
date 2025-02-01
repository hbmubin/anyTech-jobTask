import { RiArrowDropRightLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section className=" pt-[190px] pb-[142px] relative">
      <div className="default-container">
        <div>
          <h2 className="default-title text-white">Legacy no longer</h2>
          <p className="text-xl leading-[160%] text-white mb-[30px] mt-6">Talk to us to find out how we can transform your organization for the future</p>
          <div>
            <button className="text-lg font-semibold py-[14px] px-[36px] rounded-[3px] flex items-center leading-[23px] cursor-pointer bg-blueAmber  duration-200 text-white">
              <span>Contact Us</span> <RiArrowDropRightLine size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="contact-triangle absolute top-0 left-0 -z-10"></div>
    </section>
  );
};

export default Contact;
