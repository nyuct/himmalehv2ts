"use client"

import type { JSX } from 'react'
import Header from './Header'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'
import gsap from 'gsap'
import Footer from '../components/Footer'
import Layout from '../layout'
import "@/app/styles/master.scss"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): JSX.Element {
    const containerBody = useRef<HTMLBodyElement>(null)

    useEffect(() => {
        const resetGSAP = () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ScrollTrigger.refresh();
        };

        return () => {
            resetGSAP();
        };
    }, []);

    useGSAP(
        () => {
            const splitTypes = document.querySelectorAll('.reveal-type')
            if (splitTypes) {
                splitTypes.forEach((char) => {
                    const bg = (char as HTMLElement).dataset.bgColor
                    const fg = (char as HTMLElement).dataset.fgColor
                    const text = new SplitType(char as HTMLElement, { types: 'words' })
                    gsap.fromTo(
                        text.words,
                        {
                            color: bg,
                        },
                        {
                            color: fg,
                            duration: 0.3,
                            stagger: 0.04,
                            scrollTrigger: {
                                trigger: char,
                                start: 'top 80%',
                                end: 'top 10%',
                                scrub: true,
                                markers: false,
                            },
                        }
                    )
                })
            }
        },
        { scope: containerBody }
    )

    return (
        <Layout>
            <ReactLenis root options={{ duration: 2.2 }}>
                <main
                    ref={containerBody}
                >
                    <Header />
                    {children}
                    <Footer />
                </main>
            </ReactLenis>
        </Layout>
    )
}

