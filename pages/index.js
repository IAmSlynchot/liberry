import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { LeftNav } from '../components/navigation';
import { getCuratedPhotos } from '../lib/api';
import Gallery from '../components/gallery';

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
            <Gallery photoData={photos} />
        </main>
      </>
  );
}

export async function getServerSideProps() {
    const data = await getCuratedPhotos();
    return {
      props: {
        data,
      },
    };
  }
