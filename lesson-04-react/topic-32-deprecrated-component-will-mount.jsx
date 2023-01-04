class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  // WARNING : DEPRECRATED! in version 17
  // UNSAFE_componentWillMount()
  // https://reactjs.org/docs/react-component.html
  componentWillMount() {
    // Change code below this line
    console.log("test");
    // Change code above this line
  }
  render() {
    return <div />;
  }
}
