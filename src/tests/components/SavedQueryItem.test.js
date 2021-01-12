/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
import queries from "@tests/fixtures/queries";
import { SavedQueryItem } from "@comp/SavedQueryItem";

/* ========= Code ============= */
let wrapper, removeSavedQuery, onClick;

beforeEach(() => {
  removeSavedQuery = jest.fn();
  onClick = jest.fn();
  wrapper = shallow(
    <SavedQueryItem
      id={queries[0].id}
      name={queries[0].name}
      removeSavedQuery={removeSavedQuery}
      onClick={onClick}
    />
  );
});

it("renders SavedQueryItem component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

// it("handles handleChildQuery correctly", () => {
//   wrapper.find("p").simulate("click", onClick("name"));
//   wrapper.update();
//   expect(wrapper.find("p").prop("onClick")).toEqual("dog");
// });

// it("handles removeSavedQuery", () => {
//   expect(
//     wrapper.find("button").simulate("click").prop("removeSavedQuery")(
//       queries[0].id
//     )
//   ).toEqual(1);
// });
