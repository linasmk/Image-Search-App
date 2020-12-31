/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import { SavedQueryItem } from "../../components/SavedQueryItem";
import savedQueries from "../fixtures/savedQueries";
/* ========= Code ============= */
let wrapper, removeSavedQuery, onClick;

beforeEach(() => {
  removeSavedQuery = jest.fn();
  onClick = jest.fn();
  wrapper = shallow(
    <SavedQueryItem
      id={savedQueries[0].id}
      name={savedQueries[0].name}
      removeSavedQuery={removeSavedQuery}
      onClick={onClick}
    />,
  );
});

it("renders SavedQueryItem correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("handles removeSavedQuery", () => {
  wrapper.find("button").simulate("click").prop("onClick")(savedQueries[0].id);
});
