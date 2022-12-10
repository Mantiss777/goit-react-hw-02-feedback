import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const onClickBtn = feedbackType => () => {
    onLeaveFeedback(feedbackType);
  };

  return (
    <ul className={css.container}>
      {Object.keys(options).map(feedbackType => {
        return (
          <li key={feedbackType}>
            <button className={css.btn} onClick={onClickBtn(feedbackType)}>
              {feedbackType}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
