import React, { Component } from 'react';

class Componente1 extends Component {
  componentDidMount() {
    console.log('El Componente1 se ha montado.');
  }

  render() {
    return <div>Componente 1</div>;
  }
}

export default Componente1;