import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Description from "./Description";
import {setDescriptionThunk} from "../../Redux/description-reducer";
import {getContributors, getRepos} from "../../Redux/reposSelector";


class DescriptionContainer extends React.Component {

    componentDidMount() {
        this.props.setDescriptionThunk(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Description repos={this.props.repos} contributors={this.props.contributors}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        repos: getRepos(state),
        contributors: getContributors(state)
    }
};

export default compose(
    connect(mapStateToProps, {setDescriptionThunk}),
    withRouter
)(DescriptionContainer)