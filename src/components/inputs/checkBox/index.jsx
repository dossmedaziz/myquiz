import styles from "./style.module.css"

export default function CheckBoxInput({label, onChange}) {
    return (<div className={styles.input__container}>
            <input
                className={styles.input__field}
                type="checkbox"
                onChange={onChange}
            />
            <label className={styles.input__label}>{label}</label>
        </div>)
}