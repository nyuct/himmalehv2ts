"use client";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

interface ProductFooterProps {
  heading: string;
  para: string;
  leftImg: string;
  rightImg: string;
  logo: string;
}

const ProductFooter: React.FC<ProductFooterProps> = ({
  heading,
  para,
  leftImg,
  rightImg,
  logo,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    return () => {
      tl.current?.kill();
    };
  }, []);

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        const stickyAnimation = document.querySelector(".sticky-dots-animation-2");
        if (stickyAnimation) {
          tl.current = gsap
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
              y: 200,
            });
          tl.current = gsap
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
              y: -200,
            });
        }
      }
    },
    { scope: aboutRef }
  );

  return (
    <section ref={aboutRef}>
      <div className="position-relative sticky-dots-animation-2">
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
          <div
            className="mx-auto reveal-type mt-3"
            data-bg-color="#f4f4f4"
            data-fg-color="#283337"
          >
            <p className="text-body">{para}</p>
            <br />
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_SRC}${logo}`}
                className="img-fluid"
                alt="Kandi Logo"
                unoptimized={true}
                fill={true}
              />
            </div>
            <br />
            <div
              className="d-flex text-center mt-3 last-tagline reveal-type gap-3 flex-column mx-auto"
              data-bg-color="#f4f4f4"
              data-fg-color="#283337"
            >
              <h3 className="fw-bold mb-0 mt-1 text-subtitle">{heading}</h3>
              <p className="display-5">.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFooter;

