import styles from '../../styles/ReserveBlurbBox.module.css';

export default function ReserveBlurbBox({
  header,
  paragraph
}) {
  return (
    <div
      className={styles.container}
    >
      <p
        className={styles.header}
      >
        {header}
      </p>
      <p
        className={styles.paragraph}
      >
        {paragraph}
      </p>
    </div>
  );
}
