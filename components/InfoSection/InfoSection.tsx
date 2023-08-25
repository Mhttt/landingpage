import styles from './InfoSection.module.css';

export default function InfoSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planlæg dit næste event med Teemio!</h1>
      <p className={styles.description}>
        Med Teemio kan du helt gratis{' '}
        <span className={styles.orangeText}>planlægge</span>,{' '}
        <span className={styles.orangeText}>organisere</span> og{' '}
        <span className={styles.orangeText}>booke</span> dit næste{' '}
        <span className={styles.orangeText}>teamevent</span>! Vi samler det hele{' '}
        <span className={styles.orangeText}>ét sted</span> og sørger for at du{' '}
        som virksomhed får minimum{' '}
        <span className={styles.orangeText}>5% rabat</span> på all vores{' '}
        aktiviter - så du kan spare{' '}
        <span className={styles.orangeText}>tid</span> og{' '}
        <span className={styles.orangeText}>penge</span>!
      </p>
    </div>
  );
}
