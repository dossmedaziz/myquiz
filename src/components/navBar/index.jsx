import style from "./style.module.css";
import TextInput from "../../components/inputs/textInput";
import SimpleButton from "../buttons/simpleButton";
export default function NavBar() {
  return (
    <div className={style.navbar__container}>
      <div className={style.searchbar__container}>
        <TextInput
          placeholder={"Search"}
          type={"text"}
          value={""}
          onChange={() => {}}
          style={{ width: "100%", height: "50px" }}
        />
      </div>
      <div className={style.startbtn__container}>
        <SimpleButton
          label="Start Quiz"
          textColor="white"
          bgColor="#8692A6"
          btnHeight="54px"
        />
      </div>{" "}
      <div className={style.avatar__container}>avatar</div>
    </div>
  );
}
