import React, { Component } from 'react'

export default class InputFullSalary extends Component {
  handleInputChange = (event)=>{
    const newValue = event.target.value;
    this.props.onChange(newValue);
  }
  render() {
    const {value} = this.props;
    return (
      <div>
        <span style={{color:'#16a085',fontWeight:'bold'}}>Salário Bruto</span>
        <input style={{maxWidth:'97%'}} type="number" value={value} onChange={this.handleInputChange}/>
      </div>
    );
  }
}
