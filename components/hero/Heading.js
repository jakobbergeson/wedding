import styles from '../../styles/Heading.module.css';

export default function Heading() {
  return (
    <div className={styles.container}>
      <p
        className={styles.sentence}
      >
        Please join us to celebrate
      </p>
      <p
        className={styles.heading}
      >
        Shannon & Anthony
      </p>
      <p
        className={styles.sentence}
      >
        January 28th, 2023 - San Diego, Ca
      </p>
    </div>
  );
}
