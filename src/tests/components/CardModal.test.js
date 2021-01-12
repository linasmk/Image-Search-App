/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import CardModal from "@comp/CardModal";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<CardModal />);
});

it("renders CardModal component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
