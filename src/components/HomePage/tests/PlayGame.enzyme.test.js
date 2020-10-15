import React from 'react';
import PlayGame from '../PlayGame';
import {mount} from 'enzyme';

function renderGame() {
    return mount(<PlayGame/>);
}

it("should render MoveSection and Board without PlayAgain component", () => {
	const wrapper = renderGame();
	expect(wrapper.find("MoveSection").length).toBe(1);
	expect(wrapper.find("BoxesLay").length).toBe(1);
	expect(wrapper.find("StartGame").length).toBe(0);
});