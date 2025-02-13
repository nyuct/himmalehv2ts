"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const RotateBottel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const farmToBottle = gsap.timeline({
      scrollTrigger: {
        trigger: ".rotate-bottel-animate",
        start: "top 25%",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    farmToBottle.to(".circle-bottle", { rotate: 200 });

    return () => {
      farmToBottle.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div ref={containerRef} className='rotate-bottel-animate '>
      <Image className='circle-bottle' unoptimized src={`${process.env.NEXT_PUBLIC_IMG_SRC}/farm-to-bottel.png`} width={190} height={190} alt='Farm to bottel' />
    </div>
  );
};

export default RotateBottel;

