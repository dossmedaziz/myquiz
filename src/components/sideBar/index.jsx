import React from "react";
import style from "./style.module.css";
import IconButton from "../buttons/iconButton";
import {
    DashboardIcon,
    HeadPhoneIcon,
    NotificationIcon,
    LogOutIcon
} from "../../assets/svg";
import {useNavigate} from "react-router-dom";
import {AUTHPATHS} from "../../navigation/paths";

function SideBar() {

    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <div className={style.logo__container}>
                <span>Quiz Time</span>
            </div>
            <div className={style.links__container}>
                <div className={style.top__links}>
                    <div className={style.link__container}>
                        <IconButton
                            Icon={DashboardIcon}
                            label="Dashboard"
                            bgColor="#8692A6"
                            labelColor="#fff"
                            onClick={() => navigate(AUTHPATHS.DASHBOARD)
                            }
                        />
                    </div>
                    <div className={style.link__container}>
                        <IconButton
                            Icon={HeadPhoneIcon}
                            label="Support"
                            labelColor="#8692A6"
                            bgColor="transparent"
                            iconColor="#8692A6"
                            onClick={() => navigate(AUTHPATHS.SUPPORT)}
                        />
                    </div>
                    <div className={style.link__container}>
                        <IconButton
                            Icon={NotificationIcon}
                            label="Notification"
                            labelColor="#8692A6"
                            bgColor="transparent"
                            iconColor="#8692A6"
                            onClick={() => navigate(AUTHPATHS.NOTIFICATIONS)}
                        />
                    </div>
                </div>
                <div className={style.bottom__links}>
                    <div className={style.link__container}>
                        <IconButton
                            Icon={LogOutIcon}
                            label="Log out"
                            labelColor="#8692A6"
                            bgColor="transparent"
                            iconColor="#8692A6"
                            onClick={() => console.log("LOGOUT OUT")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
