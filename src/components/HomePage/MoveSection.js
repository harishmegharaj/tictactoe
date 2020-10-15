import React from "react";
import PropTypes from "prop-types";

const MoveSection = props => {
	const move = props.current ? `Move #${props.current}` : "Start";
	return (
		<div className="control-menu">
			<button onClick={props.goBack}>
				<div className="arrow-left " />
			</button>
			{props.isOutOfMoves ? "End" : move}
		</div>
	);
};

MoveSection.propTypes = {
	current: PropTypes.number.isRequired,
	goBack: PropTypes.func.isRequired,
	moves: PropTypes.array.isRequired,
	isOutOfMoves: PropTypes.bool.isRequired
};

export default MoveSection;
