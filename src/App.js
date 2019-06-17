import React from 'react';

import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          <AlbumsListContainer/>


          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
