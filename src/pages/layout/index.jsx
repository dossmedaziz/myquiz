import React from "react";
import style from "./style.module.css";
import SideBar from "../../components/sideBar";
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
        <div className={style.header}></div>
        <div className={style.content}>
          {data.map((item, index) => {
            return (
              <div
                style={{ backgroundColor: "red", width: "150px" }}
                key={index}
              >
                {item.name + "-" + index}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
