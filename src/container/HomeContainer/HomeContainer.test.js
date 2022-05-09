import React from "react";
import { mount } from "enzyme/build";
// import configureStore from "redux-mock-store";
// import createSagaMiddleware from "@redux-saga/core";
// import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import HomeContainer from "./HomeContainer";
import InputComponent from "../../component/InputComponent/InputComponent";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";

// mock useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockedUsedNavigate
}));

describe("Home container", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <HomeContainer />
            </MemoryRouter>
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
        wrapper.find(ButtonComponent).invoke("handleSearch")();
        setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        }, 0);
    });
});

