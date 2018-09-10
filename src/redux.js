import * as actions from './actionTypes';

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SIMPLE_FETCH:
      return { ...state, fetching: !state.fetching, error: null };
    case actions.API_CALL_RUNNING:
      return { ...state, fetching: true, error: null };
    case actions.API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
    case actions.API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
    default:
      return state;
  }
}
