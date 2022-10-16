import PropTypes from 'prop-types'
import s from './Statistics.module.css';

export function Statistics({state}){
  
  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return (
      (state.good / countTotalFeedback()) * 100 || 0
    ).toFixed(0);
  };

    return (
      <div className={s.statsList}>
        {Object.keys(state).map(item => (
          <p className={s.item} key={item}>
            {item}:<span>{state[item]}</span>
          </p>
        ))}
        <p>
          Total: <span>{countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedbacks:{' '}
          <span>{countPositiveFeedbackPercentage()}%</span>
        </p>
      </div>
    );
  }
  

Statistics.propTypews = {
  state: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
  }),
};

export default Statistics;
