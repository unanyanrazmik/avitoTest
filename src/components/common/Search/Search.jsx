import React from "react";
import style from "./Search.module.css"

const Search = React.memo(({handleInput, newSearchText}) => {

    return (
            <div className={style.search}>
                <input
                    onChange={handleInput}
                    type="text"
                    placeholder="Search Repository"/>
            </div>
    )
});

export default Search;