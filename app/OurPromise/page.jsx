"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RootLayout from "@/app/components/RootLayout";
import RotateBottel from "@/app/components/RotateBottel";
import ProductImages from "@/app/components/ProductImages";

gsap.registerPlugin(ScrollTrigger);

const productData = [
  { name: "Agave", src: "agave.jpg" },
  { name: "Barley", src: "barley.jpg" },
  { name: "Black Turmeric", src: "black-turmeric.jpg" },
  { name: "Juniper", src: "juniper.jpg" },
  { name: "Mango", src: "mango.jpg" },
  { name: "Kinnu", src: "orange.jpg" },
  { name: "Plum", src: "plum.jpg" },
  { name: "Sugarcane", src: "sugarcane.jpg" },
  { name: "Turmeric", src: "turmeric.jpg" },
];

const Page = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    if (parallaxRef.current) {
      const elements = parallaxRef.current.querySelectorAll(".div-parallex img");
      elements.forEach(el => {
        gsap.fromTo(
          el,
          { y: window.innerWidth > 768 ? "-20%" : "-10%" },
          {
            y: window.innerWidth > 768 ? "20%" : "10%",
            ease: "power1.inOut",
            duration: 0.3,
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "end -100%",
              scrub: true,
              markers: 0,
            },
          }
        );
      });
    }
  }, []);

  return (
    <RootLayout>
      <div
        className="labels-outer-sec"
        data-scroll-section
      >
        <section
          className="section top"
          id="mainSection"
        >
          <div className="text-title-xl header-title-h1 color-blue fw-bold">FARM TO BOTTLE</div>
          <div className="text-title-xl header-title-h1 color-blue fw-bold">IS OUR PROMISE</div>
          <RotateBottel />
        </section>

        <section
          className="d-flex section--2 padding-lr section-margin"
          style={{ margin: "100px auto" }}
        >
          <div
            className="reveal-type text-title"
            data-bg-color="#f4f4f4"
            data-fg-color="#283337"
          >
            Our produce blends molecular science, hand-crafted distilling, and Himalayan mystique. A bit like alchemy.
          </div>
        </section>

        <section
          className="parallex-effect section-margin"
          ref={parallaxRef}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_IMG_SRC}product/label-section.png`}
            alt="Background"
            className="dummy-img"
          />

          {productData.map(
            (item, index) =>
              index <= 2 && (
                <div
                  key={index}
                  className={`div-parallex div-parallex-${index + 1}`}
                >
                  <span>{item.name}</span>
                  <img
                    className="reveal-image"
                    src={`${process.env.NEXT_PUBLIC_IMG_SRC}product/${item.src}`}
                    alt={item.name}
                  />
                </div>
              )
          )}

          <div
            className="reveal-type copy"
            data-bg-color="#c1c1c1"
            data-fg-color="#283337"
          >
            The freely breathing soil of Kumaon is conducive for produce of the highest order. Be it six row barley, hyperlocal sugarcane, fresh Juniper, turmeric, native mangoes, peach, guava, jamun,
            litchi or wild fruits like Kilmora, Kafal and Bedu.
          </div>
          {productData.map(
            (item, index) =>
              index >= 3 &&
              index <= 4 && (
                <div
                  key={index}
                  className={`div-parallex div-parallex-${index + 1}`}
                >
                  <span>{item.name}</span>
                  <img
                    className="reveal-image"
                    src={`${process.env.NEXT_PUBLIC_IMG_SRC}product/${item.src}`}
                    alt={item.name}
                  />
                </div>
              )
          )}
          <section className="title-copy">
            <div className="text-title-xl mob-dis">
              <span>THEY GIVE US</span>
            </div>
            <div className="text-title-xl fw-bold mob-dis">
              <span>OUR FLAVOURS</span>
            </div>
          </section>
          {productData.map(
            (item, index) =>
              index >= 5 && (
                <div
                  key={index}
                  className={`div-parallex div-parallex-${index + 1}`}
                >
                  <span>{item.name}</span>
                  <img
                    className="reveal-image"
                    src={`${process.env.NEXT_PUBLIC_IMG_SRC}product/${item.src}`}
                    alt={item.name}
                  />
                </div>
              )
          )}
        </section>

        <section className="d-flex padding-lr section-margin section--3">
          <div
            className="reveal-type text-title w-50 section--4"
            data-bg-color="#f4f4f4"
            data-fg-color="#283337"
          >
            Every label, every bottle is a force of nature. Nature at its unspoilt best favoured with Himalayan goodness.
          </div>
          <div className="text-center w-50">
            <RotateBottel />
          </div>
        </section>

        <ProductImages />
      </div>
    </RootLayout>
  );
};

export default Page;
