import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="index-container">
      <Head>
        <title>Trapdoor Studios | Home</title>
      </Head>
      <Navbar />
      <div className={styles.logocontainer}>
        <img className={styles.landingimage} src="/landing.jpg" />
        <img className={styles.logo} src="/trapdoor-circle.svg" />
        <Link href="/book">
          <button className={styles.button}>
            <a>BOOK NOW</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
