import styles from './Menu.module.css'

export default function Menu(){
    return(
        <div className={styles.container}>
            <h1 className={styles.logo}>Teemio</h1>
            <div className={styles.menus}>
            <p className={styles.contact}>Kontakt Os</p>
            <p className={styles.about}>Om Teemio</p>
            </div>
        </div>
    )
}