import { Inter } from 'next/font/google';
import Navbar from './navigation';
import { LeftNav } from './navigation';
import Head from 'next/head';
import { withAuthenticator } from "@aws-amplify/ui-react";


const inter = Inter({ subsets: ['latin'] })

function Layout({ children, signOut }) {
  return (
    <>
      <Head>
          <link rel="icon" href="/images/berry.png" sizes="any" />
          <title>LiBerry</title>
      </Head>
      <Navbar />
      <LeftNav signOut={signOut} />
      <main>
        {children}
      </main>
    </>
  )
}

export default withAuthenticator(Layout);