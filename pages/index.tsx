import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { PostData } from "../lib/posts";
import React from "react";
import Link from "next/link";
import { Date } from "../components/date";

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }) => {
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
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
