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



const TarjetaFruta = () => (
  <div>
    <h3>
      <hr/>
      <p>Description ....</p>
    </h3>
  </div>
)


const App = () => (
  <div>
    <TarjetaFruta />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));