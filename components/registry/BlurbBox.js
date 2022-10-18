import styles from '../../styles/BlurbBox.module.css';

export default function BlurbBox({
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
