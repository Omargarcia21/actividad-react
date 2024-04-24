import React, { Component } from 'react';

class Componente2 extends Component {
  componentDidUpdate() {
    console.log('El Componente2 se ha actualizado.');
  }

  render() {
    return <div>Componente 2</div>;
  }
}

export default Componente2;