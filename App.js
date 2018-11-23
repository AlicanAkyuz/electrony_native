import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './source/store';
import Entrance from './source/containers/entrance';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Entrance />
      </Provider>
    );
  }
}

export default App;
