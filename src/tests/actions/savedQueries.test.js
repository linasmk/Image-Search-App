import { addSavedQuery, removeSavedQuery } from "../../actions/savedQueries";

it("sets up removeSavedQuery action object", () => {
  const action = removeSavedQuery({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_SAVED_QUERY",
    id: "123",
  });
});

it("sets up addSavedQuery action object with provided values", () => {
  const savedQueryData = {
    name: "Horse",
  };
  const action = addSavedQuery(savedQueryData);
  expect(action).toEqual({
    type: "ADD_SAVED_QUERY",
    savedQuery: {
      ...savedQueryData,
      id: expect.any(String),
    },
  });
});

it("sets up addSavedQuery action object without provided values", () => {
  const action = addSavedQuery();
  expect(action).toEqual({
    type: "ADD_SAVED_QUERY",
    savedQuery: {
      id: expect.any(String),
      name: "",
    },
  });
});
