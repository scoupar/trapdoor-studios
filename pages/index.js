import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trapdoor Studios</title>
      </Head>
      <h1>Trapdoor Studios</h1>
    </div>
  );
}
