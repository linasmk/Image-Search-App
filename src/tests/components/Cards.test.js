/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";

/* ========= Components ============= */
import { Cards } from "@comp/Cards";
import images from "@tests/fixtures/images";
/* ========= Code ============= */

it("renders Cards component with images array correctly", () => {
  const wrapper = shallow(<Cards images={images} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders Cards component with with empyt images array correctly", () => {
  const wrapper = shallow(<Cards images={[]} />);
  expect(wrapper).toMatchSnapshot();
});
