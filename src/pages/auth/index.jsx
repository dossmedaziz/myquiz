import {Outlet} from "react-router-dom";
import styles from "./style.module.css";

function Auth() {
    return (
        <div className={styles.container}>
            <div className={styles.quote__side}>
                <div className={styles.quote__container}>
                    <p>
                        Those people who develop the ability to continuously acquire new and
                        better forms of knowledge that they can apply to their work and to
                        their lives will be the movers and shakers in our society for the
                        indefinite future
                    </p>
                    <p>Brian Tracy</p>
                </div>
            </div>
            <div className={styles.form__side}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Auth;
