"use client";
import RootLayout from "@/app/layout";
import React from "react";
import ThreeDScene from "./ThreeDScene";
import ParallaxHero from "@/app/components/ParallaxHero";
import RotateBottel from "@/app/components/RotateBottel";
import ProductAbout from "@/app/components/ProductAbout";
import ProductFooter from "@/app/components/ProductFooter";
import LongImageSection from "@/app/components/LongImageSection";
import ProductImages from "@/app/components/ProductImages";
import HorizontalCard from "@/app/components/HorizontalCard";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const page = () => {
  const aboutPara = [
    "Every bottle of Bandarful is expressive and full of life as a barrel of monkeys. And why not? After all, it is the Himalayan Langur and its adventures across barley fields, cane farms, coffee estates and fruit trees that'’'s behind this farm to bottle, cold brew, Coffee Liqueur. The drink exudes natural goodness and a flavour that is unmistakably India at heart.",
    "Bandarful from Himmaleh Spirits is as much a product of nature as it is of an unusual collaboration. Here, neutral spirits made from Himalayan water exchange flavours with handpicked Arabica Coffee Cherries and Beans from Chikmagalur'’'s finest estates. The delicious flavour is not only distinctly Indian but also blends the finest ingredients from its northern and southern reaches.",
    "Every sip is a panoply of flavours - rich, sublime, distinctive. Making every occasion collegial and disarmingly wonderful. Sorry, Bandarful!",
  ];
  const cards = [
    {
      backimg: "horizontal/bandarful/backside.webp",
      frontSvg: "horizontal/bandarful/origins.svg",
      frontImage: "horizontal/bandarful/01-origin.webp",
      backText:
        "Bandarful’s well-guarded recipe can be traced back to its Himalayan origins – tree-topped terrain, farm-bred cane sugar, and their delicious collaboration with monkey-picked, arabica estate Coffee from the southern district of Chikmagalur (the birthplace of Indian Coffee). Crafted by artful makers in a pristine estate-distillery in Uttarakhand.",
    },
    {
      backimg: "horizontal/bandarful/backside.webp",
      frontSvg: "horizontal/bandarful/culture.svg",
      frontImage: "horizontal/bandarful/02-culture.webp",
      backText:
        "The world of Bandarful is like an eventful and yet collegial sanctuary - happy, unspoilt and full of life. And at times inventive. Very much like the Himalayan Langur (and its gang of accomplices), that’s our muse and that is a central accomplice to making of this versatile liqueur. Life’s full of adventure, always fun and yet never out of line. “Why so serious”? Is what he asks as he lords over his treetop kingdom in Kumaon and trades bounties with colleagues. This is a flavour of life that our all-natural Cold Brew Coffee Liqueur captures so evocatively.",
    },
    {
      backimg: "horizontal/bandarful/backside.webp",
      frontSvg: "horizontal/bandarful/carft.svg",
      frontImage: "horizontal/bandarful/03-craft.webp",
      backText:
        "It has the same spell on its drinkers as the magical Kumaon, on our Himalayan Langur, and his forest companions. Hyperlocal and made with unflinchingly natural ingredients, it is rich & vivid in its flavours and remains remarkably versatile. As a dessert-drink, a cocktail companion or simply straight and neat, Bandarful remains adventurous and endearing. Easy to spot in a flint clear glass bottle and a convenient bar-top neck finish.",
    },
    {
      backimg: "horizontal/bandarful/backside.webp",
      frontSvg: "horizontal/bandarful/INGREDIENTS.svg",
      frontImage: "horizontal/bandarful/04-ingredients.webp",
      backText:
        "Himalayan Spring water, monkey-picked Arabica Coffee Cherries and Beans from estates in Chikmagalur, India’s Coffee capital and the craft of artful distillers at a 100% farm to bottle distillery. The range of Bandarful’s Coffee Liqueurs will include special edition variants with high quality single estate coffees sourced from some of the most revered coffee districts in India including the Arakku valley, Coorg and Chikmagalur.",
    },
    {
      backimg: "horizontal/bandarful/backside.webp",
      frontSvg: "horizontal/bandarful/Flavours.svg",
      frontImage: "horizontal/bandarful/05-flavours.webp",
      backText:
        "The flavours remain rich and textured when the Chikmagalur Arabica coffee riffs with the natural, farm bred hyperlocal barley and Himalayan spring water. Vivid remarkably versatile, this all-natural cold brew Coffee Liqueur is great as a dessert-drink, a cocktail companion or simply straight and neat. It stays in character - adventurous and endearing.",
    },
    {
      backimg: "horizontal/bandarful/backside.webp",
      frontSvg: "horizontal/bandarful/Communities.svg",
      frontImage: "horizontal/bandarful/06-communities.webp",
      backText:
        "What adds an unmistakable and unusual flavour to our unique cold brew Coffee Liqueur? Well, it’s a barrel, but not the usual one. It’s a barrel of monkeys and their long-tailed exploits across barley fields and cane farms, fulsome estates and fruit orchards that inspires versatile Liqueur. Kumaon’s grower communities, the coffee estate keepers of Chikmagalur, Himalayan spring water, tropical berries, and masterful distillers who make capital of it all, sum up the wonderful world of Bandarful.",
    },
  ];
  const HeroBannerRef = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useEffect(() => {
    return () => {
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useGSAP(
    () => {
      const grow = document.querySelector(".canvas-container");
      if (grow) {
        const growTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".canvas-container",
            start: "top 00%",
            end: "100% 100%",
            scrub: 1,
            pin: ".horizontal-scroll",
            markers: false,
          },
        });
        growTl.to(".horizontal-scroll", { transform: "translateX(-200%)", ease: "none" });
        growTl.to(".horizontal-scroll", { transform: "translateX(-200%)", ease: "none" });
      }
    },
    { scope: HeroBannerRef }
  );
  return (
    <RootLayout>
      <div className="product-page">
        <ParallaxHero
          imgSrc={"../../img/bandarful-reavle.webp"}
          text="Bandarful"
        />
        <RotateBottel />
        <ProductAbout
          heading={"COLD BREW COFFEE LIQUEUR"}
          para={aboutPara}
          leftImg={"grass-left.png"}
          rightImg={"grass-right.png"}
          height={200}
          width={200}
        />
        <section className="horizontalSection" ref={HeroBannerRef}>
          <div className="canvas-container">
            <ThreeDScene />
            <div className="horizontal-scroll">
              <HorizontalCard array={cards} textColor="#e6e7e8" />
            </div>
          </div>
          <section className="d-flex padding-lr section-margin section--3">
            <div>
              <h2
                data-bg-color="#f4f4f4"
                data-fg-color="#283337"
                className="heading-style-2 section--4 reveal-type"
              >
                <div className="reveal-type text-body fw-normal">
                  Bandarful is a provincial expression. It is an artisanal micro-liqueur that through its all-natural character, best captures the diversity of terroir and produce across the length of
                  India. This Cold Brew Coffee Liqueur is made in the charming estate-distillery of Himmaleh in Kumaon.
                </div>
                <div className="reveal-type text-body fw-normal">
                  The neutral spirits made from Himalayan water are blended with handpicked Coffee Cherries and Beans from the Arabica estates of Chikmagalur. Its flavours are expressive and vivid and
                  are the result of a crafted collaboration - craftsmen and nature.
                </div>
                <div className="reveal-type text-body fw-normal">
                  As a dessert-drink, a cocktail companion or simply straight and neat, Bandarful remains adventurous and endearing. Easy to spot in a flint clear glass bottle and a convenient bar-top
                  neck finish.
                </div>
              </h2>
            </div>
            <div className="rotation-div d-none"></div>
          </section>
        </section>
        <LongImageSection
          text={
            "This is a tale of the farms and the forest and everything wonderful and Himalayan in between, including a barrel of frolicsome monkeys. The chief of staff is our long-tailed, chatterbox Langur of Kumaon, one of its most jovial children. Liberty is something he is allowed to take, for life in Kumaon without him and his friends would be a tad boring and dull. Often in rapturous company of their cousins from farther lands who come bearing gifts like the robust and sweet, arabica coffee cherries. They make for excellent trade with the Kumaon sugarcane."
          }
          page={"bandarful"}
          imgSrc={"bandarful-long-img.webp"}
        />
        <ProductFooter
          heading={"BANDARFUL IS AS MUCH A RICHLY FLAVOURED LIQUEUR AS IT IS A TRIBUTE TO ITS DISTRICTS OF ORIGIN AND THEIR COLLEGIAL CITIZENS."}
          para={
            "Our friend innocently believes that this Coffee Liqueur is thanks to him and his friends. So much so that it hangs onto the bottle that comes from this land and all that is Bandarful. Oops make that wonderful!"
          }
          leftImg={"grass-left.png"}
          rightImg={"grass-right.png"}
          logo={"Bandarful-logo-brand.png"}
        />
        <ProductImages />
      </div>
    </RootLayout>
  );
};

export default page;

