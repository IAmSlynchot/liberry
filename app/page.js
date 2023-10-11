import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from './_components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Liberry - Home</title>
      </Head>
      {/* <Navbar /> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="pageTitle">Squanch this!</h1>
        <Link href="about">About</Link>
      </main>
    </>
  )
}