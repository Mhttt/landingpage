import styles from './ProgressBar.module.css';

type IProgressBarProps = {
  bgcolor: string;
  completed: number;
}

const ProgressBar = (props: IProgressBarProps) => {
  const {bgcolor, completed} = props;

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right' as const,
  };

  return (
    <div className={styles.container}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;