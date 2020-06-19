import {createSelector} from "reselect";


export const getItems = (state) => state.vacanciesPage.items;
export const getSearchVacancy = (state) => state.vacanciesPage.searchVacancy;
export const getSort = (state) => state.vacanciesPage.sort;


export const filterVacancies = createSelector(getItems, getSearchVacancy,(items, searchVacancy ) => {
   return items.filter(v => {
            return v.name.toLowerCase().includes(searchVacancy.toLowerCase())
        });}
);