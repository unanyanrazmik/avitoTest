import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setHandleInputThunk, setPageNumber, setRepositoriesThunk} from "../../Redux/repos-reducer";
import Repositories from "./Repositories";
import Search from "../common/Search/Search";
import {
    getCurrentPage,
    getItems,
    getPerPage,
    getSearchRespo,
    getTotalCount,
    IsFetching, setNewST
} from "../../Redux/reposSelector";



class RepositoriesContainer extends React.Component {

    componentDidMount() {
        this.props.setRepositoriesThunk(this.props.currentPage);
    }

    handleInput = (e) => {
        let value = e.target.value;
        this.props.setHandleInputThunk(value);


    };

    onPageChanged = (p) => {
        this.props.setRepositoriesThunk(p);

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if( this.props.currentPage !== prevProps.currentPage) {
            this.props.setRepositoriesThunk(this.props.currentPage);
        }
    }



    render() {


        return <div>

            <div>
                <Search
                    handleInput={this.handleInput}
                    newSearchText={this.props.newSearchText}

                />
            </div>
            <div>
                <Repositories

                    items={this.props.items}
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
        currentPage: getCurrentPage(state),
        newSearchText: setNewST(state)


    }
};


export default compose(
    connect(mapStateToProps, {setRepositoriesThunk, setHandleInputThunk, setPageNumber})
)(RepositoriesContainer)
