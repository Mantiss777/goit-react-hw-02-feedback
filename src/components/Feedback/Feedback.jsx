import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const Header = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Feedback = ({ onAddGood, onAddNeutral, onAddBad }) => (
  <Box>
    <Box display="flex" justifyContent="center" mt={2} as="section">
      <Header>Please leave feedback</Header>
    </Box>

    <Box display="flex" justifyContent="center" gap="20px" as="section">
      <button type="button" onClick={onAddGood}>
        Good
      </button>
      <button type="button" onClick={onAddNeutral}>
        Netral
      </button>
      <button type="button" onClick={onAddBad}>
        Bad
      </button>
    </Box>
  </Box>
);

export default Feedback;
