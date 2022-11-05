import styles from '../../styles/ReserveBlurbBox.module.css';
import { useState } from 'react';

export default function ReserveBlurbBox({
  header,
  paragraph
}) {

  const [hover, setHover] = useState(false);

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
      <a
        href='mailto: shannonandanthony@outlook.com'
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.email}
      >
        shannonandanthony@outlook.com.
        <div className={hover ? styles.lineShow : styles.lineHidden} />
      </a>
    </div>
  );
}
