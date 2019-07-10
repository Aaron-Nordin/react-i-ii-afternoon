import React, { Component } from "react";
import "./App.css";
import data from "./data";
import Previous from "./components/Previous";
import Next from "./components/Next";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handle25() {
    return `${this.state.currentIndex + 1}/25`;
  }
  handlePrevious() {
    this.state.currentIndex === 0
      ? this.setState({ currentIndex: data.length - 1 })
      : this.setState({ currentIndex: this.state.currentIndex - 1 });
  }
  handleNext() {
    this.state.currentIndex === data.length - 1
      ? this.setState({ currentIndex: 0 })
      : this.setState({ currentIndex: this.state.currentIndex + 1 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Home</header>
        <div className="background">
          <div className="infoCard">
            <div className="num">{`${this.handle25()}`}</div>
            <div className="name">
              {`${data[this.state.currentIndex].name.first} ${
                data[this.state.currentIndex].name.last
              }`}
            </div>
            <div className="from">
              {`From: ${data[this.state.currentIndex].city}, ${
                data[this.state.currentIndex].country
              }`}
            </div>
            <div className="employer">{`Employer: ${
              data[this.state.currentIndex].employer
            }`}</div>
            <div className="faveMovHead">Favorite Movies:</div>
            <div className="faveMovies">
              <div className="one">{`1. ${
                data[this.state.currentIndex].favoriteMovies[0]
              }`}</div>
              <div className="two">{`2. ${
                data[this.state.currentIndex].favoriteMovies[1]
              }`}</div>
              <div className="three">{`3. ${
                data[this.state.currentIndex].favoriteMovies[2]
              }`}</div>
            </div>
            <div>
              <div className="prevNext">
                <Previous indexFn={this.handlePrevious} />
                <Next indexFn={this.handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
