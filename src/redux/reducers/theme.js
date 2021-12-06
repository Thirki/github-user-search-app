import { SWITCH_THEME } from '../actions/actions';

const INITIAL_STATE = {
  actualTheme: 'Dark',
};

function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SWITCH_THEME:
    return {
      actualTheme: action.payload,
    }
  default:
    return state;
  }
}

export default theme;