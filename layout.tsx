// app/layout.tsx (Server Component)
import { Barlow } from "next/font/google";
import "../styles/globals.scss";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Barlow, sans-serif" }} className={`body-body ${barlow.className}`}>
        {children}
      </body>
    </html>
  );
}
