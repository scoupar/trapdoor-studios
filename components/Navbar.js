import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <Link href="/">
          <a className="nav-logo">
            <img className="nav-logo" src="/logo.jpg" />
          </a>
        </Link>

        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/studio">
          <a>STUDIO</a>
        </Link>
        <Link href="/gear">
          <a>GEAR</a>
        </Link>
        <Link href="/listen">
          <a>LISTEN</a>
        </Link>
        <Link href="/book">
          <a>BOOK</a>
        </Link>
      </nav>
      <hr className="nav-line"></hr>
    </>
  );
};

export default Navbar;
