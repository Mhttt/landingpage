import Image from 'next/image';
import styles from './ScrollTip.module.css';

export default function ScrollTip() {
  return (
    <div className={styles.container}>
      <Image src="scroll.svg" alt="scroll" width={30} height={30}></Image>
    </div>
  );
}
