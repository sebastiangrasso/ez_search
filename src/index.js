import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import WeekContainer from './WeekContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeekContainer />
      </div>
    );
  }
}

//export default App;
// ========================================

ReactDOM.render(
  <App  />,
  document.getElementById('root')
);
