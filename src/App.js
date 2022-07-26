import React, { Component } from 'react';
import styled from 'styled-components';

export const Calculadora = styled.div`
  background-color: black;
  max-width: 360px;
  width: 100%;
  height: 380px;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 15px 20px 10px rgba(0, 0, 0, 0.5);
  border: white solid 1px;
  margin-top: 50px;

  h2{
    color:white;
  }
`
export const Titulo = styled.h1`

  color: white;

`

export const Resultado = styled.h2`

  
  color: white;
  
`

export const BoxInput = styled.div`

display:flex;
align-items:center;

input{
border-radius:  10px;
border:none;

}

`

export const CaixaBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  button{
    width: 40px;
    height:40px;
    background:orange;
    cursor: pointer;
    border-radius: 50px;
    border: none;
    
  }

  button:hover{
    filter: brightness(1.2);
  }

  button:last-child{
    background-color: rgb(157, 0, 0);
    border: none;
    color: white;
  }

`

export default class App extends Component{

  state = {
    n1: '',
    n2: '',
    resultado: '' 
  }


  divisao = () => {
    this.setState({
      resultado: this.state.n1 / this.state.n2
    })
  }

  subtrair = () => {
    this.setState({
      resultado: this.state.n1 - this.state.n2
    })
  }

  adicao = () => {
    this.setState({
      resultado:Number.parseInt(this.state.n1) + Number.parseInt(this.state.n2)
    }) 

  }
  multiplica = () => {
    this.setState({
      resultado: this.state.n1 * this.state.n2
    })
  }
  clear = () => {
      this.setState({
        n1: '',
        n2: '',
        resultado: ''
      })
    }

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
    })
  }

  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    })
  }

  render(){
    return(
      <Calculadora>
        <Titulo>Calculadora</Titulo>
        <BoxInput>
          <input onChange={this.handleChange1} value={this.state.n1}/>
          <input  onChange={this.handleChange2} value={this.state.n2}/>
        </BoxInput>
        <CaixaBtn>
          <button onClick={this.adicao}>+</button>
          <button onClick={this.subtrair}>-</button>
          <button onClick={this.divisao}>/</button>
          <button onClick={this.multiplica}>*</button>
          <button onClick={this.clear}>c</button>
        </CaixaBtn>
        <Resultado>{this.state.resultado}</Resultado>
      </Calculadora>
    )
  }
}