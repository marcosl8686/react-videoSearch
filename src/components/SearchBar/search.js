import React, {Component} from 'react';
import {Col, FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';
import {fetchVideo} from '../../actions/index';
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
    let {dispatch} = this.props;
    dispatch(fetchVideo(this.state.term));
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
        videos: state.video.videos
    };
}


export default connect(mapStateToProps)(SearchBar);
