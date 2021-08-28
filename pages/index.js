import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trapdoor Studios | Home</title>
      </Head>

      <div className={styles.logocontainer}>
        <img className={styles.landingimage} src="/landing.jpg" />
        <img className={styles.logo} src="/trapdoor-circle.svg" />
        <button className={styles.button}>BOOK NOW</button>
      </div>
    </>
  );
}
