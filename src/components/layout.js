import { Inter } from 'next/font/google';
import Navbar from './navigation';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <>
      <Head>
          <link rel="icon" href="/images/berry.png" sizes="any" />
      </Head>
      <Navbar />
      {children}
    </>
  )
}