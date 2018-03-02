import { actionTypes } from './actions';

// User reducer
const initialUserState = null;
export const user = (state = initialUserState, action) => {  
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.user;
    case actionTypes.SEARCH_USER_ERROR:
      return initialUserState;
    default:
      return state;
  }
};

// Organizations reducer
const initialOrgsState = [];
export const orgs = (state = initialOrgsState, action) => {  
  switch (action.type) {
    case actionTypes.SET_ORGS:
      return action.orgs;
    case actionTypes.SEARCH_USER_ERROR:
      return initialOrgsState;      
    default:
      return state;
  }
};

// Respositories reducer
const initialReposState = [];
export const repos = (state = initialReposState, action) => {  
  switch (action.type) {
    case actionTypes.SET_REPOS:
      return action.repos;
    case actionTypes.GET_REPOS_ERROR:
      return initialReposState;      
    default:
      return state;
  }
};

// Fetching reducer to show spinner or whatever
export const fetching = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GET_REPOS:
    case actionTypes.SEARCH_USER:
      return true;
    case actionTypes.GET_REPOS_ERROR:
    case actionTypes.SEARCH_USER_ERROR:
    case actionTypes.SET_ORGS:
    case actionTypes.SET_REPOS:
    case actionTypes.SET_USER:
      return false;
    default:
      return state
  }
};