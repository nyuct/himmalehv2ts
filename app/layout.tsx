"use client"
import { Barlow } from 'next/font/google'
import "@/app/globals.css";
import Head from "next/head";

const barlow = Barlow({
  subsets: ['latin'], // Specify subsets as needed
  weight: ['400', '800'], // Specify font weights
})

const metadata = {
  title: "Your Site Title",
  description: "Your site description"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body className={barlow.className}>
        {children}
      </body>
    </html>
  );
}

