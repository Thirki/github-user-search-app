import React, { Component } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import UserArea from './components/UserArea';


class App extends Component {
  render() {
    return (
        <div id="App">
          <Header />
          <SearchInput/>
          <UserArea/>
        </div>
    );
  }
}

export default App;