import Image from "next/image";
import styles from '../../styles/Picture.module.css';

export default function Picture() {
  return (
    <div
      className={styles.container}
    >
      <Image
        src='/hero.jpg'
        layout="fill"
        className={styles.picture}
        priority={true}
      />
    </div>
  );
}
