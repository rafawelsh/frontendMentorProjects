import React, { useState, useContext } from "react";
import styled from "styled-components";
import GameHands from "./GameHands";
import GameResults from "./GameResults";
import { ScoreContext } from "../App";

const StyledGameboardWrapper = styled.div`
	min-height: 65vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledGameboardWaiting = styled.div`
	height: 100%;
	background-image: url("./images/bg-pentagon.svg");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	width: 300px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(6, 0.75rem);
	grid-template-rows: 6rem 7rem 9rem;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
	grid-gap: 1rem 1.75rem;

	& div:first-child {
		grid-column: span 7;
	}
	& div:nth-child(2) {
		grid-column: 2 / 3;
	}
	& div:nth-child(3) {
		grid-column: 7 / end;
	}
	& div:nth-child(4) {
		grid-column: 2 / 4;
	}
	& div:nth-child(5) {
		grid-column: 6 / end;
	}
`;

const StyledGameboardActive = styled.div`
	text-align: center;
	.hands {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.hand-active {
		padding: 2rem;
	}
`;

const handOptions = [
	{
		id: 1,
		name: "scissors",
		base: "#eca81e",
		border: "#c76c14",
		losesTo: [5, 2],
	},
	{ id: 2, name: "spock", base: "#40b9ce", border: "#52bed1", losesTo: [3, 4] },
	{ id: 3, name: "paper", base: "#516ef4", border: "#2543c3", losesTo: [1, 4] },
	{
		id: 4,
		name: "lizard",
		base: "#ec9e0e",
		border: "#eca922",
		losesTo: [5, 1],
	},
	{ id: 5, name: "rock", base: "#de3a5a", border: "#980e31", losesTo: [3, 2] },
];

export default function GameBoard() {
	const [activeGame, setActiveGame] = useState(false);
	const [userHand, setUserHand] = useState(null);
	const [computerHand, setComputerHand] = useState(null);
	const [gameResults, setGameResults] = useState(null);
	const { score, setScore } = useContext(ScoreContext);

	function restartGame() {
		setActiveGame(false);
		setUserHand(null);
		setComputerHand(null);
	}

	function userChoice(choice) {
		setActiveGame(true);

		const chosenHand = handOptions.find((c) => c.id === choice);
		const randomHand =
			handOptions[Math.floor(Math.random() * handOptions.length)];

		setUserHand(chosenHand);
		setComputerHand(randomHand);

		//game logic to decide winner
		if (chosenHand.losesTo.includes(randomHand.id)) {
			setGameResults("lose");
			setScore(0);
			console.log("You lost!");
		} else if (randomHand.losesTo.includes(chosenHand.id)) {
			setGameResults("win");
			setScore((score) => score + 1);
			console.log("You won!");
		} else if (chosenHand.id === randomHand.id) {
			setGameResults("draw");
			console.log("There was a tie");
		}
	}

	return (
		<StyledGameboardWrapper className='gameboard'>
			{!activeGame ? (
				<StyledGameboardWaiting className='waiting-board'>
					<GameHands handOptions={handOptions[0]} onClick={userChoice} />
					<GameHands handOptions={handOptions[1]} onClick={userChoice} />
					<GameHands handOptions={handOptions[2]} onClick={userChoice} />
					<GameHands handOptions={handOptions[3]} onClick={userChoice} />
					<GameHands handOptions={handOptions[4]} onClick={userChoice} />
				</StyledGameboardWaiting>
			) : (
				<StyledGameboardActive className='active-board'>
					<div className='hands'>
						<div className='hand-active'>
							<GameHands handOptions={userHand} onClick={userChoice} />
							<p>YOU PICKED</p>
						</div>
						<div className='hand-active'>
							<GameHands handOptions={computerHand} onClick={userChoice} />
							<p>THE HOUSE PICKED</p>
						</div>
					</div>
					<GameResults gameResults={gameResults} onClick={restartGame} />
				</StyledGameboardActive>
			)}
		</StyledGameboardWrapper>
	);
}
