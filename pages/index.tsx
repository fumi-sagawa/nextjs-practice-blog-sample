import Link from "next/link";

import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>siteTitle</title>
      </Head>
      <section>
        <p>
          Hi, I'm Fumiya.Thanks for visiting my tutorial blog. This repository
          is for practicing Next.js ,Typescript and Emotion.I would be happy if
          you could use this for practice too!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
