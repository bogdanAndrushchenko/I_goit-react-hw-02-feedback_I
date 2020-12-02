import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={s.Statistic__item}>
        Good: <span className={s.Item__value}>{good}</span>
      </p>
      <p className={s.Statistic__item}>
        Neutral: <span className={s.Item__value}>{neutral}</span>
      </p>
      <p className={s.Statistic__item}>
        Bad: <span className={s.Item__value}>{bad}</span>
      </p>
      <p className={s.Statistic__item}>
        Total: <span className={s.Item__value}>{total}</span>
      </p>
      <p className={s.Statistic__item}>
        Positive feedback:
        <span className={s.Item__value}>
          {' '}
          {positivePercentage === +0 ? '0' : positivePercentage} %
        </span>
      </p>
    </div>
  );
};
export default Statistics;
