import React from "react";
import MoveSection from "../MoveSection";
import { shallow } from "enzyme";

function renderMoveSection(args) {
	const defaultProps = {
		current: 0,
		goBack: () => {},
		moves: [],
		goForward: () => {},
		isOutOfMoves: false
	};

	const props = { ...defaultProps, ...args };
	return shallow(<MoveSection {...props} />);
}

it("should render button with text 'Start'", () => {
	const wrapper = renderMoveSection();
	expect(wrapper.find(".control-menu").text()).toBe("Start");
});

it("should render button with text 'Move #1'", () => {
	const wrapper = renderMoveSection({ current: 1 });
	expect(wrapper.find(".control-menu").text()).toBe("Move #1");
});

it("should render button with text 'End'", () => {
	const wrapper = renderMoveSection({ current: 9, isOutOfMoves: true });
	expect(wrapper.find(".control-menu").text()).toBe("End");
});
