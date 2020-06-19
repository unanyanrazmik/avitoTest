import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://api.hh.ru/`,
});

export const vacanciesAPI = {
    getVacancies() {
        return instance.get(`vacancies/?per_page=50`)
            },

    getDescription(id) {
        return instance.get(`vacancies/${id}`)
    }
};