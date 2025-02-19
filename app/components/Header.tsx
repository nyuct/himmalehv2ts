import Image from "next/image";
import Link from "next/link";

const Header = () => {

  return (
    <header className="main-header" id="header">
      <div className="logo">
        <Link href="/">
          <Image 
            src={`${process.env.NEXT_PUBLIC_IMG_SRC}logo.svg`} 
            width={250} 
            height={20} 
            alt="Header LOGO" 
            unoptimized 
            id="headerLogo" 
          />
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link href="#" legacyBehavior>
              <span>
                Spirits{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="17px"
                  viewBox="0 -960 960 960"
                  width="17px"
                  fill="#b7dcdf"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </span>
            </Link>
            <ul className="dropdown-content">
              <li className="my-md-2">
                <Link href="/kumaonandi">Kumaon&I</Link>
              </li>
              <li className="my-md-2">
                <Link href="/bandarful">Bandarful</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/OurPromise">OUR PROMISE</Link>
          </li>
        </ul>
      </nav>
      <nav className="menu--right" role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="menuItem">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link href="#" legacyBehavior>
                <span>
                  Spirits{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#b7dcdf"
                  >
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </span>
              </Link>
              <input type="checkbox" />
              <ul className="dropdown-content">
                <li className="my-md-2">
                  <Link href="/kumaon-and-i">Kumaon&I</Link>
                </li>
                <li className="my-md-2">
                  <Link href="/bandarful">Bandarful</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/spirits">Our Promise</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

