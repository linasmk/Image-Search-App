/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import { SavedQueries } from "@comp/SavedQueries";
import savedQueries from "@tests/fixtures/queries";
/* ========= Code ============= */

it("renders SavedQueryItem component with SavedQueries array correctly", () => {
  const wrapper = shallow(<SavedQueries savedQueries={savedQueries} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders SavedQueryItem component with empty SavedQueries array correctly", () => {
  const wrapper = shallow(<SavedQueries savedQueries={[]} />);
  expect(wrapper).toMatchSnapshot();
});
