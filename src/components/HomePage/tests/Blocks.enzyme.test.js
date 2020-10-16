import React from "react";
import Blocks from "../Blocks";
import { shallow } from "enzyme";

function renderBlocks(args) {
	const defaultProps = {
		onClick: () => {},
		value: null
	};

	const props = { ...defaultProps, ...args };
	return shallow(<Blocks {...props} />);
}

it("should render empty button", () => {
	const wrapper = renderBlocks();
	expect(wrapper.find("button").text()).toEqual("");
});

it("should render button with text 'X'", () => {
	const wrapper = renderBlocks({ value: "X" });
	expect(wrapper.find("button").text()).toEqual("X");
});

it("should render button with text 'O'", () => {
	const wrapper = renderBlocks({ value: "O" });
	expect(wrapper.find("button").text()).toEqual("O");
});
