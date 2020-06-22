import React, { Component } from 'react'
import css from './progress.module.css';

export default class ProgressINSS extends Component {
  render() {
    const { percentual } = this.props;
    return (
      <div className={css.flexColumn} style={{ padding: '10px', marginLeft: '25px' }}>
        <span>INSS: </span>
        <div className={css.progressINSS} style={{ width: `${percentual.toFixed(2)}%` }}>{percentual.toFixed(2)}%</div>
      </div>
    );
  }
}
