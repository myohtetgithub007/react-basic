import React from "react";
import AddForm from "./Addform";
// import Header from "./Header";
// import Item from "./Item";
class Item extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        <li>{this.props.price}</li>
      </div>
    );
  }
}
class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <Title name={this.props.name}></Title>
      </div>
    );
  }
}
class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Apple", price: 0.99 },
      { id: 1, name: "Orange", price: 1.2 },
    ],
  };
  add = (name, price) => {
    let id = this.state.items.length + 1;
    this.setState({
      items: [...this.state.items, { id, name, price }],
    });
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {this.state.items.map((i) => {
            return <Item name={i.name} price={i.price}></Item>;
          })}
        </ul>
        <AddForm add={this.add}></AddForm>
        <Header name="Myo Htet"></Header>
      </div>
    );
  }
}
export default App;
