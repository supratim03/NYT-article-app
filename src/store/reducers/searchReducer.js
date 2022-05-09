import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
	searchResults: [],
	searchKey: null,
	selectedArticle : {},
	currentPage: 1,
	showShimmers: true,
	serviceUnavailable: false
};

const SearchReducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.SET_SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.payload
			};
		case actionTypes.SET_SEARCH_KEY:
			return {
				...state,
				searchKey: action.payload
			};
		case actionTypes.SET_SELECTED_ARTICLE: 
			return {
				...state,
				selectedArticle: action.payload
			};
		case actionTypes.SET_CURRENT_PAGE: 
			return {
				...state,
				currentPage: action.payload
			};
		case actionTypes.SHOW_SHIMMERS: 
			return {
				...state,
				showShimmers: action.payload
			};
		case actionTypes.SET_SERVICE_UNAVAILABLE: 
			return {
				...state,
				serviceUnavailable: action.payload
			};
		default:
			return state;
	}
};

export default SearchReducer;
