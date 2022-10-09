import styles from '../styles/BoxRow.module.css';

export default function BoxRow({
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
