import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
// import Inter from 'google-fonts-inter';
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vave</title>
      </Head>
      {/* <Link href="/dashboard">Dashboard</Link> */}
      <Navbar />
    </>
  );
};

export default Home;
