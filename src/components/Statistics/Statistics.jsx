import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
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
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
