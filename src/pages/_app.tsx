import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import type { AppProps } from 'next/app';

import '../globals.css';
import { OpenAiApiKeyContextProvider } from '../contexts';
import { Nav } from '../components/Nav';

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
          <Component {...pageProps} />
        </Layout>
      </OpenAiApiKeyContextProvider>
    </>
  );
}
