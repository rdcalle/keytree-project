export const actionTypes = {
  GET_REPOS: 'GET_REPOS',
  GET_REPOS_ERROR: 'GET_REPOS_ERROR',
  SEARCH_USER: 'SEARCH_USER',
  SEARCH_USER_ERROR: 'SEARCH_USER_ERROR',
  SET_ORGS: 'SET_ORGS',
  SET_REPOS: 'SET_REPOS',
  SET_USER: 'SET_USER'
}

export const getRepositories = username => ({  
  type: actionTypes.GET_REPOS,
  username
});

export const getRepositoriesError = () => ({  
  type: actionTypes.GET_REPOS_ERROR
});

export const searchUser = username => ({  
  type: actionTypes.SEARCH_USER,
  username
});

export const searchUserError = () => ({ 
  type: actionTypes.SEARCH_USER_ERROR
});

export const setOrgsData = orgs => ({  
  type: actionTypes.SET_ORGS,
  orgs
});

export const setReposData = repos => ({
  type: actionTypes.SET_REPOS,
  repos
});


export const setUserData = user => ({  
  type: actionTypes.SET_USER,
  user
});