import styles from '../../../styles/NavListMobile.module.css';
import NavItemMobile from './NavItemMobile';

export default function NavListMobile({
  items,
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
          link={item.link}
        >
          {item.name}
        </NavItemMobile>
      )}
    </nav>
  );
}
