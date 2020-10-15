import React from 'react';
import PlayGame from './PlayGame';

const HomePage = () => {
	const [gameId, setGameId] = React.useState(1);

	return (
		<>
			<PlayGame
				key={gameId}
				startNewGame={() => setGameId(gameId + 1)} />

		</>
	)
}

export default HomePage;