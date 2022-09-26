import Box from '../Box';
import styles from '../../styles/Heading.module.css';

export default function Heading() {
  return (
    <Box>
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
        January 11th, 2023 - San Diego, Ca
      </p>
    </Box>
  );
}
