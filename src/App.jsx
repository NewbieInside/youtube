import React, { Component } from 'react';


import SearchBar from './Components/SearchBar/SearchBar';
import VideoList from './Components/VideoList/VideoList';
import VideoDetail from './Components/VideoDetail/VideoDetail';

import youtube from './apis/Youtube';


import './App.css';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.onTermSubmit(' buildings ');
  }


  onTermSubmit = async term => {
    const KEY = 'AIzaSyDQxkP55Mnu7bzd3wQR5dle_XNl077YGiw';
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
