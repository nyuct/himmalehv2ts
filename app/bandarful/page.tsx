import RootLayout from "@/app/components/RootLayout";
import React from "react";
import ThreeDScene from "./ThreeDScene";
import ParallaxHero from "@/app/components/ParallaxHero";
import RotateBottel from "@/app/components/RotateBottel";
import ProductAbout from "@/app/components/ProductAbout";
import ProductFooter from "@/app/components/ProductFooter";
import LongImageSection from "@/app/components/LongImageSection";
import ProductImages from "@/app/components/ProductImages";

const page = () => {
  const aboutPara = [
    "Every bottle of Bandarful is expressive and full of life as a barrel of monkeys. And why not? After all, it is the Himalayan Langur and its adventures across barley fields, cane farms, coffee estates and fruit trees that'’'s behind this farm to bottle, cold brew, Coffee Liqueur. The drink exudes natural goodness and a flavour that is unmistakably India at heart.",
    "Bandarful from Himmaleh Spirits is as much a product of nature as it is of an unusual collaboration. Here, neutral spirits made from Himalayan water exchange flavours with handpicked Arabica Coffee Cherries and Beans from Chikmagalur'’'s finest estates. The delicious flavour is not only distinctly Indian but also blends the finest ingredients from its northern and southern reaches.",
    "Every sip is a panoply of flavours - rich, sublime, distinctive. Making every occasion collegial and disarmingly wonderful. Sorry, Bandarful!",
  ];

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
        />
        <ThreeDScene />
        <section className="d-flex padding-lr section-margin section--3">
          <div>
            <h2
              data-bg-color="#f4f4f4"
              data-fg-color="#283337"
              className="heading-style-2 section--4 reveal-type"
            >
              <p className="reveal-type text-body fw-normal">
                Bandarful is a provincial expression. It is an artisanal micro-liqueur that through its all-natural character, best captures the diversity of terroir and produce across the length of
                India. This Cold Brew Coffee Liqueur is made in the charming estate-distillery of Himmaleh in Kumaon.
              </p>
              <p className="reveal-type text-body fw-normal">
                The neutral spirits made from Himalayan water are blended with handpicked Coffee Cherries and Beans from the Arabica estates of Chikmagalur. Its flavours are expressive and vivid and
                are the result of a crafted collaboration - craftsmen and nature.
              </p>
              <p className="reveal-type text-body fw-normal">
                As a dessert-drink, a cocktail companion or simply straight and neat, Bandarful remains adventurous and endearing. Easy to spot in a flint clear glass bottle and a convenient bar-top
                neck finish.
              </p>
            </h2>
          </div>
          <div className="rotation-div d-none"></div>
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

