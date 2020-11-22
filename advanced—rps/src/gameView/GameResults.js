import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
	p {
		font-size: 2rem;
		color: white;
		font-weight: 700;
		text-transform: uppercase;
	}
	button {
		outline: none;
		color: hsl(217, 16%, 45%);
		cursor: pointer;
		color: #b5b9c9;
		background-color: white;
		border: none;
		border-radius: 0.5rem;
		font-size: 0.75rem;
		padding: 1rem 2rem;
		text-transform: uppercase;
	}
`;

export default function GameResults({ gameResults, onClick }) {
	function handleClick() {
		onClick();
	}

	return (
		<StyledMessage>
			<p>You {gameResults} !</p>
			<button onClick={handleClick}>Play Again</button>
		</StyledMessage>
	);
}
