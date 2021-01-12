/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========= Components ============= */
import { SavedQueries } from "@cont/SavedQueries";
import { Cards } from "@comp/Cards";

import SearchImages from "@comp/SearchImages";

/* ========= Code ============= */
let wrapper, addSavedQuery;

beforeEach(() => {
  addSavedQuery = jest.fn();
  wrapper = shallow(<SearchImages addSavedQuery={addSavedQuery} />);
});

it("renders SearchImages component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

it("shows a form HTML element", () => {
  expect(wrapper.find("form").length).toEqual(1);
});

it("shows a SavedQueries component", () => {
  expect(wrapper.find(SavedQueries).length).toEqual(1);
});

it("shows a Cards component", () => {
  expect(wrapper.find(Cards).length).toEqual(1);
});

it("has a input field that users can type in", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "query" }
  });
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("query");
});

it("when form is submitted, input field retains the value", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "query" }
  });
  wrapper.update();
  wrapper.find("form").simulate("submit");
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("query");
});

// it("clears input field with 'search-form__btn--clear' button", () => {
//   wrapper.find("input").simulate("change", {
//     target: { value: "query" }
//   });
//   wrapper.update();
//   expect(wrapper.find("input").prop("value")).toEqual("query");
//   wrapper
//     .find("button")
//     .at(0)
//     .simulate("click", {
//       target: { value: "" }
//     });
//   expect(wrapper.find("input").prop("value")).toEqual("");
//   wrapper.find("input").simulate("focus");
// });
