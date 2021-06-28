import Head from "next/head";
import { Layout } from "../../components/Layout";
import { VFC } from "react";

const FirstPost: VFC = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
};

export default FirstPost;
