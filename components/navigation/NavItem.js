import styles from '../../styles/NavItem.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function NavItem({ children }) {

  const [hover, setHover] = useState(false);


  return (
    <div
      className={styles.container}

    >
      <Link
        href="/"
      >
        <a
          className={styles.link}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {children}
        </a>
      </Link>
      <div className={hover ? styles.lineShow : styles.lineHidden} />
    </div>
  );
}
