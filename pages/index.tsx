import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { Layout } from "../components/Layout";
import { Date } from "../components/date";
import { css } from "@emotion/react";

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
        <ul css={blogList}>
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

const blogList = css`
  padding: 0;
  display: grid;
  row-gap: 20px;
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  time {
    color: #999;
  }
`;

export default Home;
