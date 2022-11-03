import React from 'react';
import { Box } from '../Box';

const FeedbackOptions = ({ onAddGood, onAddNeutral, onAddBad }) => (
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
);

export default FeedbackOptions;
