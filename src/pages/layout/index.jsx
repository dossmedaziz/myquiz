import React from "react";
import style from "./style.module.css";
import SideBar from "../../components/sideBar";
import NavBar from "../../components/navBar";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className={style.container}>
            <div className={style.sideBar}>
                <SideBar/>
            </div>
            <div className={style.main}>
                <div className={style.header}>
                    <NavBar/>
                </div>
                <div className={style.content__side}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
