import React, { Component } from 'react';
import '../styles/App.css';
import ComparableTable from './ComparableTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a>
            Hello World ^_^
        </a>
        <ComparableTable />
        </header>
      </div>
    )
  }

}

export default App;
