import { useState } from 'react';
import styles from '../../../styles/NavMobile.module.css';
import Image from 'next/image';
import Icon from '../../../public/icon.png';
import Link from 'next/link';
import NavListMobile from './NavListMobile';

export default function NavMobile() {

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(current => !current);
  };

  return (
    <nav className={styles.container}>
      <Link
        href='/'
      >
        <a>
          <Image
            src={Icon}
            alt='Shannon and Anthony'
            width={38}
            height={38}
          />
        </a>
      </Link>
      <button
        onClick={(e) => toggleOpen()}
        className={open ? `${styles.navicon} ${styles.open}` : styles.navicon}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>
      <div
        className={open ? `${styles.menu} ${styles.open}` : styles.menu}
      >
        <NavListMobile
          items={[{ name: 'Venue', link: '/#venue' }, { name: 'Itinerary', link: '/#itinerary' }, { name: 'Registry', link: '/#registry' }, { name: 'RSVP', link: '/#rsvp' }]}
          toggleOpen={toggleOpen}
          open={open}
        />
      </div>
    </nav>
  );
}
