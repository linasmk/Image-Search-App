/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import SearchImages from "../../components/SearchImages";
import { SavedQueries } from "../../containers/SavedQueries";
/* ========= Code ============= */
let wrapper;

beforeEach(() => {
  wrapper = shallow(<SearchImages />);
});

it("Shows a SavedQueries component", () => {
  expect(wrapper.find(SavedQueries).length).toEqual(1);
});
