import {reposAPI} from "../Api/Api";


const SET_REPOSITORIES = 'repositories/SET_VACANCIES';
const TOGGLE_IS_FETHING = 'toggleIsFething/TOGGLE_IS_FETHING';
const SET_CURRENT_PAGE = 'currentPage/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'setTotalCount/SET_TOTAL_COUNT';

let initialState = {
    items: [],
    totalCount: 0,
    perPage: 10,
    currentPage: 1,
    isFetching: true,
};

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOSITORIES:
            return {
                ...state,
                items: action.items,
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            };

        case  TOGGLE_IS_FETHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETHING, isFetching});
const setRepositories = (items) => ({type: SET_REPOSITORIES, items});
const setPageNumber = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const setRepositoriesThunk = (currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
        let response = await reposAPI.getRepositories(currentPage);
        dispatch(setRepositories(response.data.items));
        dispatch(setTotalCount(response.data.total_count));
        dispatch(setPageNumber(currentPage));
    } catch (e) {
        throw e
    }
    dispatch(toggleIsFetching(false));


};

export const setHandleInputThunk = (v) => async (dispatch) => {
    if (!v) {
        try {
            let response = await reposAPI.getSortStars();
            dispatch(setRepositories(response.data.items));
        } catch (e) {
            throw e
        }
    } else {
        try {
            dispatch(toggleIsFetching(true));
            let response = await reposAPI.getSearch(v);
            dispatch(setRepositories(response.data.items));
            dispatch(toggleIsFetching(false));
        } catch (e) {
            throw e
        }
    }
};


export default reposReducer;