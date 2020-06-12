import React, { Component } from 'react';


import SearchBar from './Components/SearchBar/SearchBar';
import youtube from './apis/Youtube';

import './App.css';

class App extends Component {



  onTermSubmit = (term) => {
    const KEY = 'AIzaSyDQxkP55Mnu7bzd3wQR5dle_XNl077YGiw';
    youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
