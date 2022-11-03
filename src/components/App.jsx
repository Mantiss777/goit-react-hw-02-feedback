import React from 'react';
// import styled from 'styled-components';
// import { AiFillLike, AiFillMeh, AiFillDislike } from 'react-icons/ai';
// import { Button } from './Button';
import { Box } from './Box';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    visible: false,
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedbeck: 0,
  };

  addGood = () => {
    //  console.log('positiveFeedbeck', this.state.positiveFeedbeck);
    //  console.log('total', this.state.total);
    this.setState({ visible: true });
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.good + 1 + prevState.neutral + prevState.bad,
      positiveFeedbeck: Math.round(
        ((prevState.good + 1) * 100) / (prevState.total + 1)
      ),
    }));
  };
  addNeutral = () => {
    //  console.log('neutral', this.state.neutral);
    //  console.log('total', this.state.total);
    this.setState({ visible: true });
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.good + prevState.neutral + 1 + prevState.bad,
      positiveFeedbeck: Math.round(
        (prevState.good * 100) / (prevState.total + 1)
      ),
    }));
  };
  addBad = () => {
    //  console.log('total', this.state.total);
    this.setState({ visible: true });
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.good + prevState.neutral + prevState.bad + 1,
      positiveFeedbeck: Math.round(
        (prevState.good * 100) / (prevState.total + 1)
      ),
    }));
  };

  render() {
    return (
      <Box position="relative" as="main">
        <Section title="Please leave feedback">Please leave feedback </Section>
        <FeedbackOptions
          onAddGood={this.addGood}
          onAddNeutral={this.addNeutral}
          onAddBad={this.addBad}
        />

        <Section title="Statistics">Statistics </Section>
        {!this.state.visible && (
          <Notification message="There is no feedback">
            There is no feedback
          </Notification>
        )}

        {this.state.visible && (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positiveFeedbeck}
          />
        )}
      </Box>
    );
  }
}
