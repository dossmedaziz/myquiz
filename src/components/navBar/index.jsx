import style from "./style.module.css";
import TextInput from "../../components/inputs/textInput";
import SimpleButton from "../buttons/simpleButton";

export default function NavBar() {
    return (
        <div className={style.navbar__container}>
            <div className={style.searchbar__container}>
                <TextInput
                    placeholder="Search.."
                    type={"text"}
                    value={""}
                    onChange={() => {
                    }}
                    style={{
                        width: "356px",
                        height: "64px",
                        boxShadow: '0px 15px 40px 5px #EDEDED',
                        fontWeight: "normal",
                    }}
                />
            </div>
            <div className={style.startbtn__container}>
                <SimpleButton
                    label="Start Quiz"
                    textColor="white"
                    bgColor="#8692A6"
                    btnHeight="54px"
                    style={{
                        width: "212px",
                        height: "64px"
                    }}
                />
            </div>
            {" "}
            <div className={style.avatar__container}>
                <div className={style.avatar}></div>
                <div style={style.connected__user}></div>
            </div>
        </div>
    );
}
