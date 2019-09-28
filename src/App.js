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
      result:null,
      error:null
    }
  }
  handlePlus(numbers){
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(!number1)cek++
    if(!number2)cek++
    if(!number3)cek++
    if(cek>1){
      this.setState({result:null,error:'Error! Please input at least two numbers!'})
    }else if(cek===1){
      if(!number1)result=number2+number3
      if(!number2)result=number1+number3
      if(!number3)result=number1+number2
      this.setState({result:result,error:''})
    }else{
      result=number1+number2+number3
      this.setState({result:result,error:''})
    }
  }
  handleMinus(numbers){
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(!number1)cek++
    if(!number2)cek++
    if(!number3)cek++
    if(cek>1){
      this.setState({result:null,error:'Error! Please input at least two numbers!'})
    }else if(cek===1){
      if(!number1)result=number2-number3
      if(!number2)result=number1-number3
      if(!number3)result=number1-number2
      this.setState({result:result,error:''})
    }else{
      result=number1-number2-number3
      this.setState({result:result,error:''})
    }
  }
  handleTimes(numbers){
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(!number1)cek++
    if(!number2)cek++
    if(!number3)cek++
    if(cek>1){
      this.setState({result:null,error:'Error! Please input at least two numbers!'})
    }else if(cek===1){
      if(!number1)result=number2*number3
      if(!number2)result=number1*number3
      if(!number3)result=number1*number2
      this.setState({result:result,error:''})
    }else{
      result=number1*number2*number3
      this.setState({result:result,error:''})
    }
  }
  handleDivide(numbers){
    const number1=parseInt(numbers.number1)
    const number2=parseInt(numbers.number2)
    const number3=parseInt(numbers.number3)
    var cek=0
    var result=0
    if(!number1)cek++
    if(!number2)cek++
    if(!number3)cek++
    if(cek>1){
      this.setState({result:null,error:'Error! Please input at least two numbers!'})
    }else if(cek===1){
      if(!number1)result=number2/number3
      if(!number2)result=number1/number3
      if(!number3)result=number1/number2
      this.setState({result:result,error:''})
    }else{
      result=number1/number2/number3
      this.setState({result:result,error:''})
    }
  }
  render(){
    let {numbers}=this.state;
  return (
    <div className="App">
      <div>
      <input className="input" 
      onChange={(e)=>{
          numbers.number1=e.target.value
          this.setState({numbers})
      }}></input>
      <p className="cek">{isNaN(numbers.number1)?<i style={{padding:3}}className="fas fa-times"></i>:numbers.number1?<i className="fas fa-check"></i>:<i style={{color:'white'}} className="fas fa-check"></i>}</p>
      <p className="warning">{isNaN(numbers.number1)?'Please input a number!':''}</p>
      </div>
      <div>
      <input className="input"
       onChange={(e)=>{
        numbers.number2=e.target.value
        this.setState({numbers})
        }}></input>
      <p className="cek">{isNaN(numbers.number2)?<i style={{padding:3}}className="fas fa-times"></i>:numbers.number2?<i className="fas fa-check"></i>:<i style={{color:'white'}} className="fas fa-check"></i>}</p>
      <p className="warning">{isNaN(numbers.number2)?'Please input a number!':''}</p>
      </div>
      <div>
      <input className="input"
       onChange={(e)=>{
        numbers.number3=e.target.value
        this.setState({numbers})
       }}></input>
      <p className="cek">{isNaN(numbers.number3)?<i style={{padding:3}}className="fas fa-times"></i>:numbers.number3?<i className="fas fa-check"></i>:<i style={{color:'white'}} className="fas fa-check"></i>}</p>
      <p className="warning">{isNaN(numbers.number3)?'Please input a number!':''}</p>
      </div>
      <div className="FieldInput">
        <button className="button" onClick={()=>this.handlePlus(numbers)}>+</button>
        <button className="button" onClick={()=>this.handleMinus(numbers)}>-</button>
        <button className="button" onClick={()=>this.handleTimes(numbers)}>x</button>
        <button className="button" onClick={()=>this.handleDivide(numbers)}>/</button>
      </div>
      <hr className="line"></hr>
      <p className="result">Hasil : {this.state.result} </p>
      <p className="error">{this.state.error} </p>
    </div>
  );
  }
}

export default Calculator;
