import React from "react";
import styled from "styled-components";

const StyledGameHands = styled.div`
	margin: 0 auto;
	background-color: white;
	border: 10px solid ${(props) => props.base};
	border-radius: 50%;
	box-shadow: 0 5px 0 ${(props) => props.border};
	height: 80px;
	width: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 60%;
	}
	&:active {
		transform: scale(0.9);
	}
`;

export default function GameHands({ handOptions, onClick }) {
	const { id, name, base, border } = handOptions;

	function handleClick() {
		onClick(id);
	}

	return (
		<StyledGameHands base={base} border={border} onClick={handleClick}>
			<img src={`./images/icon-${name}.svg`} alt={`${name} Hand`} />
		</StyledGameHands>
	);
}
