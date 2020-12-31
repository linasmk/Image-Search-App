/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import ImageSearchApp from "../../components/ImageSearchApp";
import { SearchImages } from "../../containers/SearchImages";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<ImageSearchApp />);
});

it("Shows a Header component", () => {
  expect(wrapper.find(Header).length).toEqual(1);
});

it("Shows a SearchImages component", () => {
  expect(wrapper.find(SearchImages).length).toEqual(1);
});
it("Shows a SearchImages component", () => {
  expect(wrapper.find(Footer).length).toEqual(1);
});
