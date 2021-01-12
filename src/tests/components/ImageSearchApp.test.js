/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import ImageSearchApp from "@comp/ImageSearchApp";
import { SearchImages } from "@cont/SearchImages";
import Header from "@comp//Header";
import Footer from "@comp//Footer";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<ImageSearchApp />);
});

it("renders ImageSearchApp component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("shows a Header component", () => {
  expect(wrapper.find(Header).length).toEqual(1);
});

it("shows a SearchImages component", () => {
  expect(wrapper.find(SearchImages).length).toEqual(1);
});
it("shows a SearchImages component", () => {
  expect(wrapper.find(Footer).length).toEqual(1);
});
