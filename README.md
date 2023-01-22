# FreeCodeCamp-Front-End-Development-Libraries
React and Redux

## Finish 5 projects
### [https://sirawit-suk.github.io/FreeCodeCamp-Front-End-Development-Libraries/](https://sirawit-suk.github.io/FreeCodeCamp-Front-End-Development-Libraries/)

### Minimum Requirements
- [x] Learn structure of React
- [x] Functionality done 100%
### To-do lists (If have TIME⏲)
- [ ] Write new Readme.md in project folder
- [ ] Refactor code (move some constant to constant folder)
- [ ] Redecorate UI and color theme
- [ ] Add Footer detail
- [ ] Add useContext / Redux toolkit to project

### Learn pitfall
- setState() is run as a asynchronous (recommended using setState((value)=> value+1)) when update too many state at once.
- life cycles of react such as componentDidMount, shouldComponentUpdate, componentDidUpdate, componentUnmount compare with useEffect().
- always seperate Logic and UI. move state management to one location and pass it as unidirectional flow of data to UI.