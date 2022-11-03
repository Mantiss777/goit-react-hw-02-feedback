import React from 'react';
// import styled from 'styled-components';
// import { AiFillLike, AiFillMeh, AiFillDislike } from 'react-icons/ai';
// import { Button } from './Button';
import { Box } from './Box';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  addNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  addBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <Box position="relative" as="main">
        <Feedback
          onAddGood={this.addGood}
          onAddNeutral={this.addNeutral}
          onAddBad={this.addBad}
        />
        <Statistics
          onStateGood={this.state.good}
          onStateNeutral={this.state.neutral}
          onStateBad={this.state.bad}
        />
      </Box>
    );
  }
}
