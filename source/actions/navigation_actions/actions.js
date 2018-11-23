import { FONT_LOAD,
         ENT_APP,
         VAL_SEL
       } from './action_types';

export function onFontLoaded() {
  return function (dispatch) {
    dispatch({
        type: FONT_LOAD,
        payload: true
    })
  }
};

export function onFirstClick() {
  return function (dispatch) {
    dispatch({
        type: ENT_APP,
        payload: true
    })
  }
};

export function onValueChange(value) {
  return function (dispatch) {
    dispatch({
        type: VAL_SEL,
        payload: value
    })
  }
};
