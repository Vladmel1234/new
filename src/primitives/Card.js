import styled, { css } from 'styled-components';
import { space, width, fontSize, color, boxShadow, borderWidth, borderColor } from 'styled-system';

const capitalizeStyle = css`
  text-transform: capitalize;
`;

const lineHeightStyle = css`
line-height: 20px;
`;

export const Card = styled.div`
  ${({ capitalize }) => capitalize && capitalizeStyle}
  ${({ lineHeight }) => lineHeight && lineHeightStyle}
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${boxShadow}
  ${borderWidth}
  ${borderColor}
`;

export const ActivityCard = styled(Card)`
   box-sizing: content-box;
   margin-left: 3px;
`;
