import React from 'react';
import styled from 'styled-components';
import Hand from './Hand'

const HandsStyled = styled.div `
    margin: 2rem 0!important;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    grid-gap: 2rem;
    
`;

class HandsList extends React.Component {
    render() {
        return (
            <HandsStyled>
                {
                    this.props.hands.map(hand => {
                        return <Hand hand={hand} />
                    })
                }
            </HandsStyled>
        )
    }
}

export default HandsList