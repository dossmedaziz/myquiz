import React from "react";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";
import TextInput from "../../components/inputs/textInput";
import SimpleButton from "../../components/buttons/simpleButton";

export default function Layout() {
  const [data, setData] = React.useState([]);

  let fakeData = () => {
    let users = [];
    for (let i = 0; i < 100; i++) {
      users.push({ id: i, name: "name", surname: "surname" });
    }
    setData(users);
  };

  React.useEffect(() => {
    fakeData();
  }, [data]);
  return (
    <>
      <div className={style.container}>
        <div className={style.sideBar}>
          <h1>SideBar</h1>
        </div>
        <div className={style.main}>
          <div className={style.header}></div>
          <div className={style.content}>
            {data.map((item, index) => {
              return (
                <div style={{ backgroundColor: "red"  , width : '150px' }} key={index}>
                  {item.name + "-" + index}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
