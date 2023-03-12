import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen overflow-hidden w-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
