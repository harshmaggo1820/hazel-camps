import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="MSQ RC - Find the perfect summer camp for your child" />
        <meta name="keywords" content="summer camps, youth activities, camp finder, outdoor activities" />
        <meta name="author" content="MSQ RC" />
        <meta property="og:title" content="MSQ RC - Summer Camp Finder" />
        <meta property="og:description" content="Discover the perfect summer camp for your child with MSQ RC" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MSQ RC - Summer Camp Finder" />
        <meta name="twitter:description" content="Find the perfect summer camp for your child" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
