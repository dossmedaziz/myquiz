import React from "react";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";
import TextInput from "../../components/inputs/textInput";
import SimpleButton from "../../components/buttons/simpleButton";

export default function Layout() {
  return (
    <>
      <div className={style.container}>
        <div className={style.navbar}>
          <div className={style.logo__container}>
            <h1 className={style.logo}>Logo</h1>
          </div>
          <div className={style.searchbar}>
            <TextInput
              placeholder="Search"
              name="search"
              required={false}
              value={""}
              onChange={() => {}}
            />
          </div>
          <div className={style.start__button}>
            <SimpleButton
              label="Start"
              textColor="white"
              bgColor="#8692A6"
              onClick={() => {}}
            />
          </div>
          <div className={style.profile__card}></div>
        </div>
        <div className={style.sidebar}></div>
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
