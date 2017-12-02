import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'components';
import { mapStateToProps, mapDispatchToProps } from './App.Selectors';

class App extends Component {
  componentDidMount() {
    this.props.getSnapshot();
    this.props.getBookings();
    this.props.getActivity();
  }
  render() {
    const { snapshot, bookings, activitys, emploeys } = this.props;
    console.log(emploeys);
    return (
      <Layout snapshot={snapshot} bookings={bookings} activitys={activitys} emploeys={emploeys} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

