import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import Game from "./Game";

it("renders without breaking", function () {
  shallow(<Game />);
})

it("matches snapshot test", () => {
  let wrapper = shallow(<Game />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot(); 
})

it("freezes die on click", () => {
  let wrapper = mount(<Game />);
  wrapper.find("Die").first().simulate("click");
  expect(wrapper.state().locked).toContain(true);

})

it("stops at three rolls", () => {
  let wrapper = mount(<Game />);
  wrapper.setState({ rollsLeft: 0 });
  wrapper.find(
    "button").last().simulate("click");
  expect(wrapper.state().rollsLeft).toEqual(0);
});