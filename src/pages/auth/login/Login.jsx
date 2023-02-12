import styles from "./style.module.css";
import TextInput from "../../../components/inputs/textInput";
import SimpleButton from "../../../components/buttons/simpleButton";
import IconButton from "../../../components/buttons/iconButton";
import GoogleIcon from "../../../assets/svg/GoogleIcon";

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
                        <TextInput
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            label="Email Address"
                            required={true}
                        />
                        <TextInput
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            label="Password"
                            required={true}
                        />

                        <SimpleButton
                            label={"Login"}
                            onClick={null}
                            bgColor={"#8692A6"}
                            textColor={"#FFFFFF"}
                        />
                        <IconButton
                            label={"Login with Google"}
                            onClick={null}
                            Icon={GoogleIcon}
                        />

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
