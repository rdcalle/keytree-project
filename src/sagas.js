import { all, call, put, takeLatest } from 'redux-saga/effects';
import { 
  actionTypes, getRepositoriesError, 
  searchUserError, setOrgsData ,setReposData, setUserData
} from './actions';
import { getRepos, getUserData } from './services/github-api';

function* fetchUser({ username }) {
  try {
    const res = yield call(getUserData, username);
    yield all([
      put(setUserData(res.user)),
      put(setOrgsData(res.orgs))
    ]);
  } catch (error) {
    yield put(searchUserError())
  }
}

function* fetchRepositories({ username }) {
  try {
    const repos = yield call(getRepos, username);
    yield put(setReposData(repos));
  } catch (error) {
    yield put(getRepositoriesError())
  }
}

export default function* sagas() {
  yield all([
    takeLatest(actionTypes.SEARCH_USER, fetchUser),
    takeLatest(actionTypes.GET_REPOS, fetchRepositories),
  ]);
}
