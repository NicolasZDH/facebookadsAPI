import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React from "react";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Input,
  Container,
  Stack,
} from "@chakra-ui/react";

export default function SignIn({ providers, csrfToken }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
        <h1 className={styles.title}>
          Welcome to <a>CopyИpaste!</a>
        </h1>
        </Link>

        <p className={styles.description}>
          All the marketing data you need, where you want.
        </p>

        <Stack isInline marginTop={10}>
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <div className={styles.grid}>
                <a onClick={() => signIn(provider.id, { callbackUrl: 'https://auth.pivotdata.com.br/logged' })} className={styles.card}>
                  <h3>Login {provider.name} &rarr;</h3>
                  <p>Please Login Facebook, and start copy Facebook Ads data and paste it in Google Sheets.</p>
                </a>
              </div>
            );
          })}
        </Stack>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context)
  };
};