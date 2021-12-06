export const GET_DATA = 'fetchApi/GET_DATA'
export const REQUEST = 'fetchApi/REQUEST'
export const FAILED_REQUEST = 'fetchApi/FAILED_REQUEST'

export function getData(json) {
  return { type: GET_DATA, payload: json };
}

export function requestApi(payload) {
  return { type: REQUEST, payload };
}

export function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchUserApi(payload){
  return (dispatch) => {
    dispatch(requestApi());
    return fetch(`https://api.github.com/users/${payload}`)
      .then((r) => r.json()
        .then(
          (json) => dispatch(getData(json)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

export const SWITCH_THEME = 'theme/SWITCH_THEME';

export function switchTheme(theme) {
  return { type: SWITCH_THEME, payload: theme };
}