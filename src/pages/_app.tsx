import React from 'react';
import Head from 'next/head';
import { Main } from '../components/Main';
import type { AppProps } from 'next/app';

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

      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
