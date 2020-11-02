/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import { removeSavedQuery } from "../../actions/savedQueries";
import { SavedQueryItem } from "../../components/SavedQueryItem";
import savedQueries from "../fixtures/savedQueries";
/* ========= Code ============= */

it("renders SavedQueryItem correctly", () => {
  const removeSavedQuery = jest.fn();
  const wrapper = shallow(
    <SavedQueryItem {...savedQueries[0]} removeSavedQuery={removeSavedQuery} />
  );
  expect(wrapper).toMatchSnapshot();
});
