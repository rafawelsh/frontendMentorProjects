import React from 'react'
import styled from 'styled-components';

const RulesStyled = styled.div `
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    p {
        text-align: center;
        border: 1px solid white;
        min-width: 128px;
        padding: .7rem;
        border-radius: .5rem;
    }
    .rules-overlay {
        background: white;
        position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            color: black;
            text-transform: uppercase;
        }
        .rules-img {
            padding: 5rem 0;
        }
    }
`;



class Rules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.handleReaveal = this.handleReveal.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleReveal() {
        this.setState({visible: true})
    }
    handleRemove() {
        this.setState({viisble: false})
    }

    
    render() {
        const visible = this.state.visible;
        let button
        if (visible) {
            button = (
            <div className="rules-overlay">
                <h2>Rules</h2>
                <img src="./images/image-rules.svg" alt="rules of the game" className="rules-img" />
                <img onClick={this.handleRemove} src="./images/icon-close.svg" alt="close menu" />
            </div>
            )
        }  else {   
            button = (         
            <p onClick={this.handleReveal}>Rules</p>
            )
        }   
        return (
            <RulesStyled id="rules" visible={visible}>
                {button}
            </RulesStyled>
        )
    }
}

export default Rules
