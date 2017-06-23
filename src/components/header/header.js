import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return(
      <PageHeader className="text-center">Video Searcher <small>Find Your favorite videos here!</small></PageHeader>
    );
  }
}
