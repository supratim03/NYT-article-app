import React from "react";
import { mount } from "enzyme/build";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import InputComponent from "../../component/InputComponent/InputComponent";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";
import * as actions from "../../store/actions/searchAction";

// mock useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockedUsedNavigate
 }));

describe("ArticleView container", () => {

    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "SearchReducer": {
            "searchResults": [
                {
                    "abstract": "test abstract",
                    "pub_date": "2022-05-06T09:00:11+0000",
                    "lead-paragraph": "test lead paragraph",
                    "web_url": "https://www.nytimes.com/2022/05/06/opinion/ezra-klein-podcast-matt-continetti.html",
                    "_id": 1,
                    "headline": {
                        "main": "test main"
                    }
                }
            ],
            "currentPage": 0,
            "showShimmer": false,
            "serviceUnavailable":  false
        }
    };
    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        const componentProps = {
            "articleList" : initialState.SearchReducer.searchResults,
            "currentPageNumber": initialState.SearchReducer.currentPage,
            "showShimmer": initialState.SearchReducer.showShimmer,
            "serviceUnavailable": initialState.SearchReducer.serviceUnavailable
        };

        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchContainer {...componentProps} />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("Input on change" , () => {
        wrapper.find(InputComponent).invoke("handleInputChange")("USA");
        setTimeout(() => {
            expect(wrapper.text()).toEqual("USA");
        }, 0);
    });

    it("navigate new page" , () => {
        wrapper.find(InputComponent).invoke("handleInputChange")("USA");
        wrapper.find(ButtonComponent).at(0).invoke("handleSearch")();
        setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        }, 0);
    });

    it("take to next page" , () => {
        wrapper.find(InputComponent).invoke("handleInputChange")("USA");
        wrapper.find(ButtonComponent).at(2).invoke("handleSearch")();
        setTimeout(() => {
            expect(store.dispatch).toHaveBeenNthCalledWith(actions.setShowShimemrs(true));
        },0);
    });
    it("take to prev page" , () => {
        wrapper.find(InputComponent).invoke("handleInputChange")("USA");
        wrapper.find(ButtonComponent).at(2).invoke("handleSearch")();
        wrapper.find(ButtonComponent).at(1).invoke("handleSearch")();
        setTimeout(() => {
            expect(store.dispatch).toHaveBeenNthCalledWith(actions.getSearchResults("USA", 0));
        },0);
    });

    it("should view article" , () => {
        wrapper.find(".article-header").at(0).simulate("click");
        setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        },0);
    });
});
