import styled, { css } from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';

const capitalizeStyle = css`
text-transform: capitalize;
`;

export default styled.div`
  display: inline-block;
  ${({ capitalize }) => capitalize && capitalizeStyle}
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
