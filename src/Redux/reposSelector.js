export const getItems = (state) => state.reposPage.items;
export const getTotalCount = (state) => state.reposPage.totalCount;
export const getSearchRespo = (state) => state.reposPage.searchRespo;
export const getRepos = (state) =>  state.descriptionPage.repos;
export const getPerPage = (state) => state.reposPage.perPage;
export const getCurrentPage = (state) => state.reposPage.currentPage;
export const IsFetching = (state) => state.reposPage.isFetching;
export const getContributors = (state) => state.descriptionPage.contributors;
export const setNewST = (state) => state.reposPage.newSearchText;


