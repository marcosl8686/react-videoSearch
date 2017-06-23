import React, {Component} from 'react';
import {Col, FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';

export default class SearchBar extends Component {
  render() {
    return (
      <Col xs={12}>
        <FormGroup>
          <InputGroup>
            <FormControl type="text"/>
            <InputGroup.Button>
              <Button>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Col>
    );
  }
}
