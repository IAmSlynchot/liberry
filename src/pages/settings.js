import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Settings() {
  return (
    <>
      <h1 className="pageTitle" id="settings-page-title">Settings</h1>
      <p id="settings-page-text">Welcome to the settings page. Oops, looks like we're all out of settings.</p>
      <Link href="/">Home</Link>
    </>
  )
}