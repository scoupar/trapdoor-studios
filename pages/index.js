import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trapdoor Studios</title>
      </Head>
      <img className={styles.landingimage} src="/landing-image.jpg" />
      <img className={styles.logo} src="/logo.jpg" />
    </div>
  );
}
