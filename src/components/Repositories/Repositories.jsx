import React from "react";
import style from './Repositories.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import star from "../../assets/img/star.png"


const Repositories = React.memo(({items, isFetching, onPageChanged, currentPage, totalCount, perPage}) => {

    return <div>
        {isFetching
            ? <Preloader/>
            : null}
        {items.map(u => <div key={u.id} className={style.repos}>
            <img src={!u.owner.avatar_url ? null : u.owner.avatar_url}/>
            <div className={style.description}>
                <div className={style.gitHub}>
                    <div><span>Repository:</span><NavLink to={'description/' + u.id}>{u.name}</NavLink></div>
                    <div className={style.stars}>{u.stargazers_count}  < img src={star} /></div>
                </div>
                <div><span>Updated: </span>  {u.updated_at.replace( /[T, Z]/gi,  ' ')}  </div>
                <div><span>GitHub:<a href={u.owner.html_url}>{u.owner.login}</a></span></div>
            </div>
        </div>)
        }
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            perPage={perPage}
            totalCount={totalCount}
        />
    </div>
});


export default Repositories
