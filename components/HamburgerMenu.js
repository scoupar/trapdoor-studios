import Link from "next/link";

const HamburgerMenu = () => {
  return (
    <>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div className="line"></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <Link href="/">
                    <a>HOME</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>ABOUT</a>
                  </Link>
                </li>
                <li>
                  <Link href="/studio">
                    <a>STUDIO</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gear">
                    <a>GEAR</a>
                  </Link>
                </li>
                <li>
                  <Link href="/listen">
                    <a>LISTEN</a>
                  </Link>
                </li>
                <li>
                  <Link href="/book">
                    <a>BOOK</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
