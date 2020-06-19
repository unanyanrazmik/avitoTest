import {reposAPI} from "../Api/Api";


const SET_DESCRIPTION_REPOS = 'setDescription/SET_DESCRIPTION_VACANCIES';
const SET_CONTRIBUTORS = 'setContributors/SET_CONTRIBUTORS';

let initialState = {
    repos: null,
    contributors:null
};

const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DESCRIPTION_REPOS:
            return {
                ...state,
                repos: action.repos,
            };
        case SET_CONTRIBUTORS:
            return {
                ...state,
                contributors: action.contributors,
            };

        default:
            return state;
    }
};

const setDescription = (repos) => ({type: SET_DESCRIPTION_REPOS, repos});
const setContributors = (contributors) => ({type: SET_CONTRIBUTORS, contributors});

export const setDescriptionThunk = (id) => async (dispatch) => {
    try {
        let response = await reposAPI.getRepos(id);
        let contributors =  await reposAPI.getContributors(response.data.full_name);
        dispatch(setDescription(response.data));
        dispatch(setContributors(contributors.data));
    } catch (e) {
        throw e
    }

};

export default descriptionReducer;