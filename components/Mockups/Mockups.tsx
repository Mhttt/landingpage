import Image from 'next/image';
import styles from './Mockups.module.css';

export default function Mockups() {
  return (
    <div className={styles.container}>
      <Image className={styles.img1} src="/mockup.png" alt="mockup" width={500} height={500}></Image>
      <Image className={styles.img2} src="/mockup.png" alt="mockup" width={500} height={500}></Image>
    </div>
  );
}
