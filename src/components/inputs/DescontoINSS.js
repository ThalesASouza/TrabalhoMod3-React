import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './input.module.css';

export default class DescontoINSS extends Component {
  render() {
    const { value,percentual } = this.props;
    return (
      <div className={`${css.flexColumn} ${css.descontoINSS}`}>
        <span>Desconto INSS</span>
        <input type="text" value={`${formatNumber(value)} (${percentual.toFixed(2)}%)`} readOnly />
      </div>
    )
  }
}
