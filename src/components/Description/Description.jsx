import React from "react";
import style from './Description.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import star from "../../assets/img/star.png";


const Description = React.memo(({repos, contributors}) => {

    if (!repos || !contributors) {
        return <Preloader/>
    }

    return <div className={style.repos}>
        <div>
            <img src={repos.owner.avatar_url}  alt='owner.avatar'/>
        </div>
        <div className={style.description}>
            <div className={style.name}>
                <div><span>Repository: </span> <a href={repos.owner.html_url}>{repos.name}</a> </div>
                <div className={style.stars}>{repos.stargazers_count}  < img src={star} alt='star'/></div>
            </div>
            <div>
                <span>Updated:  </span>{repos.updated_at.replace( /[T, Z]/gi,  ' ')}
            </div>
            <div>
                <span>language:  </span>{repos.language}
            </div>
            <hr/>
            <div>
                <span>GitHub:  </span><a href={repos.owner.html_url}>{repos.owner.login}</a>
            </div>
            <div>
                <NavLink to="/repositories">вернуться к списку</NavLink>
            </div>
            <hr/>
            <div>
                {repos.description}
            </div>
            <hr/>
            <h5>Contributors: {contributors.length}</h5>
            <div>
                {contributors.map(u => <div key={u.id} className={style.contributors}>
                    <div>
                        <a href={u.html_url}><img src={u.avatar_url} alt='avatar'/></a>
                    </div>
                </div>)}
            </div>

        </div>

    </div>
});


export default Description;