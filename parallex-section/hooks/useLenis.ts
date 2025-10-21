"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.3, 
      touchMultiplier: 0.5,
      infinite: false,
    });

    const handleScroll = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
