import React, {Component} from 'react';

class App extends Component {
  getLocalStorage = () => {
    myLocalStorageData = localStorage.getItem("Arena");
  }
  
  render() {
    return(
      <div className="App">
        <button onClick={this.getLocalStorage}>Button1</button>
      </div>
    )
  }
}

export default App;
