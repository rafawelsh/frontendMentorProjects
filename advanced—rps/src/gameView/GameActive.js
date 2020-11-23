import React from "react";
import styled from "styled-components";
import GameHands from "./GameHands";
import GameResults from "./GameResults";

const StyledGameboardActive = styled.div`
	text-align: center;

	.hands {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"a b"
			"c c";
		justify-content: center;
		align-items: center;
	}
	.hand-active {
		padding: 2rem;
		align-self: center;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		p {
			font-size: 1.5rem;
			color: white;
			font-weight: 700;
		}
	}
	.user {
		grid-area: a;
	}
	.computer {
		grid-area: b;
	}
	.results {
		grid-area: c;
		grid-column: 1 / 3;
	}

	@media only screen and (min-width: 600px) {
		.hands {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-areas: "a c b";
		}
		.hand-active {
			flex-direction: column-reverse;
			p {
				font-size: 1rem;
				color: white;
				font-weight: 700;
			}
			& div {
				height: 150px;
				width: 150px;
			}
		}
		.results {
			grid-column: auto;
		}
	}
`;

export default function GameActive({
	userHand,
	computerHand,
	restartGame,
	gameResults,
}) {
	function handleClick() {
		restartGame();
	}
	return (
		<StyledGameboardActive className='active-board'>
			<div className='hands'>
				<div className='hand-active user'>
					<GameHands handOptions={userHand} onClick={handleClick} />
					<p>YOU PICKED</p>
				</div>
				<div className='hand-active computer'>
					<GameHands handOptions={computerHand} onClick={handleClick} />
					<p>THE HOUSE PICKED</p>
				</div>
				<div className='results'>
					<GameResults gameResults={gameResults} onClick={handleClick} />
				</div>
			</div>
		</StyledGameboardActive>
	);
}
