import styles from "./style.module.css";
import TextInput from "../../../components/inputs/textInput";
import SimpleButton from "../../../components/buttons/simpleButton";
import IconButton from "../../../components/buttons/iconButton";
import GoogleIcon from "../../../assets/svg/GoogleIcon";
import CheckBoxInput from "../../../components/inputs/checkBox";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__form}>
        <div className={styles.form__header}>
          <h2 className={styles.form__title}>Login to your Account</h2>
          <span>with your registered Email Address</span>
        </div>

        <div className={styles.form__body}>
          <form>
            <div className={styles.input__item}>
              <TextInput
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                label="Email Address"
                required={true}
              />
            </div>
            <div className={styles.input__item}>
              <TextInput
                type="password"
                name="password"
                placeholder="Enter Your Password"
                label="Password"
                required={true}
              />
            </div>

            <div className={styles.input__item}>
              <CheckBoxInput label={"Remember my password"} onChange={null} />
            </div>
            <div className={styles.input__item}>
              <SimpleButton
                label={"Login"}
                onClick={null}
                bgColor={"#8692A6"}
                textColor={"#FFFFFF"}
              />
            </div>
            <div className={styles.input__item}>
              <IconButton
                label={"Login with Google"}
                onClick={null}
                Icon={GoogleIcon}
              />
            </div>
            <div className={styles.input__item}>
              <span className={styles.form__footer}>
                Don't have an account? <Link to="/register">Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
