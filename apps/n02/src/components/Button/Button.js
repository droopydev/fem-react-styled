import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';

const StyledButton = styled.button`
  ${({ theme, textColor }) => css`
    background-color: ${theme.colors.white};
    border-radius: 2em;
    border: none;
    color: ${textColor};
    display: inline-block;
    font-family: inherit;
    font-size: 1rem;
    padding: 1em 2em;
    text-align: center;
    transition: 300ms;
    outline: 2px solid ${theme.colors.white};

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.2);
      color: ${theme.colors.white};
    }
  `}
`;

const Button = (props) => {
  const { children, textColor } = props;

  return <StyledButton textColor={textColor}>{children}</StyledButton>;
};

Button.propTypes = {
  textColor: Proptypes.string,
  children: Proptypes.string,
};

Button.defaultProps = {
  textColor: 'Black',
  children: 'Button',
};

export default Button;
