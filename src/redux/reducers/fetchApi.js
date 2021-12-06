import { REQUEST, GET_DATA, FAILED_REQUEST } from '../actions/actions';

const INITIAL_STATE = {
  isFetching: false,
  data: {
    bio: '',
    blog: '',
    company: '',
    created_at: '',
    followers: 0,
    following: 0,
    location: '',
    login: '',
    name: '',
    public_repos: 0,
    twitter_username: '',
  },
  error: '',
};

function fetchApi(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST:
    return { ...state, isFetching: true };
  case GET_DATA:
    return { ...state, data: action.payload, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
}

export default fetchApi;