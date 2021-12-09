import React from "react";
class Item extends React.Component {
  //   render() {
  //     return <div>{this.props.name}</div>;
  //   }
}
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
        <p>{this.state.color}</p>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}
export default App;
