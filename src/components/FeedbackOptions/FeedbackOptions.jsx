import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback, state }) {
  return (
    <div className={s.buttonsSet}>
      {Object.keys(state).map(item => (
        <button
          className={s.button}
          type="button"
          name={item}
          key={item}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  state: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
