import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setRepositoriesThunk} from "../../Redux/repos-reducer";
import s from './Repositories.module.css';
import {NavLink} from "react-router-dom";


class RepositoriesContainer extends React.Component {

    componentDidMount() {
        this.props.setRepositoriesThunk();
        // this.props.setCommitThunk(this.props.items)
    }


    render() {

        return <div>
            {this.props.items.map(u =>  <div key={u.id} className={s.repos}>
                <img src = {u.owner.avatar_url}/>
                <NavLink to= {'description/' + u.id}>{u.name}</NavLink>
            </div>)
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.reposPage.items,
        commit: state.reposPage.commit
    }
};


export default compose(
    connect(mapStateToProps, {setRepositoriesThunk})
)(RepositoriesContainer)
