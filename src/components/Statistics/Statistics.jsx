import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const HeaderPart = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Statistics = ({ onStateGood, onStateNeutral, onStateBad }) => (
  <Box>
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
        <samp>{onStateGood}</samp>
      </p>
      <p>
        Neutral:
        <samp>{onStateNeutral}</samp>
      </p>
      <p>
        Bad:
        <samp>{onStateBad}</samp>
      </p>
    </Box>
  </Box>
);

export default Statistics;
