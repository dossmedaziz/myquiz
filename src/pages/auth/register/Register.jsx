import React from "react";
import styles from "./style.module.css";
import TextInput from "../../../components/inputs/textInput";
import SimpleButton from "../../../components/buttons/simpleButton";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className={styles.register__container}>
            <div className={styles.register__form}>
                <div className={styles.form__header}>
                    <h2 className={styles.form__title}>You can Join US Now!</h2>
                    <div/>
                </div>
                <div className={styles.form__body}>
                    <form>
                        <div className={styles.input__item}>
                            <TextInput
                                type="text"
                                name="username"
                                placeholder="Username"
                                label="Username"
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
                            <TextInput
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Your Password"
                                label="Password Confirmation"
                                required={true}
                            />
                        </div>
                        <div className={styles.input__item}>
                            <SimpleButton
                                label={"Register"}
                                onClick={null}
                                bgColor={"#8692A6"}
                                textColor={"#FFFFFF"}
                            />
                        </div>
                        <div className={styles.input__item}>
              <span className={styles.form__footer}>
               Already have an account? <Link to="/">Login</Link>
              </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
