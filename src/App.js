import React, { Component } from 'react';

import './App.css';

import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';

import { FEEDBACK_OPTIONS } from './data/constans';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addHandlerFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return ((good / total) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <div className="Feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.addHandlerFeedback}
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
  }
}

export default App;
