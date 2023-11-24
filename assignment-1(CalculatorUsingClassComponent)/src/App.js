import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        result : ""
    }
 }
  
  btnClick(a) {
    this.setState({ result: this.state.result.concat(a.target.value)});
  }

  clear() {
    this.setState({result : ""});
  }

  delete() {
    this.setState({result : this.state.result.slice(0,-1)});
  }

  calculate() {
    try {
      this.setState({result : eval(this.state.result).toString()});
    } catch (error) {
      this.setState({result : error.message});
    }
  }

  render() { 
    return (
      <div className="container">
        <div className="holder">
          <input type="text" value={this.state.result}/>
          <table>
            <tr>
              <td colSpan={2}>
                <button onClick={this.clear.bind(this)}>AC</button>
              </td>
              <td>
                <button onClick={this.delete.bind(this)}>DEL</button>
              </td>
              <td>
                <button value={"/"} onClick={this.btnClick.bind(this)}>/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value={"7"} onClick={this.btnClick.bind(this)}>7</button>
              </td>
              <td>
                <button  value={"8"} onClick={this.btnClick.bind(this)}>8</button>
              </td>
              <td>
                <button  value={"9"} onClick={this.btnClick.bind(this)}>9</button>
              </td>
              <td>
                <button  value={"*"} onClick={this.btnClick.bind(this)}>*</button>
              </td>
            </tr>
            <tr>
              <td>
                <button  value={"4"} onClick={this.btnClick.bind(this)}>4</button>
              </td>
              <td>
                <button  value={"5"} onClick={this.btnClick.bind(this)}>5</button>
              </td>
              <td>
                <button value={"6"} onClick={this.btnClick.bind(this)}>6</button>
              </td>
              <td>
                <button value={"-"} onClick={this.btnClick.bind(this)}>-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value={"1"} onClick={this.btnClick.bind(this)}>1</button>
              </td>
              <td>
                <button value={"2"} onClick={this.btnClick.bind(this)}>2</button>
              </td>
              <td>
                <button value={"3"} onClick={this.btnClick.bind(this)}>3</button>
              </td>
              <td>
                <button value={"+"} onClick={this.btnClick.bind(this)}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value={"0"} onClick={this.btnClick.bind(this)}>0</button>
              </td>
              <td>
                <button value={"7"} onClick={this.btnClick.bind(this)}>.</button>
              </td>
              <td  colSpan={2}>
                <button onClick={this.calculate.bind(this)}>=</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
