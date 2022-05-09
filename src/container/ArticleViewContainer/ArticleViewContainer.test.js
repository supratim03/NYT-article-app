import React from "react";
import { mount } from "enzyme/build";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import ArticleViewContainer from "./ArticleViewContainer";

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
            "searchKey": "USA",
            "selectedArticle": {
                "abstract": "test abstract",
                "pub_date": "2022-05-06T09:00:11+0000",
                "lead-paragraph": "test lead paragraph",
                "web_url": "https://www.nytimes.com/2022/05/06/opinion/ezra-klein-podcast-matt-continetti.html",
                "_id": 1
            }
        }
    };

    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        const componentProps = {
            "article" : initialState.SearchReducer.selectedArticle,
            "searchKey": initialState.SearchReducer.searchKey
        };

        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ArticleViewContainer {...componentProps} />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("open new window", () => {
        window.open = jest.fn();
        const element = wrapper.find(".articleView").at(0);
        element.simulate("click");
        expect(window.open).toHaveBeenCalledTimes(1);
    });

    it("navigate to search page", () => {
        const element = wrapper.find(".back").at(0);
        element.simulate("click");
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
});

