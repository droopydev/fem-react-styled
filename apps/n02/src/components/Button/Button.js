import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';

import { THEME } from '../Globals/GlobalTheme';

const StyledButton = styled.button`
  ${({ theme, textColor }) => css`
    display: inline-block;
    text-align: center;
    padding: 1em 2em;
    font-family: inherit;
    font-size: 1rem;
    color: ${textColor};
    background-color: ${theme.colors.transparentWhite};
    border: none;
    border-radius: 2em;
  `}
`;

export const Button = (props) => {
  const { children, textColor } = props;

  return <StyledButton textColor={textColor}>{children}</StyledButton>;
};

Button.propTypes = {
  textColor: Proptypes.string,
};

Button.defaultProps = {
  textColor: THEME.colors.brightOrange,
};
