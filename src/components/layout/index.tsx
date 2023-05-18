import Navbar from "src/components/Navbar";
import styles from "./index.module.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Restaurant20</title>
        <meta name="description" content="Bootcamp project" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
