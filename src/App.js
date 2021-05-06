import React from "react";
// import PropTypes from "prop-types";

// function component
// function App() {
//   return (
//     <div>
//       { foodILike.map(renderFood) }
//     </div>
//   );
// }

// class component
class App extends React.Component {
  state = {
    count: 0
  };
  add= () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1}));
  };
  subtract= () => {
    console.log("subtract");
    // don't use this.state when setState
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({count: current.count - 1}));
  };

  // life cycle

  // mounting
  // constructor
  // getDerivedStateFromProps
  // render
  // componentDidMount

  // updating
  // getDerivedStateFromProps
  // shuoldComponentUpdate
  // render
  // getSnapshotBeforeUpdate
  // componentDidUpdate

  // unmounting
  // componentWillUnmount

  componentDidMount() {
    console.log("component rendered");
  };

  componentDidUpdate() {
    console.log("component updated");
  };

  componentWillUnmount() {
    console.log("component unmounted");
  };

  render() {
    console.log("rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  };
}

export default App;
