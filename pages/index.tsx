import InfoSection from '../components/InfoSection/InfoSection';
import Menu from '../components/Menu/Menu';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ScrollTip from '../components/ScrollTip/ScrollTip';
import Step from '../components/Step/Step';
import StepSection from '../components/StepSection/StepSection';
import styles from './index.module.css';

export default function Page() {

  const testData = [
    { bgcolor: "#ef6c00", completed: 70 },
  ];

  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftContainer}>
        <Menu></Menu>
        <InfoSection></InfoSection>
        <StepSection></StepSection>
          {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
      </div>
      <div className={styles.rightContainer}></div>
      <ScrollTip></ScrollTip>
    </div>
  );
}
