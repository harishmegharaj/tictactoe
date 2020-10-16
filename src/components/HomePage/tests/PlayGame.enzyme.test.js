import React from 'react';
import PlayGame from '../PlayGame';
import {mount} from 'enzyme';

function renderGame() {
    return mount(<PlayGame/>);
}

it("should render MoveSection and BoxesLay without StartGame component", () => {
	const wrapper = renderGame();
	expect(wrapper.find("MoveSection").length).toBe(1);
	expect(wrapper.find("BoxesLay").length).toBe(1);
	expect(wrapper.find("StartGame").length).toBe(0);
});


it("clicked Blocks should have text 'X'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Blocks");
	squares.at(0).simulate("click");
	expect(squares.at(0).text()).toBe("X");
});

it("clicked Blocks should have text 'O'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Blocks");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	expect(squares.at(1).text()).toBe("O");
});

it("button should have text 'Move #3'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Blocks");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(2).simulate("click");
	expect(wrapper.find(".control-menu").text()).toBe("Move #3");
});

it("button should have text 'Move #2' and Square[2] should be '' after click on left arrow", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Blocks");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(2).simulate("click");

	expect(squares.at(2).text()).toBe("X");
	wrapper.find(".arrow-left").simulate("click");
	// expect(wrapper.find(".control-menu").text()).toBe("Move #2");
	expect(squares.at(2).text()).toBe("");
});

it("Board should not render, Start New should render, the message should be 'The winner is X', button Play Again should render", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Blocks");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(4).simulate("click");
	squares.at(2).simulate("click");
	squares.at(8).simulate("click");

	expect(wrapper.find("Board").length).toBe(0);
	expect(wrapper.find("StartGame").length).toBe(1);
	expect(wrapper.find(".message").text()).toBe("The winner is X");
	expect(wrapper.find("StartGame button").text()).toBe("Start New");
});
