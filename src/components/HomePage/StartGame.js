import React from "react";
import PropTypes from "prop-types";

const StartGame = props => (
	<div className="game-done">
		<div className="message">
			{props.gameStatus !== "Draw"
				? `The winner is ${props.gameStatus}`
				: "Draw"}
		</div>
		<button onClick={props.onClick}>Start New</button>
	</div>
);

StartGame.propTypes = {
	gameStatus: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default StartGame;
