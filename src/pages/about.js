import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <h1 className="pageTitle">About</h1>
      <Link href="/">Home</Link>
    </>
  )
}