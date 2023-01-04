class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

// NOTE: onChange() pass synthetic event as the first argument of this.handdleChange of input tag html when it called
