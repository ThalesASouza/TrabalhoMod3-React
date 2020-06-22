import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './input.module.css';

export default class BaseIRPF extends Component {
  render() {
    const {value} = this.props;
    return (
      <div className={css.flexColumn}>
        <span>Base IRPF</span>
        <input type="text" value={formatNumber(value)} readOnly />
      </div>
    );
  }
}
