import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import LeftNav from '../components/left-nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ children }) {
  return (
      <>
      <Head>
          <title>LiBerry</title>
      </Head>
        <main>
            <LeftNav />
            <h1 className="pageTitle">Welcome to LiBerry!!</h1>
            <Link href="about">About</Link>
        </main>
      </>
  )
}
