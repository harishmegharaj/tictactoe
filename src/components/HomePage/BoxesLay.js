import React from "react";
import Blocks from "./Blocks";
import PropTypes from "prop-types";

const BoxesLay = props => {
	const sq = props.squares.map((square, index) => (
		<Blocks value={square} key={index} onClick={() => props.onClick(index)} />
	));
	return sq;
};

BoxesLay.propTypes = {
	squares: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
};

export default BoxesLay;
