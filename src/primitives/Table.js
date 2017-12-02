import styled from 'styled-components';
import { space, width, fontSize, color, justifyContent, boxShadow } from 'styled-system';
import { textTransform } from 'app-system';
import colors from 'app-colors';

export const Table = styled.table`

`;

export const Tbody = styled.tbody`

`;

export const Tr = styled.tr`
   ${color}
   border-bottom: 1px solid ${colors.gray};
   border-top: 1px solid ${colors.gray};
   height: 42px;
`;

export const Td = styled.td`
    ${textTransform}
    ${space}
    font-size: 14px;
    ${width}
`;


export const GreenDot = styled.div`
    display: inline-block;
    width:7.5px;
    height:7.5px;
    border-radius: 50px;
    background-color: ${colors.green};
    margin-right: 12px;
`;
