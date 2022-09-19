import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavBar);
      return () => {
        window.removeEventListener("scroll", controlNavBar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav className={`active ${show && "hidden"}`}>
        <Link href="/">
          <a className="nav-logo">
            <Image
              className="nav-logo"
              src="/logo.jpg"
              width="35"
              height="25"
            />
          </a>
        </Link>
        {/* <Link href="/">
          <a>HOME</a>
        </Link> */}
        <Link href="#about">
          <a>ABOUT</a>
        </Link>
        <Link href="#studio">
          <a>STUDIO</a>
        </Link>
        <Link href="#gear">
          <a>GEAR</a>
        </Link>
        {/* <Link href="/listen">
          <a>LISTEN</a>
        </Link> */}
        <Link href="#contact">
          <a>CONTACT</a>
        </Link>
      </nav>
      {/* <hr className="nav-line"></hr> */}
    </>
  );
};

export default Navbar;
