import React from "react";
import loading from "../../../assets/Preloader/loading.png";
import style from "./Preloader.module.css";


let Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={loading} alt='loading'/>
        </div>
    )
};

export default Preloader;