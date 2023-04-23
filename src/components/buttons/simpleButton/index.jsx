import React from "react";
import styles from "./style.module.css";
function SimpleButton({
  label,
  onClick,
  textColor,
  bgColor,
  btnHeight = "64px",
}) {
  return (
    <div className={styles.button__container}>
      <button
        onClick={onClick}
        className={styles.button__shape}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          height: btnHeight,
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default SimpleButton;
