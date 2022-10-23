import styles from '../../styles/Map.module.css';
import Image from 'next/image';
import map from '../../public/map.png';

export default function Picture() {
  return (
    <div
      className={styles.container}
    >
      <a
        aria-label='Get Directions'
        href='https://www.google.com/maps/place/901+Elks+Ln,+Chula+Vista,+CA+91910/@32.6258932,-117.0387004,17z/data=!3m1!4b1!4m5!3m4!1s0x80d94e531a0ac295:0x9b909964a02f9b55!8m2!3d32.6258888!4d-117.0342157'
        target='_blank'
        rel="noreferrer"
      >
        <Image
          src={map}
          alt={'Google Map of the roads surrounding ELk Lodge'}
          width={550}
          height={550}
        />
      </a>
    </div>
  );
}
