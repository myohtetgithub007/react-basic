import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div style={{ background: "cyan", padding: 10 }}>
        {this.props.children}
      </div>
    );
  }
}
export default Header;

//React Function components
function Header(props) {
  return <div>{props.name}</div>;
}
export default Header;

const Header = (props) => {
  return <div>{props.name}</div>;
};

export default Header;
