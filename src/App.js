import { useState } from 'react';

import './App.css';

import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';

import { FEEDBACK_OPTIONS } from './data/constans';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addHandlerFeedback = ({ target }) => {
    //от event, потому-что на onClick
    const { feedback } = target.dataset;
    if (feedback === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (feedback === 'bad') {
      setBad(prevState => prevState + 1);
    }
    if (feedback === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / total) * 100).toFixed();
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className="Feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={FEEDBACK_OPTIONS}
          onLeaveFeedback={addHandlerFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      </Section>
    </div>
  );
};

export default App;
