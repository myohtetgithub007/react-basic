import React from "react";
class AddForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.props.add(name, price);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef}></input>
        <br />
        <input type="text" ref={this.priceRef}></input>
        <br />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
export default AddForm;
