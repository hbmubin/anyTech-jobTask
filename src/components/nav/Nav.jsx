import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../assets/icons/logo.png";
import logoWhite from "../../assets/icons/logo-white.png";
import lang from "../../assets/icons/lang.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
const navLinks = [
  {
    id: 1,
    title: "Solutions",
    sub: [
      {
        id: 101,
        title: "Any Caas ",
        link: "#",
      },
      {
        id: 102,
        title: "Any Baas",
        link: "#",
      },
      {
        id: 103,
        title: "Any Paas",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
];

const languages = [
  { code: "EN", label: "EN (English)" },
  { code: "TH", label: "TH (Thai)" },
  { code: "ID", label: "ID (Bahasa Indonesia)" },
  { code: "TW", label: "TW (Traditional Chinese)" },
];

const Nav = () => {
  const [openLang, setOpenLang] = useState(false);
  const langRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setOpenLang(false);
      }
    };

    window.addEventListener("click", handleClick);
  }, []);
  return (
    <header className=" bg-transparent absolute z-10 top-0 text-white w-full pt-4 pb-6 ">
      <div className="default-container">
        <div className="flex justify-between items-center">
          <h1>
            <a className="cursor-pointer" href="/">
              <img className="object-contain w-[170px]" src={logoWhite} alt="logo" />
            </a>
          </h1>
          <div className="flex items-center">
            <nav>
              <ul className="flex">
                {navLinks.map((link) => (
                  <li className={`${!link.sub && "hover:border-b-white"} cursor-pointer px-6 py-3 relative border-b border-b-transparent duration-500 group`} key={link.id}>
                    <a href={link.link} className="flex items-center">
                      <span>{link.title}</span>
                      {link?.sub && (
                        <span className="duration-100 group-hover:-rotate-180">
                          <RiArrowDropDownLine size={24} />
                        </span>
                      )}
                    </a>
                    {link.sub && (
                      <span className="absolute opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 duration-200 bg-white text-blueDeep top-full min-w-[175%] rounded shadow-2xl">
                        <ul className="flex flex-col">
                          {link.sub.map((subLink) => (
                            <li className="px-4 py-3 border-t border-t-[#F3F8FF] first:border-none text-nowrap hover:text-blueLight" key={subLink.id}>
                              <a href={subLink.link}>{subLink.title}</a>
                            </li>
                          ))}
                        </ul>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div ref={langRef} className="relative ml-6">
              <button onClick={() => setOpenLang(!openLang)} className="flex items-center pl-[14px] pr-1.5 py-[8px] rounded-3xl border border-white cursor-pointer">
                <img className="w-[15px]" src={lang} alt="lang" />
                <span className="ml-2">EN</span>
                <span className={`${openLang ? "-rotate-180" : "rotate-0"} duration-100`}>
                  <RiArrowDropDownLine size={22} />
                </span>
              </button>
              <div className={`${openLang ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} duration-200 absolute bg-white text-blueDeep rounded py-3 shadow-2xl`}>
                <ul>
                  {languages.map((lang) => (
                    <li
                      onClick={() => console.log(lang.code)}
                      key={lang.id}
                      className="text-nowrap border-t-2 border-t-neutral-200 px-3 py-1 hover:text-blueLight first:border-none cursor-pointer"
                      value={lang.code}
                    >
                      {lang.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <button className="text-lg font-semibold py-[13px] px-[22px] leading-[23px] rounded flex items-center gap-2 cursor-pointer border hover:bg-white hover:text-blueLight duration-200">
              <span>Contact Us</span> <MdOutlineKeyboardArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
