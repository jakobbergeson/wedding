import styles from '../../styles/NavList.module.css';
import NavItem from './NavItem';

export default function NavList({
  items = ['Home', 'Venue', 'Registry', 'RSVP']
}) {
  return (
    <div className={styles.container}>
      {items.map((item, i) =>

        <NavItem
          key={i}
        >
          {item}
        </NavItem>
      )}
    </div>
  );
}
