import Head from "next/head";
import styles from "../styles/Home.module.css";
import Email from "../components/email";
import Popup from "../components/popup";

export default function Home() {
  // const {
  //   DynamoDBClient,
  //   ListTablesCommand,
  // } = require("@aws-sdk/client-dynamodb");

  // (async () => {
  //   const client = new DynamoDBClient({ region: "us-west-2" });
  //   const command = new ListTablesCommand({});
  //   try {
  //     const results = await client.send(command);
  //     console.log(results.TableNames.join("\n"));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // })();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fantom Flower</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <img className={styles.logo} src="FF-color.png" />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.description}>
            The Flagship location is coming to the Historic Larrabee Recording
            Studios at 8811 Santa Monica Blvd, West Hollywood, California.
          </p>
          <p className={styles.description}>
            We are so excited to join the community and connect with you.
          </p>
          <p className={styles.description}>
            To speak about the concept and answer any of your questions, we are
            hosting socially distant virtual Town Halls on Wednesday, May 26th
            and Monday, May 31st at 5pm.
          </p>
          <p className={styles.description}>
            We are thrilled to be sharing our excitement about being part of the
            West Hollywood Community and being your neighbor.
          </p>
          <p className={styles.description}>
            Please RSVP by submitting your email address below.
          </p>
        </div>
        <Email />
        <Popup />
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          For immediate questions please contact:{" "}
          <a href="mailto:fantomflowerla@gmail.com">fantomflowerla@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
