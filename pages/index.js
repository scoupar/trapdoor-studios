import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trapdoor Studios</title>
      </Head>
      <Navbar />
      <h1>TRAPDOOR STUDIOS</h1>
      <Footer />
    </div>
  );
}
