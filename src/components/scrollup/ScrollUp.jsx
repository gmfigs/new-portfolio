import React, { useEffect, useRef } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const scrollUpRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        scrollUpRef.current.classList.add("show-scroll");
      } else {
        scrollUpRef.current.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="scrollup" ref={scrollUpRef} onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;

