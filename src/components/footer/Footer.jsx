import logo from "../../assets/icons/logo-text.png";
const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002045] py-11 text-white">
        <div className="default-container flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="AnyTech" className="object-contain w-[218px]" />
          </a>
          <div className="hidden lg:flex items-center text-[#00E9EA]">
            <p className="border-r border-[#164377] px-6 py-4 leading-[160%] text-base font-semibold">Our Solutions</p>
            <ul className="flex">
              {["AnyCaaS", "AnyBaaS", "AnyPaaS"].map((solution) => (
                <li key={solution}>
                  <a href="#" className="transition-colors duration-300 hover:text-blueLight py-4 pl-6 font-normal text-base leading-[160%]">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-[#164377]"></div>
      <div className="bg-[#00152D]">
        <div className="default-container flex items-center justify-between py-6 font-semibold text-blueLight text-xs leading-[160%]">
          <p className="">
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <a className="" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
