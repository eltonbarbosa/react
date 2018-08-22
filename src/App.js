import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      title:"DM122"
    }
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>{this.state.title}</h1>
        </header>
        <section className="content">
          <p>{this.state.title}</p>
        </section>
      </div>
    );
  }
}

export default App;
