import styles from '../../../styles/NavItemMobile.module.css';
import Link from 'next/link';

export default function NavItemMobile({
  children,
  toggleOpen,
  i,
  open
}) {
  return (
    <div
      className={`${styles.container} ${styles.open}`}
      onClick={(e) => toggleOpen()}
    >
      {i !== 0 && <div className={i === 2 && open ? `${styles.line} ${styles.odd} ${styles.open}` : i === 2 ? `${styles.line} ${styles.odd}` : open ? `${styles.line} ${styles.open}` : styles.line} />}
      <Link
        href="/"
      >
        <a
          className={styles.link}
        >
          {children}
        </a>
      </Link>
    </div>
  );
}
