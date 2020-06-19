import React, {useState} from "react";
import style from "./Paginator.module.css";
import cn from 'classnames'


const Paginator = React.memo(({totalCount, perPage, currentPage, onPageChanged, portionSize = 10}) => {


    let pageCount = Math.ceil(totalCount / perPage);
    let pages = [];
    for (let i = 0 ; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={style.paginator}>
            <div className={style.portion}>
                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <span  className={cn({
                            [style.selectedPage]: currentPage === p
                        }, style.pageNumber)}
                                     key={p}
                                     onClick={(e) => {
                                         onPageChanged(p);
                                     }}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}

            </div>
        </div>

    );

});
export default Paginator;