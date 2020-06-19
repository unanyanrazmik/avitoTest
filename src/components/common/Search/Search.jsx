import React from "react";
import style from "./Search.module.css"

const Search = ({handleInput}) => {

    return (
        <div className={style.inputField}>
            <div className={style.search}>
                <input onChange={handleInput} type="text" placeholder="Search Repository"/>
            </div>
        </div>
    )
};

export default Search;