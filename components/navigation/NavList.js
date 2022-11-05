import styles from '../../styles/NavList.module.css';
import NavItem from './NavItem';

export default function NavList({
  items
}) {
  return (
    <div className={styles.container}>
      {items.map((item, i) =>

        <NavItem
          key={i}
          link={item.link}
        >
          {item.name}
        </NavItem>
      )}
    </div>
  );
}
