import * as actionTypes from "../actionTypes/actionTypes";

export const getSearchResults = (searchKey, page = 0) => {
	return {
		type: actionTypes.GET_SEARCH_RESULTS,
		searchKey,
		page
	};
};

export const setSearchResults = (searchResults) => {
	return {
		type: actionTypes.SET_SEARCH_RESULTS,
		payload: searchResults
	};
};

export const setSearchKey = (searchKey) => {
	return {
		type: actionTypes.SET_SEARCH_KEY,
		payload: searchKey
	};
};

export const setSelectedArticle = article => {
	return {
		type: actionTypes.SET_SELECTED_ARTICLE,
		payload: article
	};
};

export const setCurrentPage = currentPage => {
	return {
		type: actionTypes.SET_CURRENT_PAGE,
		payload: currentPage
	};
};

export const setShowShimemrs = show => {
	return {
		type: actionTypes.SHOW_SHIMMERS,
		payload: show
	};
};

export const setServiceUnavailable = (isServiceUnAvailable) => {
	return {
		type: actionTypes.SET_SERVICE_UNAVAILABLE,
		payload: isServiceUnAvailable
	};
};
