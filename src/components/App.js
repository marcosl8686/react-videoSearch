import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import SearchBar from './SearchBar/search';
import Header from './header/header';
import VideoList from '../container/video_list/videoList';
import VideoDetail from '../container/Video/video';
import {connect} from 'react-redux';
import {fetchVideo} from '../actions/index';


class App extends Component {
  componentWillMount() {
    const {dispatch} = this.props

    dispatch(fetchVideo("cat"));
  }

  render() {
    return (
      <Grid className="App">
        <Header />
        <SearchBar />
        <Row>
          <VideoDetail />
          <VideoList />
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps)(App);
