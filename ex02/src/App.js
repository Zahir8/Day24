import React, {Component} from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie.setItem("Ywar", 2021);
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  }
  
  getMyStorage = () => {
    let myCookieData = document.cookie.getItem("Year", 2021);
    let myLocalStorageData = localStorage.getItem("Paragon", "yes, but Arena first");
    let mySessionStorageData = sessionStorage.setItem("frontend", "React");
  }
  
  render() {
    return(
      <div className="App">
        <button onClick={this.setMyStorage}></button>
        <button onClick={this.getMyStorage}></button>
      </div>
    )
  }
}

export default App;
