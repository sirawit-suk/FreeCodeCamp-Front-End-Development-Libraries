class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Add handleChange() and submitMessage() methods here
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  submitMessage = () => {
    // setState will be asynchronous
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>submit</button>
        // using key by index of array is last choice
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
