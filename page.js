"use client";
import { AboutHome } from "@/components/AboutHome";
import RootLayout from "../app/layout";
import HeroSection from "@/components/HeroSection";
import ImageReavles from "@/components/ImageReavles";
import LongImageSection from "@/components/LongImageSection";
import HomeBanner from "@/components/HomeBanner";
import ImagePops from "@/components/ImagePops";
import BubbleSpread from "@/components/BubbleSpread";
export default function Home() {
  return (
    <RootLayout>
      <div className="home-page-container main-container">
        <HeroSection />
        <AboutHome />
        <ImagePops />
        <LongImageSection page={"home"} imgSrc={"firefly-section.jpg"} />
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
