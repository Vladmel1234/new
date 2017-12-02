import React from 'react';
import PropTypes from 'prop-types';
import colors from 'app-colors';
import styled from 'styled-components';
import timeago from 'timeago.js';
import { Aux } from 'components';
import { Line } from 'rc-progress';
import { Card, ActivityCard, InlineCard, SidebarList, SidebarListItem, Flex, Avatar } from 'primitives';

const ActivityIndicator = styled.div`
    display: inline-block;
    border: 2px solid ${({ color }) => color};
    border-radius: 50%;
    width: 6px;
    height: 6px;
    margin-right: 14px;
`;

const TimePill = styled.div`
    display: inline-block;
    background-color: ${colors.headerBlue};
    border-radius: 10px;
    padding: 0 5px;
    color: ${colors.gray};
`;

const activityColors = {
  CHECK_IN: 'green',
  MAINTENANCE: 'red',
  NEW_EMPLOYEE: 'yellow'
};

const normalizeString = (str) => (
  str.replace(/_/ig, ' ').toLowerCase()
);

const Sidebar = ({ activitys, emploeys }) => (
  <Aux>
    <Card py={30} color={colors.white}>Recent activity</Card>
    <SidebarList>
      {activitys.map((activity, key) => (
        <SidebarListItem width={220} key={key}>
          <Flex align="baseline">
            <ActivityIndicator color={colors[activityColors[activity.activityType]]} />
            <Flex width="100%" inline justify="space-between">
              <InlineCard capitalize color={colors.white} fontSize={12}>{normalizeString(activity.activityType)}</InlineCard>
              <TimePill>{timeago().format(activity.occurredAt)}</TimePill>
            </Flex>
          </Flex>
          <ActivityCard
            pl={18}
            color={colors.gray}
            fontSize={12}
            borderColor={colors.headerBlue}
            borderWidth={2}
            borderLeft
          >
            <Card py={5}>{activity.description}</Card>
          </ActivityCard>
        </SidebarListItem>
      ))}
    </SidebarList>
    <Card fontSize={17} mt={60} pb={30} color={colors.white}>Employee stats</Card>
    <SidebarList>
      {emploeys.map((employee, key) => (
        <SidebarListItem width={220} key={key}>
          <Card lineHeight>
            <Avatar src={employee.profileImageUrl} alt={employee.firstName} />
            <InlineCard pl={10} width="80%" capitalize color={colors.white} fontSize={12}>
              <Flex justify="space-between">
                <InlineCard>{employee.firstName}</InlineCard>
                <InlineCard>{employee.hours} Hours</InlineCard>
              </Flex>
              <Line
                percent={employee.hours * 0.1}
                strokeColor={colors.green}
                trailColor={colors.headerBlue}
                strokeWidth={2}
                trailWidth={2}
              />
            </InlineCard>
          </Card>
        </SidebarListItem>
      ))}

    </SidebarList>
  </Aux>
);

Sidebar.propTypes = {
  activitys: PropTypes.array,
  emploeys: PropTypes.array
};

export default Sidebar;
