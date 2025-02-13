"use client";

import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HomeBanner = () => {
  const HeroBannerRef = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useEffect(() => {
    return () => {
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useGSAP(
    () => {
      const grow = document.querySelector("#grow");
      if (grow && window.innerWidth >= 768) {
        const growTl = gsap.timeline({
          scrollTrigger: {
            trigger: "#grow",
            scrub: 1,
            start: "top 30%",
            end: "150% -200%",
            markers: false,
            onToggle: () => {
              grow.classList.toggle("grow-fixed");
            },
            onLeave: () => {
              (grow as HTMLElement).style.bottom = "0%";
            },
            onEnterBack: () => {
              (grow as HTMLElement).style.top = "0%";
              (grow as HTMLElement).style.bottom = "unset";
            },
          },
        });
        growTl.to("#grow, .grow-img", { scale: 1 });
      }
    },
    { scope: HeroBannerRef }
  );

  return (
    <section
      className="image section"
      data-color="default"
      ref={HeroBannerRef}
      id="distillerySection"
    >
      <div id="grow">
        <img
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}distillery-square.jpg`}
          alt="img"
          className="grow-img"
        />
      </div>
    </section>
  );
};

export default HomeBanner;

