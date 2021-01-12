import { addSavedQuery, removeSavedQuery } from "@actions/savedQueries";
import { ADD_SAVED_QUERY, REMOVE_SAVED_QUERY } from "@consts/constants";

describe("removeSavedQuery", () => {
  it("sets up removeSavedQuery action with provided values", () => {
    const action = removeSavedQuery({ id: "123" });
    expect(action).toEqual({
      type: REMOVE_SAVED_QUERY,
      id: "123"
    });
  });

  it("sets up removeSavedQuery empty action without provided values", () => {
    const action = removeSavedQuery({});
    expect(action).toEqual({
      type: REMOVE_SAVED_QUERY
    });
  });
});

describe("addSavedQuery", () => {
  it("sets up addSavedQuery action object with provided values", () => {
    const savedQueryData = {
      name: "Horse"
    };
    const action = addSavedQuery(savedQueryData);
    expect(action).toEqual({
      type: ADD_SAVED_QUERY,
      savedQuery: {
        ...savedQueryData,
        id: expect.any(String)
      }
    });
  });

  it("sets up addSavedQuery action object without provided values", () => {
    const action = addSavedQuery();
    expect(action).toEqual({
      type: ADD_SAVED_QUERY,
      savedQuery: {
        id: expect.any(String),
        name: ""
      }
    });
  });
});
