 "use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export const AboutHome = () => {
  const containerAbout = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(
    () => {
      const bg_animation = gsap.timeline({
        scrollTrigger: {
          trigger: ".hind-kush",
          start: "0% 100%",
          end: "100% 100%",
          markers: false,
          scrub: 1,
        },
      });
      bg_animation.to(".hind-kush-img", { y: -300 });
    },
    { scope: containerAbout }
  );
  return (
    <div className="distalarySection backgroundAnimation">
      <div
        className="text-center "
        data-body-bg="#283337"
        ref={containerAbout}
      >
        <div className="position-relative hind-kush">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_SRC}hind-kush.png`}
            alt="hero image"
            unoptimized={true}
            fill={true}
            className="hind-kush-img"
          />
        </div>
      </div>
      <div className="content text-center">
        <span className="color-blue">·</span>
        <h3>
          <span
            className="reveal-type text-subtitle"
            data-bg-color="#617b80"
            data-fg-color="#b7dcdf"
          >
            THIS IS WHERE
            <br />
            OUR STORY BEGINS.
          </span>
        </h3>
        <span className="color-blue">·</span>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="full"
      >
        <source
          src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}himmalehstory.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="content">
        <span className="color-blue">·</span>
        <p
          className="reveal-type text-subtitle "
          data-bg-color="#617b80"
          data-fg-color="#b7dcdf"
        >
          In a fiercely artisanal distillery where modern day alchemists use ancient wisdom and modern science to produce craft spirits of formidable character
        </p>
        <span className="color-blue">·</span>
      </div>
    </div>
  );
};

