import Step from '../Step/Step';
import styles from './StepSection.module.css';

export default function StepSection() {
  return (
    <div className={styles.container}>
      <Step
        title="Vælg aktivitet og dato"
        step={1}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, elit id pellentesque eleifend."
      ></Step>
      <Step
        title="Opret event"
        step={2}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, elit id pellentesque eleifend."
      ></Step>
      <Step
        title="Del event og stem"
        step={3}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, elit id pellentesque eleifend."
      ></Step>
      <Step
        title="Bestil og spar penge"
        step={4}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, elit id pellentesque eleifend."
      ></Step>
    </div>
  );
}
