import React from 'react'
import styled from 'styled-components'

const HandStyled = styled.div`
    /* centering the rock hand */
    &:nth-child(3) {
        grid-column: span 2;
    }
    width: 125px;
    height: 125px;
    border: 16px solid ${(props) => props.color.base};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 5px 0 ${(props) => props.color.border};
    cursor: pointer;
    &:active {
        transform: scale(.9);
    }
    .box {
        box-shadow: 0 -3px 0 #BABFD4;
        flex: 1;
        align-self: stretch;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const colors = {
    rock: {
        base: '#de3a5a',
        border: '#980e31',
    },
    paper: {
        base: '#516ef4',
        border: '#2543c3',
    },
    scissors: {
        base: '#eca81e',
        border: '#c76c14'
    }

}

class Hand extends React.Component{
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log(this.props.hand.name)
    }
    render() {
        return (
            <HandStyled color={colors[this.props.hand.name]} onClick={this.handleClick} >
                <div className="box">
                    <img src={this.props.hand.imgSrc} alt="" />
                </div>
            </HandStyled>
        )
    }
}

export default Hand