"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 0,
    name: 'Kumaoui & I',
    frontImg: 'kumaoui-front.webp',
    backImg: 'kumaoui-back.jpg',
    reavleImg: 'kumaoui-reavle.webp',
    Link: '/products/kumaoui',
  },
  {
    id: 1,
    name: 'Bunderful',
    frontImg: 'bandarful-front.webp',
    backImg: 'bandarful-back.webp',
    reavleImg: 'bandarful-reavle.webp',
    Link: '/products/kumaoui',
  },
];

const ImageReavles = () => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="ImageReavles-containter">
      <div className="ImageReavles">
        <div className="ImageReavles-title text-subtitle">Sneak peek of our labels</div>
        <div className={`ImageReavles-reavle ${hover == 0 && 'active'}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_SRC}${products[0].reavleImg}`}
            fill
            unoptimized
            alt={products[0].name}
          />
        </div>
        <div className={`ImageReavles-reavle ${hover == 1 && 'active'}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_SRC}${products[1].reavleImg}`}
            fill
            unoptimized
            alt={products[1].name}
          />
        </div>
        <div className="ImageReavles-content">
          {products.map(product => (
            <div
              key={product.id}
              className="ImageReavles-item"
              onMouseOver={() => setHover(product.id)}
              onMouseLeave={() => setHover(null)}
            >
              <Link href={product.Link} className="ImageReavles-item__link__btn">
                <div className="ImageReavles-item__back">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_SRC}${product.backImg}`}
                    fill
                    unoptimized
                    alt={product.name}
                  />
                </div>
                <div className="ImageReavles-item__front">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_SRC}${product.frontImg}`}
                    fill
                    unoptimized
                    alt={product.name}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageReavles;

