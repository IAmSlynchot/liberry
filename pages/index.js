import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, LeftNav } from '../components/navigation';
import { getCuratedPhotos, getQueryPhotos } from '../lib/api';
import styles from '../styles/gallery.module.css'

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
  )
}

function Gallery({ photoData }) {
    return (
        <div className={styles.galleryContainer}> {
            photoData.map((pic) => (
                <div className={styles.photoWrapper} key={pic.id}>
                    <Image
                    className={styles.galleryPhoto}
                    src={pic.src.portrait} 
                    width="400" 
                    height="600"
                    alt={pic.url}  />
                </div>
            ))
        } </div> 
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