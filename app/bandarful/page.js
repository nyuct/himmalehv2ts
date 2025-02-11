import RootLayout from "@/app/components/RootLayout ";
import React from "react";
import ThreeDScene from "./ThreeDScene";
import ParallaxHero from "@/app/components/ParallaxHero";
import RotateBottel from "@/app/components/RotateBottel";
import ProductAbout from "@/app/components/ProductAbout";
import ProductFooter from "@/app/components/ProductFooter";
import LongImageSection from "@/app/components/LongImageSection";
import ProductImages from "@/app/components/ProductImages";
const page = () => {
  let aboutPara = [
    "Every bottle of Bandarful is expressive and full of life as a barrel of monkeys. And why not? After all, it is the Himalayan Langur and its adventures across barley fields, cane farms, coffee estates and fruit trees that'’'s behind this farm to bottle, cold brew, Coffee Liqueur. The drink exudes natural goodness and a flavour that is unmistakably India at heart.",
    "Bandarful from Himmaleh Spirits is as much a product of nature as it is of an unusual collaboration. Here, neutral spirits made from Himalayan water exchange flavours with handpicked Arabica Coffee Cherries and Beans from Chikmagalur'’'s finest estates. The delicious flavour is not only distinctly Indian but also blends the finest ingredients from its northern and southern reaches.",
    "Every sip is a panoply of flavours - rich, sublime, distinctive. Making every occasion collegial and disarmingly wonderful. Sorry, Bandarful!",
  ];
  const cards = [
    {
      backimg: "horizontal/back.jpg",
      frontSvg: "horizontal/origins.svg",
      frontImage: "horizontal/card-04-origins-24.webp",
      backText:
        "Our Gin comes from a 100% farm to bottle distillery, designed around the principles of minimalism. Nothing in excess and yet ensuring that what gets in our spirit has a characteristic role to play. It traces back to a distinctive terroir, Himalayan spring water, hyper local botanicals, farm bred grains, and an R&D laboratory and tasting house that present the last test. All in an estate-house environment.",
    },
    {
      backimg: "horizontal/back.jpg",
      frontSvg: "horizontal/culture.svg",
      frontImage: "horizontal/card-01.webp",
      backText:
        "The bottle's design is an inventive take on the region's local ritualistic hand-painted art form of Aipan. A white paste made by grounding cooked rice with water (Biswar) is used by local women to draw distinctive patterns on a smooth surface of wet ochre mud Geru which is red. This is complemented by another artform style which is the Kumaoni Pichora pattern. The dots and lines signify the sisterhood and community of women in Uttarakhand. Kumaon & I is a tribute to this femme power and mother nature's bounties.",
    },
    {
      backimg: "horizontal/back.jpg",
      frontSvg: "horizontal/carft.svg",
      frontImage: "horizontal/card-02-craft-25.webp",
      backText:
        "The flavorsome Gin is a blend of art and science. Experienced distillers and their meticulous detail, 1000 litre Hungarian Copper pot stills from the world's most technologically advanced still makers Hagyo, often called the Tesla of stills, ingredients that bear the stamp of Kumaon's terroir make up a fine cast. Craft meets nature at Himmaleh in a sybaritic setting.",
    },
    {
      backimg: "horizontal/back.jpg",
      frontSvg: "horizontal/INGREDIENTS.svg",
      frontImage: "horizontal/card-03-26.webp",
      backText:
        "Himalayan Juniper berries, Timur a berry-like Szechwan pepper, Black turmeric grown at 10,000 feet altitude, Galgal a local citrus, Kinu (Uttarakhand's Tangerine), Coriander seeds, Thuner (Yew native to the Himalayas), Walnuts from the family estate, Black cardamom, Kalmegh (a nutritive bark) and Rose. Each is a proud hyperlocal citizen of the region. These earthy and fresh ingredients make up our Gin - India's first premium, provincial dry Gin.",
    },
    {
      backimg: "horizontal/back.jpg",
      frontSvg: "horizontal/Flavours.svg",
      frontImage: "horizontal/card-06-flavours-27.jpg",
      backText:
        "Cool spicy peppercorns, citrus, and herbal rainforest nose, with a rich textural palate, and a medium dry long finish summarises the tasting note for this dry Gin. What does it pair with and waltz? Well, a classic G&T or a Negroni served on the rocks and garnished with an orange slice or maybe the hyperlocal Kinoo? This is a fine way to open a artful meal or probably pleasantly interrupt with.",
    },
    {
      backimg: "horizontal/back.jpg",
      frontSvg: "horizontal/Communities.svg",
      frontImage: "horizontal/front-communities.jpg",
      backText:
        "What raises a fine spirit? We say a universe of love and hands that nurture. From the artful distillers to the local plantation community, from the spirited foragers to the carefully selected partners who help source uncompromised botanicals from the region. From the passionate makers to the sisterhood in the hills that inspires the Gin with its femme power, Kumaon & I is a labour of love of a community that is diverse and nurturing.",
    },
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
