const initialState = 0;

export default (state = initialState, action) => {
  const nextState = state + (action.payload || 1);
  switch (action.type) {
    case 'ADD_COUNT':
      return nextState < 0 ? 0 : nextState;
    default:
      return state;
  }
};
