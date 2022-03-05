import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import HamburgerMenu from "../components/HamburgerMenu";
import homeImage from "../public/landing.jpg";

export default function Home() {
  return (
    <div className="index-container">
      <Head>
        <title>Trapdoor Studios | Home</title>
      </Head>
      {/* <Navbar /> */}
      <HamburgerMenu />
      <Image className={styles.landingimage} src={homeImage} layout="fill" />
      <div className={styles.logocontainer}>
        <img className={styles.logo} src="/trapdoor-circle.svg" />
        <h1 className={styles.headline}>
          Established 2019 in Liverpool, UK, <span>Trapdoor Studio</span> is the
          perfect place for you to hear your music come to life.
        </h1>
        <Link href="/book">
          <button className={styles.button}>
            <a>BOOK NOW</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
