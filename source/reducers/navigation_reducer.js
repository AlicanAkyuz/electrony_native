import { FONT_LOAD,
         ENT_APP,
         VAL_SEL
       } from '../actions/navigation_actions/action_types';

const initialState = {
  fontLoaded: false,
  enter_clicked: false,
  dancebility: ''
};

function NavigationReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case FONT_LOAD: {
      const newState = Object.assign({}, state);
      newState.fontLoaded = action.payload
      return newState;
    }
    case ENT_APP: {
      const newState = Object.assign({}, state);
      newState.enter_clicked = action.payload
      return newState;
    }
    case VAL_SEL: {
      const newState = Object.assign({}, state);
      console.log(action.payload);
      newState.danceability = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default NavigationReducer;
