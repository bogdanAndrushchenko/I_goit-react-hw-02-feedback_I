import React, { Component } from 'react';

import './App.css';

import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((this.state.good * 100) / total).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="Feedback">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onAddGood={this.addGoodFeedback}
            onAddNeutral={this.addNeutralFeedback}
            onAddBad={this.addBadFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
