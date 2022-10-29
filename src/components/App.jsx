import { Component } from 'react';
import styled from 'styled-components';
import { AiFillLike, AiFillMeh, AiFillDislike } from 'react-icons/ai';
import { Button } from './Button';
import { Box } from './Box';

const Header = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;
const HeaderPart = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export class App extends Component {
  state = {
    good: 5,
    neutral: 3,
    bad: 4,
  };

  addGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.value + 1,
      };
    });
    //  this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  addNeutral = () => {
    //  this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  addBad = () => {
    //  this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <Box position="relative" as="main">
        <Box display="flex" justifyContent="center" mt={2} as="section">
          <Header>Please leave feedback</Header>
        </Box>

        <Box display="flex" justifyContent="center" gap="20px" as="section">
          <Button icon={AiFillLike} onClick={this.addGood}>
            Good
          </Button>
          <Button icon={AiFillMeh} onClick={this.addNeutral}>
            Netral
          </Button>
          <Button icon={AiFillDislike} onClick={this.addBad}>
            Bad
          </Button>
        </Box>
        <Box display="flex" justifyContent="center">
          <HeaderPart>Statistics</HeaderPart>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          as="section"
        >
          <p>
            Good:
            <samp>{this.state.good}</samp>
          </p>
          <p>
            Neutral:
            <samp>{this.state.neutral}</samp>
          </p>
          <p>
            Bad:
            <samp>{this.state.bad}</samp>
          </p>
        </Box>
      </Box>
    );
  }
}

// export const App = () => {
//   return (
//     <Box position="relative" as="main">
//       <Box display="flex" justifyContent="center" mt={2} as="section">
//         <Header>Please leave feedback</Header>
//       </Box>

//       <Box display="flex" justifyContent="center" gap="20px" as="section">
//         <Button icon={AiFillLike}>Good</Button>
//         <Button icon={AiFillMeh}>Netral</Button>
//         <Button icon={AiFillDislike}>Bad</Button>
//       </Box>
//       <Box display="flex" justifyContent="center">
//         <HeaderPart>Statistics</HeaderPart>
//       </Box>
//     </Box>
//   );
// };
