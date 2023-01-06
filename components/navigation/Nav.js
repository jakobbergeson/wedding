import styles from '../../styles/Nav.module.css';
import NavList from './NavList';
import NavItem from './NavItem';
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
        <div
          style={{
            position: 'absolute',
            left: '1px',
          }}
        >

          <NavItem
            link={'/#top'}
          >
            <Image src="/icon.png" alt="Logo" width={50} height={50} />
          </NavItem>
        </div>
        <NavList
          items={[{ name: 'Venue', link: '/#venue' }, { name: 'Itinerary', link: '/#itinerary' }, { name: 'Registry', link: '/#registry' }]}

        />
      </nav>
      <NavMobile />
    </>
  );
}
