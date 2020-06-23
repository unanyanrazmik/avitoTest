import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://api.github.com/`,
});

export const reposAPI = {
    getRepositories(currenPage = 1) {
        return instance.get(`search/repositories?q=page=${currenPage}&per_page=10`)
    },
    getRepos(id) {
        return instance.get(`repositories/${id}`)
    },
    getSearch(e) {
        return instance.get(`search/repositories?q=${e}&sort=stars&per_page=10`)
    },
    getSortStars(){
        return instance.get(`search/repositories?q=sort=stars&per_page=10`)
    },

    getContributors(full_name){
        return instance.get(`repos/${full_name}/contributors?q=&per_page=10`)
    }
};