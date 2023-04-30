import React from "react";
import styles from "./style.module.css";
function TextInput({
  type = "text",
  value,
  label = null,
  placeholder,
  onChange,
  required = false,
  style = {}

}) {
  return (
    <div className={styles.input__style}>
      <label className={styles.input__label}>
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={styles.input__field}
        style={{ ...style }}
      />
    </div>
  );
}

export default TextInput;
