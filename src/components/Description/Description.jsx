import React from "react";
import style from './Description.module.css'
import {NavLink} from "react-router-dom";


const Description = ({vacancy}) => {

    if (!vacancy) {
        return <div>Loading...</div>
    }

    return <div className={style.description}>
        <NavLink to="/vacancies">vacancies</NavLink>
        <div className={style.name}>{vacancy.name}</div>
        <div className={style.city}>{vacancy.area.name}</div>
        <div>{vacancy.description}</div>

    </div>
};


export default Description;