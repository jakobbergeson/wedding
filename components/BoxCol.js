import styles from '../styles/BoxCol.module.css';

export default function BoxCol({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
