import { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/navigation/Nav';
import Hero from '../components/hero/Hero';
import Venue from '../components/venue/Venue';
import Seperator from '../components/Seperator';
import Itinerary from '../components/itinerary/Itinerary';
import Registry from '../components/registry/Registry';
import Rsvp from '../components/rsvp/Rsvp';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.container}>
      <Head>
        <title>Shannon & Anthony</title>
        <meta name="description" content="" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Nav />
      <main
        className={styles.main}
      >
        <Hero />
        <Venue />

        <Itinerary>
          <Seperator />
        </Itinerary>
        <Registry>
          <Seperator />
        </Registry>
        <Rsvp>
          <Seperator />
        </Rsvp>
      </main>

      <footer className={styles.footer}>
        <div
          className={styles.footBox}
        >
          <a
            href="https://www.jakobbergeson.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Built with ❤️ by
            <span
              className={styles.name}
            >
              Jakob Bergeson
            </span>
          </a>
          <div className={hover ? styles.lineShow : styles.lineHidden} />
        </div>
      </footer>
    </div>
  );
}
