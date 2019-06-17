import React from 'react';

import './App.css';
import {Provider} from 'react-redux'
import store from './store'


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">


          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
