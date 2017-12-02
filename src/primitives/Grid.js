import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { space, color } from 'styled-system';

export const GridStyled = styled(Grid)`
 ${color}
 font-family: Lato;
 width: 100%;
`;

export const RowStyled = styled(Row)`
${color}
${space}
`;

export const ColStyled = styled(Col)`
${color}
${space}
`;
