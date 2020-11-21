import React from "react";
import styled from "styled-components";
import ScoreCount from "./ScoreCount";

const StyledScoreboard = styled.div`
	min-height: 10vh;
	margin-top: 2rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid hsl(217, 16%, 45%);
	border-radius: 0.5rem;
	color: white;

	img {
		width: 75px;
		padding: 1rem;
	}
`;

export default function Scoreboard() {
	return (
		<StyledScoreboard>
			<img
				src='./images/logo-bonus.svg'
				alt='Rock Paper Scissors Lizard Spock Logo'
			/>
			<ScoreCount />
		</StyledScoreboard>
	);
}
