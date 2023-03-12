import Head from 'next/head';
import React from 'react';

import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Do Stuff</title>
        <meta name="description" content="This app is doing stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Main />
    </>
  );
}
