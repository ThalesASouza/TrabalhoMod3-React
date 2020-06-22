import React, { Component } from 'react';
import InputFullSalary from './components/inputs/InputFullSalary';
import InputReadOnly from './components/inputs/InputReadOnly';
import { calculateSalaryFrom } from './helpers/salaryHelper';
import ProgressBar from './components/progressBar/ProgressBar';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handleValue = (newSalary) =>{
    this.setState({
      fullSalary: newSalary,
    });
  }
  

  render() {
    const {fullSalary} = this.state;
    let result = calculateSalaryFrom(fullSalary);
    const percentINSS = (result.discountINSS*100)/fullSalary;
    const percentIRPF = (result.discountIRPF*100) / fullSalary;
    const percentNetSalary = (result.netSalary*100) / fullSalary;
    result = {...result,percentINSS:percentINSS,percentIRPF:percentIRPF,percentNetSalary:percentNetSalary};
    return (
      <div className="container">
        <h1 style={style.centeredTitle}>React Salário</h1>
        <InputFullSalary value={fullSalary} onChange={this.handleValue}/>
        <InputReadOnly results={result}/>
        <ProgressBar result={result}/>
      </div>
    );
  }
}
const style = {
  centeredTitle: {
    textAlign: 'center',
  },
};