import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from './_components/navbar';
import LeftNav from './_components/left-nav'

export default function Home() {
  return (
    <>
      <main>
        <LeftNav />
        <h1 className="pageTitle">Welcome to LiBerry!!</h1>
        <Link href="about">About</Link>
      </main>
    </>
  )
}