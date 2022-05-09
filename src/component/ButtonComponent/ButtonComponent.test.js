import React from "react";
import { mount } from "enzyme";
import ButtonComponent from "./ButtonComponent";

describe("Input component", () => {
    let wrapper;
    const handleSearch = jest.fn();
    beforeEach(() => {
        wrapper = mount(
            <ButtonComponent 
                classValue="btn-search"
                handleSearch={handleSearch}
                buttontext={"Search"}
                isPrev={true}
                disabledValue={10}
            />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("trigger method on Click of button", () => {
        let element = wrapper.find(".btn-search").at(0);
        element.simulate("click");
        expect(handleSearch).toHaveBeenCalled();
    });
});

describe("Button component disabled test", () => {
    let wrapper;
    const handleSearch = jest.fn();

    beforeEach(() => {
        wrapper = mount(
            <ButtonComponent 
                classValue="search-btn" 
                buttonText="Search" 
                disabledValue = {0} 
                handleSearch={handleSearch}
                isPrev={true}
            />
        );
    });

    it("button should be disabled", () => {
        let element = wrapper.find(".search-btn").at(0);
        expect(element.props("disabled")).toBeTruthy();
    });
});
