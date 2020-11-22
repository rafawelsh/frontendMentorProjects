import React, { useState } from "react";
import styled from "styled-components";

const StyledRules = styled.div`
	min-height: 10vh;
	text-align: center;
	button {
		cursor: pointer;
		outline: none;
		color: white;
		background-color: transparent;
		padding: 0.75rem 2rem;
		border: 2px solid hsl(217, 16%, 45%);
		border-radius: 0.5rem;
	}

	@media only screen and (min-width: 600px) {
		display: flex;
		justify-content: flex-end;
		align-content: flex-end;
		button {
			padding: 0.25rem 1.5rem;
			margin: 0 2rem 1.25rem 0;
		}
	}
`;

const StyledDiagram = styled.div`
	background-color: white;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	z-index: 10;

	h2 {
		margin-bottom: 2rem;
		font-size: 2rem;
		color: hsl(217, 16%, 45%);
		grid-area: a;
	}
	img {
		grid-area: c;
	}
	button {
		outline: none;
		margin-top: 4rem;
		cursor: pointer;
		color: #b5b9c9;
		background-color: transparent;
		border: none;
		font-size: 2rem;
		padding: 1rem 2rem;
		grid-area: b;
	}

	@media only screen and (min-width: 600px) {
		margin: 10% auto;
		top: -5%;
		display: grid;
		grid-template-areas:
			"a b"
			"c c";
		width: 400px;
		height: 450px;
		/* border: 1px solid white; */
		border-radius: 0.5rem;
		h2 {
			margin: 0;
		}
		button {
			padding: 0.25rem;
			margin: 0;
			justify-self: end;
		}
	}
`;

export default function Rules() {
	const [showRules, setShowRules] = useState(false);
	return (
		<div>
			{!showRules ? (
				<StyledRules>
					<button onClick={() => setShowRules(true)}>RULES</button>
				</StyledRules>
			) : (
				<StyledDiagram>
					<h2>RULES</h2>
					<img
						src='./images/image-rules-bonus.svg'
						alt='Here are the rules of the game.'
					/>
					<button onClick={() => setShowRules(false)}>X</button>
				</StyledDiagram>
			)}
		</div>
	);
}
