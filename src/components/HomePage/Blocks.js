import React from "react";
import PropTypes from "prop-types";

const Blocks = props => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

Blocks.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string
};

export default Blocks;
