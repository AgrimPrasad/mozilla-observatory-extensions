import actionTypes from 'Actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SCANS: {
      const scanForHost = state.scanForHost || {};
      const scanForCurrHost = {
        [action.payload.host]: action.payload.scan,
      };
      const newScanForHost = Object.assign(
        {},
        scanForHost,
        scanForCurrHost,
      );
      const newState = {
        ...state,
        ...newScanForHost,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};
