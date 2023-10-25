import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Liberry - About</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="pageTitle">About</h1>
        <Link href="/">Home</Link>
        <Link href="/second-index">Home - dupe</Link>

      </main>
    </>
  )
}