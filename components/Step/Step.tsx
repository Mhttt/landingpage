import styles from './Step.module.css';

type IStepProps = {
  step: number;
  title: string;
  description: string;
};

export default function Step(props: IStepProps) {

  return (
    
    <div className={styles.container}>
      <div className={styles.stepAndTitleContainer}>
        <h2 className={styles.step}>{props.step}</h2>
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}
