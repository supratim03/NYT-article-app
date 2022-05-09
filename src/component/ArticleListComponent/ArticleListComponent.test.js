import React from "react";
import { mount } from "enzyme";
import ArticleListComponent from "./ArticleListComponent";

describe("Shimemr component", () => {
    let wrapper;

    const viewArticle = jest.fn();
    const articleList = [
        {
            "_id": 1,
            "headline": {
                "main": "test"
            },
            "abstract": "test"
        }
    ];
    beforeEach(() => {
        wrapper = mount(
            <ArticleListComponent 
                viewArticle={viewArticle}
                articleList={articleList}
            />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("trigger onclick", () => {
        let element = wrapper.find(".article-header").at(0);
        element.simulate("click");
        expect(viewArticle).toHaveBeenCalled();
    });
});
