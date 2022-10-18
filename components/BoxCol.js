import styles from '../styles/BoxCol.module.css';

export default function BoxCol({
  children,
  id = 'div'
}) {
  return (
    <div
      className={styles.container}
      id={id}
    >
      {children}
    </div>
  );
}
