import styles from "./style.module.css";
function Login() {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__title}>Login to your Account</h2>
          <span>with your registered Email Address</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
