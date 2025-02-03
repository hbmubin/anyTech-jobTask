import { useState, useEffect } from "react";

const getSize = (width) => {
  if (width < 576) return "xs";
  if (width >= 576 && width < 768) return "sm";
  if (width >= 768 && width < 1024) return "md";
  if (width >= 1024 && width < 1280) return "lg";
  return "xl";
};

const useGetWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [size, setSize] = useState(getSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setSize(getSize(newWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useGetWidth;
