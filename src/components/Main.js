import React from 'react';
import PropTypes from 'prop-types';
import colors from 'app-colors';
import { Aux } from 'components';
import { Card, Table, Tbody, Tr, Td, GreenDot, Col, Row, MainList, MainListItem } from 'primitives';
import styled from 'styled-components';
import moment from 'moment';

const fullname = (first, last) => (
  `${first} ${last}`
);

const normalizeString = (str) => (
  str.replace(/_/ig, ' ').toLowerCase()
);

const betweenTwoDates = (firstDate, secondDate) => {
  const from = moment(firstDate.replace('-', '/'), 'D/M/YYYY');
  const to = moment(secondDate.replace('-', '/'), 'D/M/YYYY');
  return to.diff(from, 'days');
};

const colorChanger = (num) => {
  if (num < 41) return 'red';
  if (num >= 41 && num <= 86) return 'yellow';
  return 'green';
};

const Avilablity = styled.div`
    border: 3px solid ${({ color }) => color};
    color: ${({ color }) => color};
    border-radius: 50%;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
    font-size: 40px;
`;

const Main = ({ snapshot, bookings }) => {
  return (
    <Aux>
      <Card>
        <MainList>
          <MainListItem>
            <Card fontSize={24} color={colors.white}>
              {snapshot.availableRooms}
            </Card>
            <Card color={colors.gray}>
            Rooms Availabe
            </Card>
          </MainListItem>
          <MainListItem>
            <Card fontSize={24} color={colors.white}>
              {snapshot.checkedIn}
            </Card>
            <Card color={colors.gray}>
            Checked In
            </Card>
          </MainListItem>
          <MainListItem>
            <Card fontSize={24} color={colors.white}>
              {snapshot.reservedRooms}
            </Card>
            <Card color={colors.gray}>
            Reserved Rooms
            </Card>
          </MainListItem>
        </MainList>
      </Card>
      <Card pt={30}>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Card pb={30} color={colors.white}>Arrived This Week</Card>
            <Table>
              <Tbody>
                {bookings.map((booking, key) => (
                  <Tr key={key} py={24} color={colors.gray}>
                    <Td px={[0, 20]}>
                      <GreenDot />
                      {fullname(booking.firstName, booking.lastName)}
                    </Td>
                    <Td px={[0, 20]} transform="capitalize">{normalizeString(booking.roomType)}</Td>
                    <Td px={[0, 20]}>{betweenTwoDates(booking.checkInDate, booking.checkOutDate)} Nights</Td>
                    <Td>{`${booking.checkInDate.replace(/-/ig, '.')} - ${booking.checkOutDate.replace(/-/ig, '.')}`}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Card pb={30} color={colors.white}>Week availability</Card>
            <Avilablity color={colors[colorChanger(snapshot.weekAvailabilityPercent)]}>
              <span>{snapshot.weekAvailabilityPercent}%</span>
            </Avilablity>
          </Col>
        </Row>
      </Card>
    </Aux>
  );
};

Main.propTypes = {
  bookings: PropTypes.array,
  snapshot: PropTypes.object
};

export default Main;
