import styled, { css } from 'styled-components';
import { space, width, fontSize, color, justifyContent, boxShadow, alignItems } from 'styled-system';

const inlineFlex = css`
  display: inline-flex;
`;

export default styled.div`
  display: flex;
  ${({ inline }) => inline && inlineFlex}
  ${alignItems}
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${justifyContent}
  ${boxShadow}
`;
