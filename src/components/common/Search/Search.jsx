import React from "react";
import style from "./Search.module.css"

const Search = React.memo(({handleInput, newSearchText}) => {

    return (
        <div className={style.inputField}>
            <div className={style.search}>
                <input
                    onChange={handleInput}
                    value={newSearchText}
                    type="text"
                    placeholder="Search Repository"/>
            </div>
        </div>
    )
});

export default Search;