import React from "react";
import styles from "./style.module.css";
function SimpleButton({ label, onClick }) {
  return (
    <div className={styles.button__container}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

export default SimpleButton;
