import React from "react";
import style from './Repositories.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import star from "../../assets/img/star.png"


const Repositories = React.memo(({items, isFetching}) => {

    return <div>
        {isFetching
            ? <Preloader/>
            : null}
        {items.map(u => <div key={u.id} className={style.repos}>
            <img src={!u.owner.avatar_url ? null : u.owner.avatar_url} alt='avatar_url'/>
            <div className={style.description}>
                <div className={style.gitHub}>
                    <div><span>Repository:</span><NavLink to={'description/' + u.id}>{u.name}</NavLink></div>
                    <div className={style.stars}>{u.stargazers_count}  <img src={star} alt='star'/></div>
                </div>
                <div><span>Updated: </span>  {u.updated_at.replace( /[T, Z]/gi,  ' ')}  </div>
                <div><span>GitHub:<a href={u.owner.html_url}>{u.owner.login}</a></span></div>
            </div>
        </div>)
        }

    </div>
});


export default Repositories
