import styles from '../../../styles/NavListMobile.module.css';
import NavItemMobile from './NavItemMobile';

export default function NavListMobile({
  items = ['Home', 'Venue', 'Registry', 'RSVP'],
  toggleOpen,
  open
}) {
  return (
    <nav
      className={styles.container}
    >
      {items.map((item, i) =>
        <NavItemMobile
          key={i}
          toggleOpen={toggleOpen}
          i={i}
          open={open}
        >
          {item}
        </NavItemMobile>
      )}
    </nav>
  );
}
