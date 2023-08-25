import Step from '../Step/Step';
import styles from './StepSection.module.css';

export default function StepSection() {
  return (
    <div className={styles.container}>
      <Step
        title="Vælg aktivitet og dato"
        step={1}
        description={
          <p className={styles.description}>
            Start med at vælge de aktiviter og datoer som passer dit team bedst!
          </p>
        }
      ></Step>
      <Step
        title="Opret event"
        step={2}
        description={
          <p className={styles.description}>
            Opret et event, tilføj en beskrivelse, titel og dit eget
            logo/billede. <br></br>Gør det formelt med din personlige eventside!
          </p>
        }
      ></Step>
      <Step
        title="Del event og stem"
        step={3}
        description={
          <p className={styles.description}>
            Send nemt event-linket til dit team, så I sammen kan stemme om den
            bedste aktivitet og dato! <br></br>{' '}
            <i>Det kræver ingen konto at stemme.</i>
          </p>
        }
      ></Step>
      <Step
        title="Bestil og spar penge"
        step={4}
        description={
          <p className={styles.description}>
            Gør brug af vores platform når du bestiller, og sikre dig en
            attraktiv rabat på mindst 5% på den valgte aktivitet. Tag skridtet
            nu – spar både tid og penge!
          </p>
        }
      ></Step>
    </div>
  );
}
