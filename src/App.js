import React, { Component } from 'react';
import './App.css';
import Componente1 from './components/componente1';
import Componente2 from './components/componente2';
import Componente3 from './components/componente3';
import Componente4 from './components/componente4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: 'Hola desde el estado!'
    };
  }

  componentDidMount() {
    console.log('El componente App se ha montado.');
  }

  componentDidUpdate() {
    console.log('El componente App se ha actualizado.');
  }

  render() {
    return (
      <div className="App">
        <h1>¡Mi Aplicación React!</h1>
        <Componente1 />
        <Componente2 />
        <Componente3 mensaje={this.state.mensaje} />
        <Componente4 />
      </div>
    );
  }
}

export default App;