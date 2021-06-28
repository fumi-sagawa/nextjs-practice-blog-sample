import React from "react";
import { css } from "@emotion/react";
import { Heading } from "./Heading";
import { Header } from "./Header";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  home?: boolean;
};

const name = "Fumiya Sagawa";
export const siteTitle = "Next.js Sample Website";

export const Layout: React.VFC<Props> = ({ children, home }) => {
  return (
    <div css={container}>
      <Heading siteTitle={siteTitle} />
      <Header name={name} home={home} />
      <main>{children}</main>
      {!home && (
        <div css={backToHome}>
          <Link href="/">Back to home</Link>
        </div>
      )}
    </div>
  );
};

//ここからCSS
const container = css`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const backToHome = css`
  margin: 3rem 0 0;
`;
