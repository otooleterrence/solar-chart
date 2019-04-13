import React, { Component } from 'react';
import Planet from './Planet'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <section className='chartContainer' >
          <span className="chartName1">the</span>
          <span className="chartName2">Planets</span>
          {/* <div className="planetPath marsPath" >
            <div className="planetPath earthPath" >
              <div className="planetPath venusPath" > */}
          <Planet planetName="neptune">
            <Planet planetName="uranus">
              <Planet planetName="saturn">
                <Planet planetName="jupiter">
                  <Planet planetName="mars">
                    <Planet planetName="earth">
                      <Planet planetName="venus">
                        <Planet planetName="mercury">
                          <div className="sun" />
                          {/* <div className="another" /> */}
                        </Planet>
                      </Planet>
                    </Planet>
                  </Planet>
                </Planet>
              </Planet>
            </Planet>
          </Planet>
              {/* </div>
            </div>
          </div> */}
        </section>
      </div>
    );
  }
}

export default App;
