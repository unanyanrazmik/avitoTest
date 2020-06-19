import {vacanciesAPI} from "../Api/Api";


const SET_DESCRIPTION_VACANCIES = 'setDescription/SET_DESCRIPTION_VACANCIES';

let initialState = {
    vacancy: null
};

const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DESCRIPTION_VACANCIES:
            return {
                ...state,
                vacancy: action.vacancy,
            };

        default:
            return state;
    }
};

const setDescription = (vacancy) => ({type: SET_DESCRIPTION_VACANCIES, vacancy});

export const setDescriptionThunk = (id) => async (dispatch) => {
    try {
        let response = await vacanciesAPI.getDescription(id);
        dispatch(setDescription(response.data));
    } catch (e) {
        throw e
    }

};

export default descriptionReducer;