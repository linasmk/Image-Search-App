/* ========= Dependencies ============= */
import { ADD_SAVED_QUERY } from "@consts/constants";
import savedQueriesReducer from "@reducers/savedQueriesReducer";
/* ========= Code ============= */
describe("ADD_SAVED_QUERY", () => {
  let action;
  beforeEach(() => {
    action = {
      type: ADD_SAVED_QUERY,
      savedQuery: { id: "1", name: "Lemon" }
    };
  });

  it("handles actions of type: ADD_SAVED_QUERY", () => {
    const newState = savedQueriesReducer([], action);
    expect(newState).toEqual([{ id: "1", name: "Lemon" }]);
  });

  it("handles actions of type: ADD_SAVED_QUERY with duplicate value", () => {
    const duplicateState = savedQueriesReducer(
      [{ id: "1", name: "Lemon" }],
      action
    );
    expect(duplicateState).toEqual([{ id: "1", name: "Lemon" }]);
  });
});

it("handles actions with unknown type", () => {
  const newState = savedQueriesReducer([], {});
  expect(newState).toEqual([]);
});
