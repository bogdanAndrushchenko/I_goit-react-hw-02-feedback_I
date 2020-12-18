import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
      className={s.Button}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
      key={option + 1}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
