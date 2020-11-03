/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import { SavedQueryItem } from "../../components/SavedQueryItem";
import savedQueries from "../fixtures/savedQueries";
/* ========= Code ============= */
let wrapper, removeSavedQuery;

beforeEach(() => {
  removeSavedQuery = jest.fn();
  wrapper = shallow(
    <SavedQueryItem
      {...savedQueries[0]}
      removeSavedQuery={removeSavedQuery}
      savedQuery={savedQueries[0].id}
    />
  );
});

it("renders SavedQueryItem correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("handles removeSavedQuery", () => {
  wrapper.find("button").simulate("click").prop("onClick")(savedQueries[0].id);
});
