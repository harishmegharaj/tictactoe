import React from "react";
import StartGame from "../StartGame";
import { shallow } from "enzyme";

function renderStartGame(args) {
	const defaultProps = {
		gameStatus: null,
		onClick: () => {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<StartGame {...props} />);
}

it("should display message 'Draw'", () => {
	const wrapper = renderStartGame({ gameStatus: "Draw" });
	expect(wrapper.find(".message").text()).toBe("Draw");
});

it("should display message 'The winner is X'", () => {
	const wrapper = renderStartGame({ gameStatus: "X" });
	expect(wrapper.find(".message").text()).toBe("The winner is X");
});

it("should display message 'The winner is O'", () => {
	const wrapper = renderStartGame({ gameStatus: "O" });
	expect(wrapper.find(".message").text()).toBe("The winner is O");
});

it("should render button", () => {
	const wrapper = renderStartGame({ gameStatus: "X" });
	expect(wrapper.find("button").length).toBe(1);
});
