import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setDescriptionThunk} from "../../../Redux/descriptionReducer";
import {withRouter} from "react-router-dom";
import Description from "./Description";


class DescriptionContainer extends React.Component {

    componentDidMount() {
        this.props.setDescriptionThunk(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Description vacancy={this.props.vacancy}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        vacancy: state.descriptionPage.vacancy
    }
};

export default compose(
    connect(mapStateToProps, {setDescriptionThunk}),
    withRouter
)(DescriptionContainer)