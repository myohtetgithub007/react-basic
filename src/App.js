import React from "react";
import Header from "./Header";
class App extends React.Component {
  state = {
    name: "orange",
    color: "red",
  };
  changeColor = () => {
    this.setState({ color: "green" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
        <Header name="Myo Htet">
          <p>Good Morning</p>
        </Header>
      </div>
    );
  }
}
export default App;
