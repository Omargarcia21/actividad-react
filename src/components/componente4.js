import React, { Component } from 'react';

class Componente4 extends Component {
  componentWillUnmount() {
    console.log('El Componente4 se ha desmontado.');
  }

  render() {
    return <div>Componente 4</div>;
  }
}

export default Componente4;