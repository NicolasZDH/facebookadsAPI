import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function SignIn({ providers, csrfToken }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You are already <a>logged in!</a>
        </h1>

        <p className={styles.description}>
          Please come back to your Google Sheets, and start copy and paste Facebook Ads data.
        </p>
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