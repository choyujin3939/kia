import { useEffect } from "react";

export const useScrollBodyClass = (className: string = "isScroll", scrollY = 1) => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > scrollY) {
            document.body.classList.add(className);
          } else {
            document.body.classList.remove(className);
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 상태 반영

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className, scrollY]);
};
