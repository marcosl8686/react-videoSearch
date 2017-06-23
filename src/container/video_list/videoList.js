import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col} from 'react-bootstrap';
import { selectVideo, YTSearch } from '../../actions/index';
import { bindActionCreators } from 'redux';

class VideoList extends Component {

  renderList() {
    //videos will be defined in mapStateToProps function.
    //whatever state defined in mapStateToProps will be available as this.props here.
    return this.props.videos.map((video) => {
      return (
        <li
          key={video.title}
          onClick={() => this.props.selectVideo(video)}
          className="list-group-item"
          >{video.title}</li>
      );
    })
  }

  render() {
    if(!this.props.videos){
      return (
        <Col xs={4}>
          <h5> SELECT SOMETHING FIRST </h5>
        </Col>
      );
    }
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
    //videos its a direct reference from index.js in reducers
    videos: state.videos
  };
}

//ACTION
//anything returned from this function will end up as props in the VideoList container
function mapDispatchToProps(dispatch) {
  //whenever selectVideo is called, the result should be passed to all reducers
  return bindActionCreators({ selectVideo: selectVideo}, dispatch )
}

//Promote VideoList from component to a container - it needs to know about this new dispatch method,
// selectVideo . Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
