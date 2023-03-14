import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import {OpenAiApiKeyContext} from '../contexts/OpenAiApiKeyContext';
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
      <OpenAiApiKeyContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OpenAiApiKeyContext>
    </>
  );
}
