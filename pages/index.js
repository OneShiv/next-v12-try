import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/cart");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Hello world there !!!</p>
        <button onClick={onClickHandler}> Navigate to Cart page</button>
      </main>
    </div>
  );
}
