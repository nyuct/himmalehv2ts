import { AboutHome } from "@/app/components/AboutHome";
import RootLayout from "@/app/components/RootLayout";
import HeroSection from "@/app/components/HeroSection";
import ImageReavles from "@/app/components/ImageReavles";
import LongImageSection from "@/app/components/LongImageSection";
import HomeBanner from "@/app/components/HomeBanner";
import ImagePops from "@/app/components/ImagePops";
import BubbleSpread from "@/app/components/BubbleSpread";

export default function Home() {
  return (
    <RootLayout>
      <div className="home-page-container main-container">
        <HeroSection />
        <AboutHome />
        <ImagePops />
        <LongImageSection page={"home"} text={"Your text here"} imgSrc="firefly-section.jpg" />
        <ImageReavles />
        <section className="content-section position-relative">
          <div className="text-title-xl color-dark-blue">AGE BEFORE</div>
          <div className="text-title-xl color-dark-blue">BEAUTY?</div>
          <div className="text-title-xl fw-bold color-dark-blue">WE SAY</div>
          <div className="text-title-xl fw-bold color-dark-blue">WISDOM FIRST</div>
        </section>
        <HomeBanner />
        <BubbleSpread />

      </div>
    </RootLayout>
  );
}

