import React from "react";
import styled from "styled-components";
import ScoreCount from "./ScoreCount";

const StyledScoreboard = styled.div`
	min-height: 10vh;
	width: 100%;
	max-width: 650px;
	margin: 2rem 0rem auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 2px solid hsl(217, 16%, 45%);
	border-radius: 0.5rem;
	color: white;

	img {
		width: 3rem;
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
