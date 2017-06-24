import React, { Component } from 'react';
import {Col, Panel} from 'react-bootstrap';
import { connect } from 'react-redux';
import Typist from 'react-typist';

class VideoDetail extends Component {

  render() {
    let {selectedVideo} = this.props;
    if(!selectedVideo) {
      return (
        <div>Loading...</div>
      )
    }

  const videoId = selectedVideo.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

    return(
      <Col xs={8}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <Panel header={selectedVideo.snippet.title}>
              {selectedVideo.snippet.description}
        </Panel>
      </Col>
    );
  }
}



function mapStateToProps(state) {
  return {
    selectedVideo: state.video.selectedVideo
  };
}

export default connect(mapStateToProps)(VideoDetail);
