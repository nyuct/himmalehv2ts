"use client";

import { Barlow } from "next/font/google";
import React, { useEffect, useRef , useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { ReactLenis } from "lenis/react";
import "@/app/styles/master.scss";
import "lenis/dist/lenis.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const AgeModal = dynamic(() => import("@/app/components/AgeModal"), { ssr: false });


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll<HTMLElement>(".reveal-type").forEach((char) => {
      const bg = char.dataset.bgColor || "black";
      const fg = char.dataset.fgColor || "white";
      const text = new SplitType(char, { types: "words" });

      gsap.fromTo(
        text.words,
        { color: bg },
        {
          color: fg,
          duration: 0.3,
          stagger: 0.04,
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
            markers: false,
          },
        }
      );
    });
    const rotateBottles = gsap.utils.toArray<HTMLElement>(".rotate-bottel-animate");

    rotateBottles.forEach((el) => {
      gsap.to(el, {
        rotate: 360,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "bottom 0%",
          scrub: 1,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, [isClient]);

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <html lang="en" className={`QQQ ${barlow.className } `}>
      <body className="bg-white" suppressHydrationWarning={true}>
        <ReactLenis root options={{ duration: 2.2 }}>
          <main className="body">
            <AgeModal />
            <Header />
            {isClient  && children}
            <Footer />
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}

