import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col} from 'react-bootstrap';

class VideoList extends Component {

  renderList() {
    //videos will be defined in mapStateToProps function.
    //whatever state defined in mapStateToProps will be available as this.props here.
    return this.props.videos.map((video) => {
      return (
        <li key={video.title} className="list-group-item">{video.title}</li>
      );
    })
  }

  render() {
    return(
      <Col xs={4}>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </Col>
    );
  }
}
//whenever our state changes, this function will render again
function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

export default connect(mapStateToProps)(VideoList);
