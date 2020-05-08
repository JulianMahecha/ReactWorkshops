import React from 'react';
import ReactDOM from 'react-dom'

/* const user1 = {
  name: 'Jon Doe',
  age: '28',
  country: 'USA'
}

var getInfo = (user) =>{
  return  `Hi, mi name is ${user.name}, im ${user.age} years old`;
}

const name = "Jon Doe";
const App = <h1> {getInfo(user1)} </h1>

ReactDOM.render(App, document.getElementById('root')); */


/* 
const TarjetaFruta = (props) => (
  <div>
    <h3>{props.name}</h3>
      <hr/>
      <p>{props.price}</p>
  </div>
)


const App = () => (
  <div>
    <TarjetaFruta name = 'Sandia' price = {2.00} />
    <TarjetaFruta name = 'Maranja' price = {4.00} />
    <TarjetaFruta name = 'Kiwi' price = {6.00} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root')); */

import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta extends React.Component {
  constructor () {
    super()

    const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    })

    this.state = {
      cantidad: 0
    }
  }

  agregar () {
    this.setState({
      cantidad: this.state.cantidad + 1
    })
  }

  quitar () {
    this.setState({
      cantidad: this.state.cantidad - 1
    })
  }

  limpiar () {
    this.setState({
      cantidad: 0
    })
  }

  render () {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <div>Cantidad: { this.state.cantidad }</div>
        <button onClick={this.agregar} > + </button>
        <button onClick={this.quitar} > - </button>
        <button onClick={this.limpiar} > Limpiar</button>        
        <hr/>
        <p>$ { this.props.price }</p>
      </div>
    )
  }
}

const App = () => (
  <div>
    <TarjetaFruta name={'Sandia'} price={5.00} />
    <TarjetaFruta name={'Naranja'} price={1.50} />
    <TarjetaFruta name='Kiwi' price={3.30} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))