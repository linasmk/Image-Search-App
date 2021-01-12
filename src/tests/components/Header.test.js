/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import Header from "@comp/Header";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});
it("renders Header component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("has HTML header element", () => {
  expect(wrapper.find("header").length).toEqual(1);
});

it("has HTML h1 element", () => {
  expect(wrapper.find("h1").length).toEqual(1);
});
