import {
  ENT_APP
} from '../actions/navigation_actions/action_types';

const initialState = {
  enter_clicked: false,
};

function NavigationReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case ENT_APP: {
      const newState = Object.assign({}, state);
      newState.enter_clicked = action.payload
      return newState;
    }
    default:
      return state;
  }
};

export default NavigationReducer;
