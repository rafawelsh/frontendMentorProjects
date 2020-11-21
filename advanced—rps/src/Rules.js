import React, { useState } from "react";
import styled from "styled-components";

const StyledRules = styled.div`
	min-height: 10vh;
	text-align: center;
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

	button {
		margin-top: 4rem;
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
					<img
						src='./images/image-rules-bonus.svg'
						alt='Here are the rules of the game.'
					/>
					<button onClick={() => setShowRules(false)}>Go Back</button>
				</StyledDiagram>
			)}
		</div>
	);
}
