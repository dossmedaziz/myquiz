import {Outlet} from "react-router-dom";
import "./style.css"

function Auth() {
    return (
        <div className="container">
            <div className="quote__side">
                <div className="quote__container">
                    <p>Those people who develop the ability to continuously acquire new and better forms of knowledge
                        that they can apply to their work and to their lives will be the movers and shakers in our
                        society for the indefinite future</p>
                    <p>Brian Tracy</p>
                </div>
            </div>
            <div className="form__side">
                <Outlet/>
            </div>
        </div>
    );
}


export default Auth