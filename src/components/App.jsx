import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = pressedBtn => {
    this.setState(prevState => {
      const value = prevState[pressedBtn] + 1;
      return { ...prevState, [pressedBtn]: value };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? ((this.state.good / total) * 100).toFixed(0) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div
        style={{
          width: '500px',
          height: '100vh',
          flexDirection: 'column',
          display: 'flex',
          padding: '20px',
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
