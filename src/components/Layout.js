import React from 'react';
import colors from 'app-colors';
import { Header, Main, Sidebar } from 'components';
import { Grid, Row, Col } from 'primitives';

const Layout = ({ snapshot, bookings, activitys, emploeys }) => {
  return (
    <Grid bg={colors.mainBlue}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Header />
        </Col>
      </Row>
      <Row pl={90}>
        <Col xs={12} sm={12} md={9} lg={9}>
          <Main snapshot={snapshot} bookings={bookings} />
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <Sidebar activitys={activitys} emploeys={emploeys} />
        </Col>
      </Row>
    </Grid>
  );
};

export default Layout;
