import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Planet extends Component {

  render() {
    const { planetName } =this.props;

    let rota = 0;

    switch(planetName){
      case 'mercury':
       rota = 45;
       break;
      case 'venus':
       rota = 90;
       break;
      case 'earth':
       rota = 45;
       break;
      case 'mars':
       rota = 240;
       break;
      default:
        rota = 0;
        break;
    }

    const styles = {
      transform: `rotate(${rota}deg)`,
    };
    const childrenStyles = {
      transform: `rotate(0deg)`,
    }
    const classes = `planetPath ${planetName}Path`;

    return (
      <div
        style={styles}
        className={classes}
      >
        <div className="planet" />
        <div styles={childrenStyles} className="planetChildrenContainer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Planet;
