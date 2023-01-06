

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            // Don't mutate state here or the tests will fail
            return state.filter((item, index) => index !== action.index);
        default:
            return state;
    }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

const store = Redux.createStore(immutableReducer);
  //store.dispatch(removeItem(5))
  //console.log(store.getState())


  // const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
//     switch (action.type) {
//         case 'REMOVE_ITEM':
//             // Don't mutate state here or the tests will fail
//             return [].concat(state.slice(0, action.index), state.slice(action.index + 1))
//         default:
//             return state;
//     }
// };

// const removeItem = (index) => {
//     return {
//         type: 'REMOVE_ITEM',
//         index
//     }
// }

// const store = Redux.createStore(immutableReducer);
//   //store.dispatch(removeItem(5))
//   //console.log(store.getState())