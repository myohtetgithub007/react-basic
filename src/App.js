import React from "react";
class Item extends React.Component {
  render() {
    return (
      <div>
        <h1>Item component heading</h1>
        <p>item component</p>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return <Item />;
  }
}
export default App;
