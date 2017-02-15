import actionTypes from 'Actions/actionTypes';

export default (state = 'dummyHostFromReducer', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOST:
      return action.payload;
    default:
      return state;
  }
};
