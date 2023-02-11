import React from "react";
import styles from "./style.module.css";
function TextInput({
  type = "text",
  value,
  label,
  placeholder,
  onChange,
  required = false,
}) {
  return (
    <div className={styles.input__style}>
      <label>
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
      />
    </div>
  );
}

export default TextInput;
