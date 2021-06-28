import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

type Props = {
  name: string;
  home?: boolean;
};

export const Header: React.VFC<Props> = ({ home = true, name }) => {
  return (
    <header css={header}>
      {home ? (
        <>
          <img src="/images/profile.jpg" css={headerHomeImage} alt={name} />
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <img src="/images/profile.jpg" css={headerImage} alt={name} />
            <h2>
              <Link href="/">{name}</Link>
            </h2>
          </Link>
        </>
      )}
    </header>
  );
};

const header = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  }
`;

const headerImage = css`
  width: 6rem;
  height: 6rem;
`;

const headerHomeImage = css`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
`;
