"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="header">
      <div className="header__logo">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_SRC}logo.svg`}
          width={250}
          height={20}
          alt="Header LOGO"
          unoptimized
        />
      </div>
      <div className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <Link href="/">HOME</Link>
          </li>
          <li className="header__menu-item header__menu-item--dropdown">
            <p className="header__menu-link">
              SPIRITS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17px"
                viewBox="0 -960 960 960"
                width="17px"
                fill="#b7dcdf"
              >
                <path d="M480-360 280-560h400L480-360Z"></path>
              </svg>
            </p>
            <ul className="header__dropdown">
              <li className="header__dropdown-item" onClick={() => router.push("/kumaonandi")}>
                KUMAOU & I
              </li>
              <li className="header__dropdown-item" onClick={() => router.push("/bandarful")}>
                BANDARFULL
              </li>
            </ul>
          </li>
          <li className="header__menu-item">
            <Link href="/OurPromise">OUR PROMISE</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
