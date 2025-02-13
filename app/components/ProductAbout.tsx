"use client";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ProductAboutProps {
  heading: string;
  para: string[];
  leftImg: string;
  rightImg: string;
}

const ProductAbout: React.FC<ProductAboutProps> = ({
  heading,
  para,
  leftImg,
  rightImg,
}) => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useGSAP(
    () => {
      if (typeof window !== "undefined" && aboutRef.current) {
        const stickyAnimation = aboutRef.current.querySelector(
          ".sticky-dots-animation-1"
        );
        if (stickyAnimation) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: stickyAnimation,
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: false,
              },
            })
            .to(".sticky-dots-left", {
              y: 250,
            });
          gsap
            .timeline({
              scrollTrigger: {
                trigger: stickyAnimation,
                start: "top center",
                end: "bottom center",
                scrub: true,
                markers: false,
              },
            })
            .to(".sticky-dots-right", {
              y: -250,
            });
        }
      }
    },
    { scope: aboutRef }
  );

  return (
    <section ref={aboutRef}>
      <div className="position-relative  sticky-dots-animation-1">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}${leftImg}`}
          className="sticky-dots-left"
          alt="Left Dots"
          unoptimized={true}
          width={100}
          height={200}
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}${rightImg}`}
          className="sticky-dots-right"
          alt="Right Dots"
          unoptimized={true}
          width={100}
          height={200}
        />
        <div
          className="reveal-type sticky-dots-animation mx-auto text-center my-5 position-relative"
          data-bg-color="#f4f4f4"
          data-fg-color="#283337"
        >
          <div className="d-flex gap-3 flex-column">
            <p className="display-5">.</p>
            <h3 className="fw-bold mb-0 mt-1 text-subtitle">{heading}</h3>
            <p className="display-5">.</p>
          </div>
          <div
            className="mx-auto  reveal-type mt-3"
            data-bg-color="#f4f4f4"
            data-fg-color="#283337"
          >
            {para.map((item, index) => (
              <p className="text-body my-3" key={index}>
                {item}
              </p>
            ))}
            <br />
            <p className="display-5">.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAbout;

