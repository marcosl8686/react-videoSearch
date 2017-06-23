import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import SearchBar from './SearchBar/search';
import Header from './header/header';
import VideoList from '../container/video_list/videoList';


export default class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Header />
        <SearchBar />
        <Row>
          <VideoList />
        </Row>
      </Grid>
    );
  }
}
