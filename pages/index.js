import Head from "next/head";
import styles from "../styles/Home.module.css";
import Email from "../components/email";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fantom Flower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <img src="fantom.jpg" height={200} width={200} />
        </div>
        <h1 className={styles.title}>The Fantom Flower</h1>
        <div className={styles.textContainer}>
          <p className={styles.description}>
            The Flagship location in the Historic Larrabee Recording Building at
            8811 Santa Monica Blvd.
            <p className={styles.description}>
              We are so excited to meet the community we are hosting a Town Hall
              on Monday May 10th at 5pm to speak about the concept, answer any
              questions and concerns, and share out excitement about being part
              of West Hollywood.
            </p>
            <p className={styles.description}>
              Please RSVP by submitting your email address.
            </p>
          </p>
        </div>
        <Email />
      </main>

      <footer className={styles.footer}>
        For immediate questions please contact:{" "}
        <a href="mailto:alex@thefantomflower.com">alex@thefantomflower.com</a>
      </footer>
    </div>
  );
}