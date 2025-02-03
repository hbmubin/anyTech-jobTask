import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../assets/icons/logo.png";
import logoWhite from "../../assets/icons/logo-white.png";
import lang from "../../assets/icons/lang.png";
import langBlue from "../../assets/icons/lang-blue.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import MenuOpen from "../utilities/MenuOpen";
import MenuClose from "../utilities/MenuClose";
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
  { code: "EN", label: "EN (English)", label2: "English" },
  { code: "TH", label: "TH (Thai)", label2: "Thai" },
  { code: "ID", label: "ID (Bahasa Indonesia)", label2: "Bahasa Indonesia" },
  { code: "TW", label: "TW (Traditional Chinese)", label2: "Traditional Chinese" },
];

const Nav = () => {
  const [openLang, setOpenLang] = useState(false);
  const [langValue, setLangValue] = useState({ label2: "English", code: "EN" });
  const langRef = useRef();
  const langRe2 = useRef();
  const { scrollY } = useScroll();

  const [resDrop, setResDrop] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [top, setTop] = useState(true);
  const [resTop, setResTop] = useState(true);

  const [isOpen, setIsOpen] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const getResTop = () => {
      if (latest > 60) {
        setResTop(false);
      } else {
        setResTop(true);
      }
    };
    const getTop = () => {
      if (latest > 300) {
        setTop(false);
      } else {
        setTop(true);
      }
    };

    const toShow = () => {
      if (latest > previous && latest > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    getTop();
    toShow();
    getResTop();
  });
  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (langRef.current && !langRef.current.contains(e.target) || langRe2.current && !langRe2.current.contains(e.target)) {
  //       setOpenLang(false);
  //     }
  //   };

  //   window.addEventListener("click", handleClick);
  // }, []);
  return (
    <>
      <header
        className={`${!top ? "fixed bg-white   shadow-lg top-0 " : "absolute bg-transparent "} ${
          !top && hidden ? "-translate-y-full " : "translate-y-0 "
        } duration-300 lg:block hidden w-full z-50  text-white pt-4 pb-6`}
      >
        <div className="default-container">
          <div className="flex justify-between items-center">
            <h1>
              <a className="cursor-pointer" href="/">
                <img className="object-contain w-[170px] block " src={top ? logoWhite : logo} alt="logo" />
              </a>
            </h1>
            <div className={`${top ? "text-white" : "text-blueLight"} flex  items-center`}>
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
                <button
                  onClick={() => setOpenLang(!openLang)}
                  className={`${top ? "border-white" : "border-blueLight"} flex items-center pl-[14px] pr-1.5 py-[8px] rounded-3xl border  cursor-pointer`}
                >
                  {top ? <img className="w-[15px]" src={lang} alt="lang" /> : <img className="w-[15px]" src={langBlue} alt="lang" />}
                  <span className="ml-2">{langValue.code}</span>
                  <span className={`${openLang ? "-rotate-180" : "rotate-0"} duration-100`}>
                    <RiArrowDropDownLine size={22} />
                  </span>
                </button>
                <div className={`${openLang ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} duration-200 absolute bg-white text-blueDeep rounded py-3 shadow-2xl`}>
                  <ul>
                    {languages.map((lang) => (
                      <li
                        onClick={() => {
                          setLangValue({ label2: lang.label2, code: lang.code });
                          setOpenLang(false);
                        }}
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
            <div className="">
              <a
                href="#"
                className={`${
                  top ? "text-white hover:bg-white hover:text-blueLight border-white" : "border-transparent bg-blueAmber btn-shadow btn-amber "
                }  group text-lg font-semibold py-[12px] px-[21px] leading-[23px] rounded flex items-center gap-2 cursor-pointer border  duration-200`}
              >
                <span>Contact Us</span>
                <span className="group-hover:transform group-hover:translate-x-1 duration-150">
                  <MdOutlineKeyboardArrowRight size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <header className="">
        <div
          className={`${!resTop && "fixed"} ${hidden ? "-translate-y-full duration-300" : "translate-y-0 duration-300"} ${
            !resTop && top && "hidden"
          } lg:hidden block w-full z-50  text-white bg-[#1F80F0] py-8`}
        >
          <div className="default-container">
            <div className="flex justify-between items-center">
              <h1>
                <a className="cursor-pointer" href="/">
                  <img className="object-contain w-[130px]" src={logoWhite} alt="logo" />
                </a>
              </h1>
              <button onClick={() => setIsOpen(!isOpen)} className="">
                {isOpen ? <MenuOpen /> : <MenuClose />}
              </button>
            </div>
          </div>
        </div>
        <nav
          className={`w-full lg:hidden block bg-[#1B76E9] z-40 ${resTop ? "absolute " : "fixed -top-10"} ${hidden ? "-top-10" : !top && "top-[64px]"} duration-300 ${
            isOpen ? "res-menu-open" : "res-menu-close"
          } pt-8 px-8 pb-8 text-white`}
        >
          <ul className={`flex flex-col gap-9 ${resTop ? "mt-0" : "mt-8"}`}>
            {navLinks.map((link) => (
              <li className={`text-sm `} key={link.id}>
                <a href={link.link} className="flex items-center justify-between">
                  <span>{link.title}</span>
                  {link?.sub && (
                    <span onClick={() => setResDrop(!resDrop)} className={`duration-100 ${resDrop ? "-rotate-180" : "rotate-0"}`}>
                      <RiArrowDropDownLine size={24} />
                    </span>
                  )}
                </a>
                {link?.sub && resDrop && (
                  <ul className="flex flex-col pl-4 py-4">
                    {link.sub.map((subLink) => (
                      <li className="p-4 text-nowrap hover:text-blueLight" key={subLink.id}>
                        <a href={subLink.link}>{subLink.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div ref={langRe2} className="relative flex justify-center mt-8 text-sm">
            <div onClick={() => setOpenLang(!openLang)} className={`border-blue-500/70  border  rounded-3xl px-3`}>
              <button className={`${openLang && " justify-between w-full"} flex items-center py-[10px]`}>
                <div className="flex items-center">
                  <img className="size-[15px]" src={lang} alt="lang" />
                  <span className="pl-2 uppercase">{langValue.label2}</span>
                </div>
                <span className={`${openLang ? "-rotate-180" : "rotate-0"} duration-100`}>
                  <RiArrowDropDownLine size={22} />
                </span>
              </button>
              <div className={`overflow-hidden transition-[max-height] transition-width duration-300 ${openLang ? "max-h-52 open" : "max-h-0"} hover:text-blueDeep `}>
                <ul className="flex flex-col gap-2.5 pl-6">
                  {languages.map((lang) => (
                    <li
                      onClick={() => {
                        setLangValue({ label2: lang.label2, code: lang.code });
                        setOpenLang(false);
                      }}
                      key={lang.code}
                      className="text-nowrap hover:text-blueLight cursor-pointer uppercase last:pb-2"
                    >
                      {lang.label2}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-16">
              <a
                href="#"
                className={`text-white border-white  group text-base font-semibold py-3  leading-[23px] rounded flex items-center justify-center gap-2 cursor-pointer border  duration-200`}
              >
                <span>Contact Us</span>
                <span className="group-hover:transform group-hover:translate-x-1 duration-150">
                  <MdOutlineKeyboardArrowRight size={20} />
                </span>
              </a>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
