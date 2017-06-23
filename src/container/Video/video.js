import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render() {
    if(!this.props.video){
      return (
        <Col xs={8}>
          <h3> SELECT SOMETHING FIRST </h3>
        </Col>
      );
    }

    return(
      <Col xs={8}>
        <h3> {this.props.video.title} </h3>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.activeVideo
  };
}

export default connect(mapStateToProps)(VideoDetail);
