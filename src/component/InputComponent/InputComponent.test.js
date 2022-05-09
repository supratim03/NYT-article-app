import React from "react";
import { mount } from "enzyme";
import InputComponent from "./InputComponent";

describe("Input component", () => {
    let wrapper;
    const handleInputChange = jest.fn();
    const triggerSearch = jest.fn();
    beforeEach(() => {
        wrapper = mount(
            <InputComponent 
                classValue="search"
                handleInputChange={handleInputChange}
                triggerSearch={triggerSearch}
            />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("trigger onchange event", () => {
        let element = wrapper.find(".search").at(0);
        element.simulate("change");
        expect(handleInputChange).toHaveBeenCalled();
    });

    it("trigger method onkeyDown event", () => {
        let element = wrapper.find(".search").at(0);
        element.simulate("keydown", { keyCode: 13 });
        expect(triggerSearch).toHaveBeenCalled();
    });
});
