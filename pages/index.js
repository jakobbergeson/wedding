import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/navigation/Nav';
import Hero from '../components/hero/Hero';
import Venue from '../components/venue/Venue';
import Seperator from '../components/Seperator';
import Itinerary from '../components/itinerary/Itinerary';
import Registry from '../components/registry/Registry';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shannon & Anthony</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Hero />
        <Venue />
        <Seperator />
        <Itinerary />
        <Seperator />
        {/* <Seperator
          customStyle={{ transform: 'translate(0px, -52%)', zIndex: 100 }}
        /> */}
        <Registry />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
