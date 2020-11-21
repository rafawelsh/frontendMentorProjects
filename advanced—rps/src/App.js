import React, { useState, createContext } from "react";
import Scoreboard from "./scoreboardView/Scoreboard";
import GameBoard from "./gameView/GameBoard";
import styled from "styled-components";
import Rules from "./Rules";
const StyledApp = styled.div`
	box-sizing: border-box;
	background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
	min-height: 100vh;
`;

const StyledWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 85%;
	max-width: 900px;
`;

export const ScoreContext = createContext();

export default function App() {
	const [score, setScore] = useState(0);
	return (
		<ScoreContext.Provider
			value={{
				score,
				setScore,
			}}
		>
			<StyledApp>
				<StyledWrapper>
					<Scoreboard />
					<GameBoard />
					<Rules />
				</StyledWrapper>
			</StyledApp>
		</ScoreContext.Provider>
	);
}
