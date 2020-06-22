import React, { Component } from 'react';
import ProgressINSS from './ProgressINSS';
import ProgressIRPF from './ProgressIRPF';
import ProgressNetSalary from './ProgressNetSalary';
import css from './progress.module.css';

export default class ProgressBar extends Component {
  render() {
    const {result}=this.props;
    return (
      <div className={css.flexColumn}>
        <h5 style={style.centeredTitle}>Gráfico de Porcentagens</h5>
        <ProgressINSS value={result.discountINSS} percentual={result.percentINSS}/>
        <ProgressIRPF value={result.discountIRPF} percentual={result.percentIRPF}/>
        <ProgressNetSalary value={result.netSalary} percentual={result.percentNetSalary}/>
      </div>
    )
  }
}
const style = {
  centeredTitle: {
    textAlign: 'center',
    fontWeight:'bold',
  },
};