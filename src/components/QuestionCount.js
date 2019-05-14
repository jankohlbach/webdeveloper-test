import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      <p>Question <span>{props.counter}</span> of <span>{props.total}</span></p>
      <p>Current points: {props.points}</p>
    </div>
  )
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
};

export default QuestionCount;
