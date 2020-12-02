import React, { Component } from 'react';
// import PropTypes from "prop-types";

import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  // static propTypes = {
  //
  // }

  render() {
    const { onAddGood, onAddNeutral, onAddBad } = this.props;
    return (
      <div className={s.Button}>
        <button onClick={onAddGood}>Good</button>

        <button onClick={onAddNeutral}>Neutral</button>

        <button onClick={onAddBad}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
