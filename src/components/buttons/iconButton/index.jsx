import styles from "./style.module.css";
export default function IconButton({
  Icon,
  label,
  onClick,
  bgColor = "#fff",
  labelColor = "#000",
  iconColor,
  style,
}) {
  return (
    <div className={styles.button__container}>
      <button
        onClick={onClick}
        className={styles.button__shape}
        style={{ ...style, backgroundColor: bgColor }}
      >
        <div className={styles.icon__container}>
          <Icon color={iconColor} />
        </div>
        <div className={styles.label__container}>
          <span className={styles.label} style={{ color: labelColor }}>
            {label}
          </span>
        </div>
      </button>
    </div>
  );
}
