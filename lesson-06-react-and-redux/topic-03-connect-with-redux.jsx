// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = "ADD";

// actionCreator
const addMessage = (message) => {
  return { type: ADD, message };
};

const messageReducer = (prevState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...prevState, action.message];
    default:
      return prevState;
  }
};

const store = Redux.createStore(messageReducer);
