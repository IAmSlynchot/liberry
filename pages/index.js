import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { LeftNav } from '../components/navigation';
import { getCuratedPhotos } from '../lib/api';
import Gallery from '../components/gallery';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ['latin'] })

function Home({ children, data, signOut }) {
  const [photos, setPhotos] = useState(data);
  return (
      <>
      <Head>
          <title>LiBerry</title>
      </Head>
        <main>
            <LeftNav signOut={signOut} />
            {/* <Gallery photoData={photos} /> */}
        </main>
      </>
  );
}

export default withAuthenticator(Home);
