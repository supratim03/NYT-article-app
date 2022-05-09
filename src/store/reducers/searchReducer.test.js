import * as types from "../actionTypes/actionTypes";
import SearchReducer from "./searchReducer";

describe("search reducer", () => {
    it("should return the initial state", () => {
        expect(SearchReducer(undefined, {})).toEqual(
            {
                searchResults: [],
                searchKey: null,
                selectedArticle: {},
                currentPage: 1,
                showShimmers: true,
                serviceUnavailable: false
            }
        );
    });

    it("should handle SET_SEARCH_RESULTS", () => {
        const action = {
            type: types.SET_SEARCH_RESULTS,
            payload: [{ id: 1, webTitle: "test" }]
        };
        expect(SearchReducer([], action)).toEqual(
            { searchResults: [{ id: 1, webTitle: "test" }] }
        );
    });

    it("should handle SET_SEARCH_KEY", () => {
        const action = {
            type: types.SET_SEARCH_KEY,
            payload: "USA"
        };
        expect(SearchReducer([], action)).toEqual(
            { searchKey: "USA" }
        );
    });

    it("should handle SET_SELECTED_ARTICLE", () => {
        const action = {
            type: types.SET_SELECTED_ARTICLE,
            payload: {}
        };
        expect(SearchReducer([], action)).toEqual(
            { selectedArticle: {} }
        );
    });

    it("should handle SET_CURRENT_PAGE", () => {
        const action = {
            type: types.SET_CURRENT_PAGE,
            payload: 1
        };
        expect(SearchReducer([], action)).toEqual(
            { currentPage: 1 }
        );
    });

    it("should handle SHOW_SHIMMERS", () => {
        const action = {
            type: types.SHOW_SHIMMERS,
            payload: true
        };
        expect(SearchReducer([], action)).toEqual(
            { showShimmers: true }
        );
    });

    it("should handle SET_SERVICE_UNAVAILABLE", () => {
        const action = {
            type: types.SET_SERVICE_UNAVAILABLE,
            payload: true
        };
        expect(SearchReducer([], action)).toEqual(
            { serviceUnavailable: true }
        );
    });
});
