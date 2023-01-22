# FreeCodeCamp-Front-End-Development-Libraries
React and Redux

### [https://sirawit-suk.github.io/FreeCodeCamp-Front-End-Development-Libraries/](https://sirawit-suk.github.io/FreeCodeCamp-Front-End-Development-Libraries/)

Learn pitfall
- setState() is run as a asynchronous (recommended using setState((value)=> value+1)) when update too many state at once.
- life cycles of react such as componentDidMount, shouldComponentUpdate, componentDidUpdate, componentUnmount compare with useEffect().
- always seperate Logic and UI. move state management to one location and pass it as unidirectional flow of data to UI.