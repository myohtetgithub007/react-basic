import React from "react";
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
class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Apple", price: 0.99 },
      { id: 1, name: "Orange", price: 1.2 },
    ],
  };
  nameRef = React.createRef();
  priceRef = React.createRef();
  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.setState({
      items: [...this.state.items, { id, name, price }],
    });
  };
  render() {
    return (
      <div>
        <h1>Hello React Component</h1>
        <ul>
          {this.state.items.map((i) => {
            return <Item name={i.name} price={i.price}></Item>;
          })}
        </ul>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.priceRef} />
        <br></br>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
export default App;
