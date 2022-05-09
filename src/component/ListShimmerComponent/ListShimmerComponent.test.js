import React from "react";
import { mount } from "enzyme";
import ListShimmerComponent from "./ListShimmerComponent";

describe("Shimemr component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <ListShimmerComponent />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
