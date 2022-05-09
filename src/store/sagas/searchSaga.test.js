import { runSaga } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import * as api from "../../Api/ApiHelper";
import * as actions from "../actions/searchAction";
import searchSaga, {getSearchResults} from "./searchSaga";
import * as types from "../actionTypes/actionTypes";

describe("Search Saga", () => {
    api.getData = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should call getSearchResults and dispatch success action", async () => {
        const dummyResponse = {
            "success": true,
            "payload": {
                "response": {
                    "docs": []
                }
            }
        };
        const requestObject = {
            "searchKey": "USA",
            "page": 0
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
        getSearchResults, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setSearchResults(dummyResponse.payload.response.docs),
            actions.setShowShimemrs(false)
        ]);
    });

    it("should call getSearchResults and dispatch failed action", async () => {
        const dummyResponse = {
            "success": false,
            "payload": {
                "response": {
                    "docs": []
                }
            }
        };
        const requestObject = {
            "searchKey": "USA",
            "page": 0
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
        getSearchResults, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setSearchResults(dummyResponse.payload.response.docs),
            actions.setShowShimemrs(false),
            actions.setServiceUnavailable(true)
        ]);
    });
});

describe("searchSaga()", () => {
    const gen = searchSaga();
    // exactly the same as implementation
    const expected = takeEvery(types.GET_SEARCH_RESULTS, actions.getSearchResults);
    const actual = gen.next().value;

    it("Should fire on GET_SEARCH_RESULTS", () => {
      expect(JSON.stringify(actual)).toStrictEqual(JSON.stringify(expected));
    });
});
