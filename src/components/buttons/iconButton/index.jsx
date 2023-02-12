import styles from "./style.module.css"
export default function IconButton({Icon , label , onClick}) {

    return (
        <div className={styles.button__container}>
            <button
                onClick={onClick}
                className={styles.button__shape}>
               <div className={styles.icon__container}>
                   <Icon />
               </div>
               <div className={styles.label__container}>
                   <span className={styles.label}>{label}</span>
               </div>
            </button>
        </div>
    )
}