import styles from './InfoSection.module.css';

export default function InfoSection(){
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>TEEMIO</h1>
    <h2 className={styles.subtitle}>Din digitale platform til event planning</h2>
    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula, elit id pellentesque eleifend, mauris metus pellentesque diam, vitae pulvinar urna tortor in libero</p>
    </div>
  )
}
