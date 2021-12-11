import React from "react";
//Build in using create react component
// class Header extends React.Component {
//   render() {
//     return <div>Hello</div>;
//   }
// }
// Function component
// function Header(props) {
//   return <div>How are you I am good</div>;
// }
//Es6 using create react component
const Header = (props) => {
  return <div>{props.name} おはようございます</div>;
};
export default Header;
