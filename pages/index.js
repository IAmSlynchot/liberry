import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import LeftNav from '../components/left-nav'
import { getCuratedPhotos, getQueryPhotos } from '../lib/api';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ children, data }) {
  const [photos, setPhotos] = useState(data);
  return (
      <>
      <Head>
          <title>LiBerry</title>
      </Head>
        <main>
            <LeftNav />
            <h1 className="pageTitle">Welcome to LiBerry!!</h1>
            <div>
            {
                photos.map((pic) => (
                    <div key={pic.id}>
                        <Image 
                        src={pic.src.medium} 
                        width="200" 
                        height="200"
                        alt={pic.url}  />
                    </div>
                ))
            }
            </div>
            <Link href="about">About</Link>
        </main>
      </>
  )
}

export async function getServerSideProps() {
    const data = await getCuratedPhotos();
    return {
      props: {
        data,
      },
    };
  }