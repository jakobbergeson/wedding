import styles from '../../styles/Nav.module.css';
import NavList from './NavList';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nav() {

  const [border, setBorder] = useState(false);

  const changeBorder = () => {
    if (window.scrollY >= 30) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  useEffect(() => {
    changeBorder();
    window.addEventListener("scroll", changeBorder);
  });

  return (
    <div
      className={border ? `${styles.container} ${styles.scroll}` : styles.container}
    >
      <NavList
        items={['Home', 'Venue', <Image src="/icon.png" alt="Logo" width={80} height={80} />, 'Registry', 'RSVP']}

      />
    </div>
  );
}
