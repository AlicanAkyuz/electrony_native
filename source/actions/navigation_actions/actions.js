import {
  ENT_APP
} from './action_types';

export function onFirstClick() {
  return function (dispatch) {
    dispatch({
        type: ENT_APP,
        payload: true
    })
  }
};
