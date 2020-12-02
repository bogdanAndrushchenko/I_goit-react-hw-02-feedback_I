import Notification from '../Notification';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li className={s.Statistic__item}>
            Good: <span className={s.Item__value}>{good}</span>
          </li>
          <li className={s.Statistic__item}>
            Neutral: <span className={s.Item__value}>{neutral}</span>
          </li>
          <li className={s.Statistic__item}>
            Bad: <span className={s.Item__value}>{bad}</span>
          </li>
          <li className={s.Statistic__item}>
            Total: <span className={s.Item__value}>{total}</span>
          </li>
          <li className={s.Statistic__item}>
            {' '}
            Positive feedback:
            <span className={s.Item__value}> {positiveFeedback} %</span>
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};

export default Statistics;
