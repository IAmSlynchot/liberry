import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <h1 className="pageTitle" id="about-page-title">About</h1>
      <p id="about-page-text">Hi there! Thanks for using LiBerry, a nifty app for storing and sorting your photos, videos and other visual content.</p>
      <Link href="/">Home</Link>
    </>
  )
}