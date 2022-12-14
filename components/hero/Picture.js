import Image from "next/image";
import styles from '../../styles/Picture.module.css';
import Hero from '../../public/wedding-photo-clear.png';

export default function Picture() {
  return (
    <div
      className={styles.container}
    >
      <Image
        src={Hero}
        alt='Shannon and Anthony wedding invite'
        layout="fill"
        className={styles.picture}
        priority={true}
      />
    </div>
  );
}
