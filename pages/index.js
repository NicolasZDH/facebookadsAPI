import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React from "react";
import { providers, signIn, useSession, getSession, csrfToken } from "next-auth/client";
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

export default function Home({ providers, csrfToken }) {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
            <>
            <div>
            <h1 href="https://www.pivotdata.com.br/" className={styles.title}>
              Welcome to <a>CopyИpaste!</a>
            </h1>

            <p className={styles.description}>
              All the marketing data you need, where you want.
            </p>
            </div>
            <div className={styles.grid}>
                <a onClick={() => signIn('facebook')} className={styles.card}>
                  <h3>Login Facebook &rarr;</h3>
                  <p>Please Login Facebook, and start copy Facebook Ads data and paste it in Google Sheets.</p>
                </a>
            </div>
            </>
      )}
      {session && (
        <>
        <h1 className={styles.title}>
          You are already <a>logged in!</a>
        </h1>

        <p className={styles.description}>
          Please come back to your Google Sheets, and start copy and paste Facebook Ads data.
        </p>
        </>
      )}
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

