import React, {Component} from 'react';
import {Col, FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term:''};
  }
  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("HIT")
  }

  render() {
    return (
      <Col xs={12}>
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
      </Col>
    );
  }
}
