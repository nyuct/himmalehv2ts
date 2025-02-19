"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

interface LongImageSectionProps {
  page: string;
  text: string;
  imgSrc: string;
}

const LongImageSection = ({ page, text, imgSrc }: LongImageSectionProps) => {
  const containerAbout = useRef(null);
  const tl = useRef(gsap.timeline());

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        const pathsTop = document.querySelector(".separator--top .separator__path") as HTMLElement;
        const pathToTop = pathsTop?.dataset.pathTo;
        const pathsDown = document.querySelector(".separator--down .separator__path") as HTMLElement;
        const pathToDown = pathsDown?.dataset.pathTo;
        tl.current
          .to(".separator--top .separator__path", {
            ease: "none",
            attr: { d: pathToTop || "" },
            scrollTrigger: {
              trigger: ".separator--top .separator__path",
              start: `top 20%`,
              end: `bottom top`,
              scrub: true,
              markers: false,
            },
          })
          .to(".separator--down .separator__path", {
            ease: "none",
            attr: { d: pathToDown || "" },
            scrollTrigger: {
              trigger: ".separator--down",
              start: `top bottom`,
              end: `bottom 0%`,
              scrub: true,
              markers: false,
            },
          });
      }
    },
    { scope: containerAbout }
  );

  return (
    <section ref={containerAbout} className="longSection-containter" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMG_SRC}${imgSrc})`, backgroundSize: "cover" }}>
      <svg
        className="separator separator--top top"
        width="100%"
        height="100%"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          className="separator__path path-anim"
          fill="#fff"
          data-path-to="M 0 0 C 40 0 60 0 100 0 L 100 10 H 0 Z"
          vectorEffect="non-scaling-stroke"
          d="M 0 0 C 25 13 75 13 100 0 L 100 10 H 0 Z"
        />
      </svg>
      <div className="fireflies">
        {page === "home" &&
          Array.from({ length: 100 }).map((_, index) => (
            <div className="firefly" key={index}>
              <div className="highlight"></div>
            </div>
          ))}
      </div>
      <div style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div
          className="reveal-type text-title"
          data-bg-color="#4b4b4b"
          data-fg-color="#ffffff"
        >
          {text}
        </div>
      </div>

      <svg
        className="separator separator--down bottom"
        width="100%"
        height="100%"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          className="separator__path path-anim"
          fill="#fff"
          d="M 0 0 C 40 0 60 0 100 0 L 100 10 H 0 Z"
          vectorEffect="non-scaling-stroke"
          data-path-to="M 0 0 C 25 13 75 13 100 0 L 100 10 H 0 Z"
        />
      </svg>
    </section>
  );
};

export default LongImageSection;

