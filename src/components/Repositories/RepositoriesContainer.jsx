import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setHandleInputThunk, setRepositoriesThunk} from "../../Redux/repos-reducer";
import Repositories from "./Repositories";
import Search from "../common/Search/Search";
import {
    getCurrentPage,
    getItems,
    getPerPage,
    getSearchRespo,
    getTotalCount,
    IsFetching
} from "../../Redux/reposSelector";



class RepositoriesContainer extends React.Component {

    componentDidMount() {

        this.props.setRepositoriesThunk();
    }

    handleInput = (e) => {
        this.props.setHandleInputThunk(e.target.value);
    };

    onPageChanged = (p) => {
        this.props.setRepositoriesThunk(p);
    };

    render() {

        return <div>

            <div>
                <Search handleInput={this.handleInput}/>
            </div>
            <div>
                <Repositories
                    items={this.props.items}
                    commit={this.props.commit}
                    isFetching={this.props.isFetching}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    perPage={this.props.perPage}
                    totalCount={this.props.totalCount}
                />
            </div>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        items: getItems(state),
        isFetching: IsFetching(state),
        searchRespo: getSearchRespo(state),
        totalCount: getTotalCount(state),
        perPage: getPerPage(state),
        currentPage: getCurrentPage(state)
    }
};


export default compose(
    connect(mapStateToProps, {setRepositoriesThunk, setHandleInputThunk})
)(RepositoriesContainer)
