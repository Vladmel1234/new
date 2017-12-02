import React from 'react';
import colors from 'app-colors';
import { Flex, InlineCard, Avatar } from 'primitives';

const Header = () => {
  return (
    <Flex
      boxShadow="0 5px 10px 0 rgba(0,0,0,0.2)"
      justify="space-between"
      width="100%"
      py={20}
      bg={colors.headerBlue}
    >
      <InlineCard pl={80} uppercase color={colors.gray}>
        BOOKING
      </InlineCard>
      <InlineCard pr={70}>
        <Avatar alt="user" src="src/assets/user.png" />
      </InlineCard>
    </Flex>
  );
};

export default Header;
