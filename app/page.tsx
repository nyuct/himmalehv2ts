"use client";
import { AboutHome } from "@/app/components/AboutHome";
import Layout from "@/app/layout";
import HeroSection from "@/app/components/HeroSection";
import ImageReavles from "@/app/components/ImageReavles";
import LongImageSection from "@/app/components/LongImageSection";
import HomeBanner from "@/app/components/HomeBanner";
import ImagePops from "@/app/components/ImagePops";
import BubbleSpread from "@/app/components/BubbleSpread";
import Head from "next/head";
import "lenis/dist/lenis.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ReactLenis } from "lenis/react";
import AgeModal from "@/app/components/AgeModal";
import { Barlow } from "next/font/google";


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Home() {
  return (
    <html lang="en" className={`QQQ ${barlow.className} `}>
      <body className="bg-white" suppressHydrationWarning={true}>
        <ReactLenis root options={{ duration: 2.2 }}>
          <main className="body">
            <AgeModal />
            <Header />
            <main>
              <div className="home-page-container main-container"  >
                <HeroSection />
                <AboutHome />
                <ImagePops />
                <LongImageSection
                  page={"home"}
                  text={" Located in Kumaon, an address whispered in fire-place legends and jungle-lores, and often referred to as the fruit bowl of Uttarakhand, the Himmaleh Spirits distillery is artisanal inside out. It produces some of the finest small-batch, flavorsome craft spirits for audiences seeking the exceptional. And unordinary it is by provenance."}
                  imgSrc="firefly-section.jpg"
                />
                <ImageReavles />
                <section className="content-section position-relative">
                  <div className="text-title-xl color-dark-blue">AGE BEFORE</div>
                  <div className="text-title-xl color-dark-blue">BEAUTY?</div>
                  <div className="text-title-xl fw-bold color-dark-blue">WE SAY</div>
                  <div className="text-title-xl fw-bold color-dark-blue">WISDOM FIRST</div>
                </section>
                <HomeBanner />
                <BubbleSpread />
                <audio id="audio" loop>
                  <source src="sound/forest-ambience.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </main>
            <Footer />
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}

