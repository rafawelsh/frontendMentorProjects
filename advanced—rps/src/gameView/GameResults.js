import React from "react";

export default function GameResults({ gameResults, onClick }) {
	function handleClick() {
		onClick();
	}

	return (
		<div>
			<p>You {gameResults} !</p>
			<button onClick={handleClick}>Play Again</button>
		</div>
	);
}
