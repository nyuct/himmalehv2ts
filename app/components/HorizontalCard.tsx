"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import "lenis/dist/lenis.css";

interface CardDetailProps {
  frontImage: string;
  frontSvg: string;
  backText: string;
  backimg: string;
  isFlipped: boolean;
  onClick: () => void;
  textColor: string;
}

const CardDetail: React.FC<CardDetailProps> = ({
  frontImage,
  frontSvg,
  backText,
  backimg,
  isFlipped,
  onClick,
  textColor,
}) => (
  <div className="card-detail">
    <div
      className={`flip-box ${isFlipped ? "flipped" : ""}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={onClick}
      onKeyPress={onClick}
    >
      <div className="flip-box-front text-center">
        <img
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}${frontSvg}`}
          alt="Card Icon"
          className="flip-box-header inner"
         
        />
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}${frontImage}`}
          alt="Card Front"
          className="flip-box-header front-card"
          width={300}
          unoptimized
          height={400}
        />
      </div>
      <div className="flip-box-back">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}${backimg}`}
          alt="Card Back"
          className="front-card"
          width={300}
          unoptimized
          height={400}
        />
        <div className="inner">
          <div style={{ color: textColor }}>{backText}</div>
        </div>
      </div>
    </div>
  </div>
);

interface HorizontalCardProps {
  array: {
    frontImage: string;
    frontSvg: string;
    backText: string;
    backimg: string;
  }[];
  textColor: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ array ,textColor }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = useCallback((index: number) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className="sticky">
      <div className="scroll-image">
        {array.map((card, index) => (
          <CardDetail
            key={index}
            frontImage={card.frontImage}
            frontSvg={card.frontSvg}
            backText={card.backText}
            backimg={card.backimg}
            isFlipped={flippedIndex === index}
            onClick={() => handleCardClick(index)}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;

