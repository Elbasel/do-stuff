import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Nav } from '../components/Nav';
import { OpenAiApiKeyContextProvider } from '../contexts/OpenAiApiKeyContextProvider';
import { Footer } from '../components/Footer';
import Layout from '../components/Layout';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Do Stuff</title>
        <meta name="description" content="This app is doing stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OpenAiApiKeyContextProvider>
        <Layout>
          <Nav />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </Layout>
      </OpenAiApiKeyContextProvider>
    </>
  );
}
