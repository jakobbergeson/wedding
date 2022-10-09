import Flowers from '../../public/flowers-clear.png';
import Image from 'next/image';

export default function Picture() {
  return (
    <div>
      <Image
        src={Flowers}
        width={450}
        height={450}
      />
    </div>
  );
}
