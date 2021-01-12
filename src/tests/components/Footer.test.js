/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import Footer from "@comp/Footer";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

it("renders Footer component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("has HTML footer element", () => {
  expect(wrapper.find("footer").length).toEqual(1);
});

it("has HTML h4 element", () => {
  expect(wrapper.find("h4").length).toEqual(1);
});
