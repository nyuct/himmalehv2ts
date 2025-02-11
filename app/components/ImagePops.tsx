"use client";
import React, { useEffect, useRef } from "react";
import ImageTrail from "./utils";

const ImagePops = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const trail = new ImageTrail({ content: contentRef.current });

    return () => {
      trail.destroy();
    };
  }, []);

  return (
    <div className="imagepops-outer" ref={contentRef}>
      {Array.from({ length: 12 }, (_, i) => (
        <img
          key={i}
          className="content__img"
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}/popsImg/int_${i + 1}-min.jpg`}
          alt={`Image ${i + 1}`}
        />
      ))}
      <div className="content__title text-title-xl header-title-h1 color-dark-blue">UNORDINARY</div>
      <div className="content__title text-title-xl header-title-h1 color-dark-blue">PROVENANCE</div>
      <div className="content__title text-title-xl header-title-h1 fw-bold color-dark-blue">EXTRAORDINARY</div>
      <div className="content__title text-title-xl header-title-h1 fw-bold color-dark-blue">FLAVOURS</div>
    </div>
  );
};

export default ImagePops;
