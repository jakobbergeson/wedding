import styles from '../../styles/Nav.module.css';
import NavList from './NavList';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NavMobile from './mobileNav/NavMobile';
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
    <>
      <nav
        className={border ? `${styles.container} ${styles.scroll}` : styles.container}
      >
        <NavList
          items={['Home', 'Venue', <Image src="/icon.png" alt="Logo" width={70} height={70} />, 'Registry', 'RSVP']}

        />
      </nav>
      <NavMobile />
    </>
  );
}
