import React from "react";
import style from "./style.module.css";
import SideBar from "../../components/sideBar";
import NavBar from "../../components/navBar";
import { Outlet } from "react-router-dom";
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
  }, []);
  return (
    <div className={style.container}>
      <div className={style.sideBar}>
       <SideBar />
      </div>
      <div className={style.main}>
        <div className={style.header}>
          <NavBar />
        </div>
        <div className={style.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
