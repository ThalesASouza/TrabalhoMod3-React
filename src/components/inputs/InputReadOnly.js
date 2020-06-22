import React, { Component } from 'react'
import css from './input.module.css';
import BaseINSS from './BaseINSS';
import DescontoINSS from './DescontoINSS';
import BaseIRPF from './BaseIRPF.js';
import DescontoIRPF from './DescontoIRPF';
import NetSalary from './NetSalary';

export default class InputReadOnly extends Component {
  render() {
    const {results} =this.props;
    return (
      <div className={css.flexRow}>
        <BaseINSS value={results.baseINSS}/>
        <DescontoINSS value={results.discountINSS} percentual={results.percentINSS}/>
        <BaseIRPF value={results.baseIRPF}/>
        <DescontoIRPF value={results.discountIRPF} percentual={results.percentIRPF}/>
        <NetSalary value={results.netSalary} percentual={results.percentNetSalary}/>
      </div>
    );
  }
}
