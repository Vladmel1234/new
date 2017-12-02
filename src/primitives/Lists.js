import styled from 'styled-components';
import colors from 'app-colors';
import { width } from 'styled-system';


export const MainList = styled.ul`
  list-style: none;
  border-bottom: 1px solid ${colors.gray};
  padding: 30px 0;
`;

export const MainListItem = styled.li`
  display: inline-block;
  margin-right: 150px;
  font-size: 12px;
`;

export const SidebarList = styled.ul`
  padding-left: 20px;
`;


export const SidebarListItem = styled.li`
  ${width}
  padding-bottom: 20px;
`;
