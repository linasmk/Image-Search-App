/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import { Loader } from "@comp/Loader";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<Loader />);
});

it("renders Loader component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
