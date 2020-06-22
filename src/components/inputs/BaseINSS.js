import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './input.module.css';

export default class BaseINSS extends Component {
  render() {
    const {value} = this.props;
    return (
      <div className={css.flexColumn}>
        <span>Base INSS</span>
        <input type="text" value={formatNumber(value)} readOnly />
      </div>
    );
  }
}
