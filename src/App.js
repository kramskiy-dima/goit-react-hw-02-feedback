import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const feedbackButton = e.target.textContent;
    this.setState((prevState) => {
      return { [feedbackButton]: prevState[feedbackButton] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalValue = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return totalValue;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentage ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalValueFeedback = this.countTotalFeedback();
    const totalValuePercentage = this.countPositiveFeedbackPercentage();
    const feedBackOptionsArr = Object.keys(this.state);
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedBackOptionsArr}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalValueFeedback === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalValueFeedback}
              positivePercentage={totalValuePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
