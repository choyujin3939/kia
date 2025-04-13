import { useEffect } from "react";
import { breakpoints } from "@/shared/styles/theme";

const MOBILE_WIDTH = breakpoints.mobile;

export const useRemoveBodyClass = (className: string, maxWidth = MOBILE_WIDTH) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > maxWidth && document.body.classList.contains(className)) {
        document.body.classList.remove(className);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [className, maxWidth]);
};