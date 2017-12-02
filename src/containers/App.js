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
    const { snapshot, bookings, activitys, emploeys, loading } = this.props;
    if (loading) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
      <Layout snapshot={snapshot} bookings={bookings} activitys={activitys} emploeys={emploeys} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

