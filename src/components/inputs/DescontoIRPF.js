import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './input.module.css';

export default class DescontoIRPF extends Component {
  render() {
    const {value,percentual} = this.props;
    return (
      <div className={`${css.flexColumn} ${css.descontoIRPF}`}>
        <span>Desconto IRPF</span>
        <input type="text" value={`${formatNumber(value)} (${percentual.toFixed(2)}%)`} readOnly />
      </div>
    )
  }
}
