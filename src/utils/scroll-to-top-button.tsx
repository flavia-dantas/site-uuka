"use client";

import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");

    if (!main || !footer) return;

    const handleScroll = () => {
      setIsVisible(main.scrollTop > 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { root: main, threshold: 0.1 }
    );

    observer.observe(footer);
    main.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!isVisible || footerVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden md:flex fixed bottom-6 right-6 bg-black border-[3px] border-[#F59F23] p-3 rounded-full shadow z-50 hover:bg-[#1a1a1a] transition cursor-pointer"
      aria-label="Voltar ao topo"
    >
      <ArrowBigUp size={24} color="#F59F23" />
    </button>
  );
}
