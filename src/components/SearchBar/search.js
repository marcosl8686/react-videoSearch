import React, {Component} from 'react';
import {Col, FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';
import FetchVideo from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
  }
  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.FetchVideo(this.state.term);
  }

  render() {
    return (
      <Col xs={12}>
        <form>
          <FormGroup >
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search"
                value={this.state.term}
                onChange={this.onInputChange} />
              <InputGroup.Button>
                <Button type="submit" onClick={this.onFormSubmit}>Search</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </form>
      </Col>
    );
  }
}

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
    return bindActionCreators({ FetchVideo: FetchVideo}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
