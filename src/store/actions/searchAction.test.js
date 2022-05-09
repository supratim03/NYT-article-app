import * as actions from "./searchAction";
import * as types from "../actionTypes/actionTypes";

describe("user actions", () => {
    it("should get search results", () => {
        const searchKey = "USA";
        const page = 0;
        const expectedAction = {
            type: types.GET_SEARCH_RESULTS,
            searchKey,
            page
        };
        expect(actions.getSearchResults(searchKey, page)).toEqual(expectedAction);
    });

    it("should set search results", () => {
        const result = [];
        const expectedAction = {
            type: types.SET_SEARCH_RESULTS,
            payload: result
        };
        expect(actions.setSearchResults(result)).toEqual(expectedAction);
    });

    it("should set search key", () => {
        const key = "USA";
        const expectedAction = {
            type: types.SET_SEARCH_KEY,
            payload: key
        };
        expect(actions.setSearchKey(key)).toEqual(expectedAction);
    });

    it("should set selected article", () => {
        const article = {};
        const expectedAction = {
            type: types.SET_SELECTED_ARTICLE,
            payload: article
        };
        expect(actions.setSelectedArticle(article)).toEqual(expectedAction);
    });

    it("should set current Page", () => {
        const currentPage = 0;
        const expectedAction = {
            type: types.SET_CURRENT_PAGE,
            payload: currentPage
        };
        expect(actions.setCurrentPage(currentPage)).toEqual(expectedAction);
    });

    it("should set show shimmers", () => {
        const show = true;
        const expectedAction = {
            type: types.SHOW_SHIMMERS,
            payload: show
        };
        expect(actions.setShowShimemrs(show)).toEqual(expectedAction);
    });
});
