import styles from '../../styles/Item.module.css';

export default function Item({
  time,
  header,
  paragraph,
  index
}) {
  return (
    <div
      className={index % 2 === 0 ? `${styles.container} ${styles.even}` : styles.container}
    >
      <p
        className={styles.time}
      >
        {time}
      </p>
      <div
        className={styles.itemBox}
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
    </div>
  );
}
