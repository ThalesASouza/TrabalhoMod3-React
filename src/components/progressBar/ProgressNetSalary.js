import React, { Component } from 'react'
import css from './progress.module.css';

export default class ProgressNetSalary extends Component {
  render() {
    const { percentual } = this.props;
    return (
      <div className={css.flexColumn} style={{ padding: '10px', marginLeft: '25px' }}>
        <span>Salário líquido:</span>
        <div className={css.progressNetSalary} style={{ width: `${percentual.toFixed(2)}%` }}>{percentual.toFixed(2)}%</div>
      </div>
    );
  }
}
