import React from "react";
import { mount } from "enzyme";
import Root from "@tests/Root";
import SavedQueryItem, { mapDispatchToProps } from "@cont/SavedQueryItem";
import queries from "@tests/fixtures/queries";

describe("SavedQueryItem container", () => {
  it("renders SavedQueryItem container correctly", () => {
    const wrapper = mount(
      <Root>
        <SavedQueryItem
          removeSavedQuery={jest.fn()}
          onClick={jest.fn()}
          name="dog"
          id="1"
        />
      </Root>
    );
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
  describe("mapDispatchToProps", () => {
    it("should map dispatch to props correctly", () => {
      const query = queries[0].id;
      const queryId = "1";
      const removeSavedQuery = jest.fn();
      mapDispatchToProps(removeSavedQuery(query));

      expect(removeSavedQuery).toHaveBeenLastCalledWith(queryId);
      expect(removeSavedQuery).toHaveBeenCalledTimes(1);
    });
  });
});
