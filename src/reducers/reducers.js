import { combineReducers } from 'redux';
import { SET_MOVIES, SET_FILTER, SET_USER } from '../actions/actions';


//reducer that takes state and action
function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}


function user(state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.value;
    default:
      return state;
  }
}
//combined reducer
const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  user
});

export default moviesApp;