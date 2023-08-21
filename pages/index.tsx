import Image from 'next/image';
import InfoSection from '../components/InfoSection/InfoSection';
import Menu from '../components/Menu/Menu';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ScrollTip from '../components/ScrollTip/ScrollTip';
import Step from '../components/Step/Step';
import StepSection from '../components/StepSection/StepSection';
import styles from './index.module.css';
import Mockups from '../components/Mockups/Mockups';

export default function Page() {
  const testData = [{ bgcolor: '#ef6c00', completed: 70 }];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftContainer}>
        <Menu></Menu>
        <InfoSection></InfoSection>
        <StepSection></StepSection>
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
      <div className={styles.rightContainer}>
        <Image
          className={styles.fadeIn}
          src="/circle1.svg"
          alt="circle"
          width={200}
          height={500}
        ></Image>
        <Image
          src="/circle2.svg"
          alt="circle"
          width={200}
          height={200}
          className={`${styles.circle2} ${styles.fadeIn}`}
        ></Image>
        <Image
          src="/circle3.svg"
          alt="circle"
          width={700}
          height={150}
          className={`${styles.circle3} ${styles.fadeIn}`}
        ></Image>
        <Mockups></Mockups>
      </div>
      <ScrollTip></ScrollTip>
    </div>
  );
}
