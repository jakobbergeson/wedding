import styles from '../../styles/MessageBox.module.css';
import { useState } from 'react';

export default function MessageBox() {

  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.container}
    >
      <p
        className={styles.subHeader}
      >
        The Venue
      </p>
      <p
        className={styles.header}
      >
        Elks Lodge
      </p>
      <p
        className={styles.paragraph}
      >
        Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius.
      </p>
      <a
        href='https://www.google.com/maps/place/901+Elks+Ln,+Chula+Vista,+CA+91910/@32.6258932,-117.0387004,17z/data=!3m1!4b1!4m5!3m4!1s0x80d94e531a0ac295:0x9b909964a02f9b55!8m2!3d32.6258888!4d-117.0342157'
        target='_blank'
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={styles.link}
      >
        901 Elks Ln, Chula Vista, CA 91910
        <div className={hover ? styles.lineShow : styles.lineHidden} />
      </a>
    </div>
  );
}
