import React from "react";
import BoxesLay from "../BoxesLay";
import { mount } from "enzyme";

function renderBoxesLay(args) {
	const defaultProps = {
		squares: Array(9).fill("null"),
		onClick: () => {}
	};

	const props = { ...defaultProps, ...args };
	return mount(<BoxesLay {...props} />);
}

it("should render 9 empty squares", () => {
	const wrapper = renderBoxesLay();
	expect(wrapper.find("Blocks").length).toBe(9);
});
