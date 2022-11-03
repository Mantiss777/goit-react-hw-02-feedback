import React from 'react';
import { Box } from '../Box';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    as="section"
  >
    <p>
      Good:
      <samp>{good}</samp>
    </p>
    <p>
      Neutral:
      <samp>{neutral}</samp>
    </p>
    <p>
      Bad:
      <samp>{bad}</samp>
    </p>
    <p>
      Total:
      <samp>{total}</samp>
    </p>
    <p>
      Positive feedbeck:
      <samp>{positivePercentage}%</samp>
    </p>
  </Box>
);

export default Statistics;
