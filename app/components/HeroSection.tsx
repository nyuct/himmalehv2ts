"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isWindowWidth, setisWindowWidth] = useState<boolean>(false);
  console.log(isWindowWidth )
  useEffect(() => {
    const handleResize = () => {
      setisWindowWidth(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(document.querySelectorAll(".header-title-h1"), {
      y: 200,
      duration: 2,
      ease: "power4",
      stagger: 0.1,
    });
    isWindowWidth && gsap.from(document.querySelector(".header-image img"), {
      y: -300,
      duration: 2,
    });

     const maountain_animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".header-image-animation",
        start: "50% 75%",
        end: "50% 0%",
        markers: false,
        scrub: 1,
      },
    });
    isWindowWidth && maountain_animation.to(".header-title", {
      top: "-10%",
    });
    const bottel_animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".waterAudio",
        start: "0% 46%",
        end: "150% 50%",
        markers: false,
        scrub: 1,
        onToggle: () => {

          const waterAudioElement = document.querySelector(".waterAudio");
          if (waterAudioElement && isWindowWidth ) {
            waterAudioElement.classList.toggle("fixed-bottel");
          }
        },
      },
    });
    isWindowWidth && bottel_animation.to(".header-image", {
      opacity: "0",
    });
    isWindowWidth && bottel_animation.to(
      ".waterAudio",
      {
        opacity: "0",
      },
      "+=2.5"
    );

    return () => {
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <div
      className="text-center"
      ref={containerRef}
    >
      <section className="position-relative">
        <div className="header-title ">
          <div className="text-title-xl header-title-h1 color-blue fw-bold">100%</div>
          <div className="text-title-xl header-title-h1 color-blue fw-bold">HIMALAYAN</div>
        </div>
        <div className="header-image-animation">
          <div className="header-image">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_SRC}header_mountain.png`}
              alt="header"
              fill={true}
              unoptimized={true} // <-- unoptimized is required
            />
          </div>
        </div>
      </section>
      <section className="bottel-animation">
        <div
          id="waterBottle"
          className="waterAudio"
          data-audio-file="water_streak.mp3"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            id="waterVideo"
            src={`${process.env.NEXT_PUBLIC_VIDEO_SRC}water.mp4`}
            className="clip-add"
          />
        </div>
      </section>
      <section className="header-about-outer">
        <div
          className="header-about text-title reveal-type"
          data-bg-color="#f4f4f4"
          data-fg-color="#283337"
        >
          The region that encompasses the subcontinent Himalayan Mountain range is widely known as the <b>Third Pole</b> because its ice ﬁelds contain the largest reserve of freshwater outside the
          polar regions. It is home to 10 major river basins.
        </div>
      </section>
    </div>
  );
}

