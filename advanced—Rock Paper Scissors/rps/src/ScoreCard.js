import React from 'react';
import styled from 'styled-components';

const ScoreCardStyled = styled.div `
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, .29);
    border-radius: .5em;
    font-weight: 700;
    h1 {
        font-size: 1.25em;
        text-transform: uppercase;
        line-height: 16px;
    }
    .score-card {
        background: white;
        text-align: center;
        padding: .5em 1.25em;
        border-radius: .25em;
        small {
            color: #2A45C2;
            text-transform: uppercase;
            font-size: 0.75em;
        }
        p {
            margin: 0;
            color: #565468;
            font-size: 2em;
        }
    }
`;

class ScoreCard extends React.Component {
    render() {
        return (
                <ScoreCardStyled>
                    <div>
                        <h1>
                        Rock<br />Paper<br />Scissors
                        </h1>
                    </div>
                    <div className="score-card">
                        <small>Score</small>
                        <p>{this.props.score}</p>
                    </div>
                </ScoreCardStyled>
        )
    }
}

export default ScoreCard