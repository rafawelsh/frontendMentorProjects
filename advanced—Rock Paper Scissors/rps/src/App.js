import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import ScoreCard from './ScoreCard';
import HandsList from './HandsList';
import Rules from './Rules';

const AppStyled = styled.div `
  * {
    
    box-sizing: border-box;
  }
  font-family: 'Barlow Semi Condensed', sans-serif;
  background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
  color: white;
  .app-content {
    min-height: 100vh;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 12,
      hands: [
        {name:"paper", imgSrc:"./images/icon-paper.svg"},
        {name:"scissors", imgSrc:"./images/icon-scissors.svg"},
        {name:"rock", imgSrc:"./images/icon-rock.svg"}
      ]
    }
  }
  render() {
    return (
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <ScoreCard score={this.state.score}/>
            <HandsList hands={this.state.hands}/>
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    );
    }
}

export default App;
