import Image from "next/image";
import Ornament from '../public/ornament.png';
import styles from '../styles/Seperator.module.css';
export default function Seperator({
  customStyle
}) {
  return (

    <div
      className={styles.container}
      style={customStyle}
    >
      <Image
        src={Ornament}
        layout='fill'
        className={styles.ornament}
        alt='Vine ornament'
      />
    </div>
  );
}
