import React, { Component } from 'react';
import {Col, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import Typist from 'react-typist';

class VideoDetail extends Component {
  render() {
    if(!this.props.video){
      return (
        <Col xs={8}>
          <Typist>
            <h5> Welcome! Select a Video to Start </h5>
          </Typist>
        </Col>
      );
    }
  const videoId = this.props.video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

    return(
      <Col xs={8}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <Panel header={this.props.video.snippet.title}>
              {this.props.video.snippet.description}
        </Panel>
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
