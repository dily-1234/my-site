import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dilkash</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
