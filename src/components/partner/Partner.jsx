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
import { useRef, useState } from "react";

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

const Partner = () => {
    const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  return (
    <section>
      <div className="default-container">
        <h6 className="default-subTitle text-blueLight text-center">TRUSTED BY THE BEST</h6>
        <div className="items-center justify-between flex mx-28 mt-8">
          <div className="flex items-center border-dashed flex-col">
            <h2 className="text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[#065EC4] to-[#0057BB] text-transparent bg-clip-text">
              &gt;<span>20</span>
            </h2>
            <p className="text-right text-[#151D2F] lg:text-center text-lg mt-[19px]">Years of Experience</p>
          </div>
          <div className="flex items-center border-dashed flex-col">
            <h2 className="text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[#065EC4] to-[#0057BB] text-transparent bg-clip-text">
              <span>40</span>+
            </h2>
            <p className="text-right text-[#151D2F] lg:text-center text-lg mt-[19px]">Financial Institutions</p>
          </div>
          <div className="flex items-center border-dashed flex-col">
            <h2 className="text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-[#065EC4] to-[#0057BB] text-transparent bg-clip-text">
              &gt;<span>200</span>m
            </h2>
            <p className="text-right text-[#151D2F] lg:text-center text-lg mt-[19px]">Customers Each</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-x-16 gap-y-[34px] mt-32 relative">
      {partners.map((p) => (
        <figure
          key={p.id}
          className="grid place-items-center relative"
          onMouseMove={(e) => {
            positionRef.current = { x: e.clientX, y: e.clientY }; 
          }}
          onMouseEnter={(e) => {
            timeoutRef.current = setTimeout(() => {
              setTooltip({
                show: true,
                text: p.title,
                x: positionRef.current.x, 
                y: positionRef.current.y, 
              });
            }, 1000); 
          }}
          onMouseLeave={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setTooltip({ show: false, text: "", x: 0, y: 0 });
          }}
        >
          <img src={p.img} alt={p.title} />
        </figure>
      ))}

      {tooltip.show && (
        <div
          className="fixed bg-black text-neutral-100 text-xs font-light px-2 py-1 pointer-events-none transition-opacity duration-200 border border-neutral-500"
          style={{
            top: tooltip.y + 15, 
            left: tooltip.x + 10, 
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
      </div>
    </section>
  );
};

export default Partner;
