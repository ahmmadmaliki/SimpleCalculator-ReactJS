import React,{Component} from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state={
      numbers:{
        number1: null,
        number2: null,
        number3:null
      },
      checked:{
        number1: false,
        number2: false,
        number3: false
      },
      result:null,
      error:null
    }
  }
  handlePlus(numbers){
    const {checked}=this.state
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(checked.number1)cek++
    if(checked.number2)cek++
    if(checked.number3)cek++
    if(cek<2){
      this.setState({result:null,error:'Error! Please check at least two fields!'})
    }else if(cek===2){
      if(!checked.number1)result=number2+number3
      if(!checked.number2)result=number1+number3
      if(!checked.number3)result=number1+number2
      this.setState({result:result,error:''})
    }else{
      result=number1+number2+number3
      this.setState({result:result,error:''})
    }
  }
  handleMinus(numbers){
    const {checked}=this.state
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(checked.number1)cek++
    if(checked.number2)cek++
    if(checked.number3)cek++
    if(cek<2){
      this.setState({result:null,error:'Error! Please check at least two fields!'})
    }else if(cek===2){
      if(!checked.number1)result=number2-number3
      if(!checked.number2)result=number1-number3
      if(!checked.number3)result=number1-number2
      this.setState({result:result,error:''})
    }else{
      result=number1-number2-number3
      this.setState({result:result,error:''})
    }
  }
  handleTimes(numbers){
    const {checked}=this.state
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(checked.number1)cek++
    if(checked.number2)cek++
    if(checked.number3)cek++
    if(cek<2){
      this.setState({result:null,error:'Error! Please check at least two fields!'})
    }else if(cek===2){
      if(!checked.number1)result=number2*number3
      if(!checked.number2)result=number1*number3
      if(!checked.number3)result=number1*number2
      this.setState({result:result,error:''})
    }else{
      result=number1*number2*number3
      this.setState({result:result,error:''})
    }
  }
  handleDivide(numbers){
    const {checked}=this.state
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(checked.number1)cek++
    if(checked.number2)cek++
    if(checked.number3)cek++
    if(cek<2){
      this.setState({result:null,error:'Error! Please check at least two fields!'})
    }else if(cek===2){
      if(!checked.number1)result=number2/number3
      if(!checked.number2)result=number1/number3
      if(!checked.number3)result=number1/number2
      this.setState({result:result,error:''})
    }else{
      result=number1/number2/number3
      this.setState({result:result,error:''})
    }
  }
  render(){
    let {numbers}=this.state
    let {checked}=this.state
  return (
    <div className="App">
      <div>
      <input className="input" 
      onChange={(e)=>{
          numbers.number1=e.target.value
          this.setState({numbers:numbers})
      }}></input>
        <input type="checkbox" className="cek" onChange={(e)=>{
          if(e.target.checked){
            checked.number1=e.target.checked
            this.setState({checked:checked})
          }else{
            checked.number1=e.target.checked
            this.setState({checked:checked})
          }
        }}/>
        <p className="warning">{isNaN(numbers.number1)?'Please input a number!':''}</p>
      </div>
      <div>
      <input className="input"
       onChange={(e)=>{
        numbers.number2=e.target.value
          this.setState({numbers:numbers})
        }}></input>
       <input type="checkbox" className="cek" onChange={(e)=>{
         if(e.target.checked){
          checked.number2=e.target.checked
            this.setState({checked:checked})
         }else{
          checked.number2=e.target.checked
          this.setState({checked:checked})
         }
       }}/>
      <p className="warning">{isNaN(numbers.number2)?'Please input a number!':''}</p>
      </div>
      <div>
      <input className="input"
       onChange={(e)=>{
        numbers.number3=e.target.value
          this.setState({numbers:numbers})
       }}></input>
       <input type="checkbox" className="cek" onChange={(e)=>{
        if(e.target.checked){
          checked.number3=e.target.checked
          this.setState({checked:checked})
        }else{
          checked.number3=e.target.checked
          this.setState({checked:checked})
        }
       }}/>
      <p className="warning">{isNaN(numbers.number3)?'Please input a number!':''}</p>
      </div>
      <div className="FieldInput">
        <button className="button" onClick={()=>this.handlePlus(numbers)}>+</button>
        <button className="button" onClick={()=>this.handleMinus(numbers)}>-</button>
        <button className="button" onClick={()=>this.handleTimes(numbers)}>x</button>
        <button className="button" onClick={()=>this.handleDivide(numbers)}>/</button>
      </div>
      <hr className="line"></hr>
      <p className="result">Result : {isNaN(this.state.result)?<a style={{color:'red'}}>Wrong input!</a>:this.state.result} </p>
      <p className="error">{this.state.error} </p>
    </div>
  );
  }
}

export default Calculator;
