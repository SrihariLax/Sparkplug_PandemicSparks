import React, { Component } from 'react';
import FloorPlan from './components/FloorPlan';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="main">
        <FloorPlan isAdmin={true}/>
      </div>
    );
  }
}

export default App;