import { useCallback, useEffect, useState } from "react";

export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    vh: 0,
  });

  const updateViewport = useCallback(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const vh = Number((height * 0.01).toFixed(2));

    document.documentElement.style.setProperty("--vh", `${vh}px`);

    setViewport({
      width,
      height,
      vh,
    });
  }, []);

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, [updateViewport]);

  return viewport;
};
