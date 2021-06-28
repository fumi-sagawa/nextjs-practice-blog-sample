import React from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "@emotion/react";

type Props = {
  name: string;
  home?: boolean;
};

export const Header: React.VFC<Props> = ({ home = false, name }) => {
  return (
    <header css={header}>
      {home ? (
        <>
          <div css={homeImageContainer}>
            <Image
              src="/images/profile.jpg"
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <div css={imageContainer}>
              <Image
                src="/images/profile.jpg"
                alt={name}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>{" "}
          <h2>
            <Link href="/">
              <a css={colorInherit}>{name}</a>
            </Link>
          </h2>
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

const borderCircle = css`
  border-radius: 9999px;
`;

const homeImageContainer = css`
  position: relative;
  width: 8rem;
  height: 8rem;
  div {
    border-radius: 9999px;
  }
`;

const imageContainer = css`
  position: relative;
  width: 6rem;
  height: 6rem;
  div {
    border-radius: 9999px;
  }
`;

const colorInherit = css`
  color: inherit;
`;
