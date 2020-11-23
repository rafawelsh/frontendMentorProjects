import React, { useContext } from "react";
import styled from "styled-components";
import { ScoreContext } from "../App";

const StyledScoreCount = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	color: hsl(229, 25%, 31%);
	padding: 0.25rem 1rem;
	margin: 0.25rem 0.75rem;
	border-radius: 0.25rem;
	h3 {
		font-size: 0.75rem;
		font-weight: 700;
		margin: 0rem;
		color: hsl(229, 64%, 46%);
	}
	p {
		margin: 0;
		font-size: 2rem;
		color: hsl(229, 25%, 31%);
	}
`;
export default function ScoreCount() {
	const { score } = useContext(ScoreContext);
	return (
		<StyledScoreCount>
			<h3>Score</h3>
			<p>{score}</p>
		</StyledScoreCount>
	);
}
