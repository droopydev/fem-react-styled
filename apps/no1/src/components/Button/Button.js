import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const BaseButton = styled.button`
  ${({ theme, isFullWidth }) => css`
    display: inline-block;
    text-align: center;
    width: ${isFullWidth ? '100%' : 'auto'};
    padding: 1em;

    font-size: 1rem;
    font-weight: normal;
    font-family: inherit;
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    -webkit-appearance: button;
  `}
`;

const SolidButton = styled(BaseButton)`
  ${({ theme }) => css`
    background-color: ${theme.colours.blue50};
    border-radius: 10px;
    border: none;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-weight: 700;
    transition: background-color 300ms;

    &:hover {
      background-color: ${theme.colours.blue30};
    }
  `}
`;

const TextButton = styled(BaseButton)`
  ${({ theme }) => css`
    color: ${theme.colours.neutral50};
    border: none;
    background-color: transparent;
    font-weight: 700;
    transition: color 300ms;

    &:hover {
      color: ${theme.colours.neutral100};
    }
  `}
`;

const getButtonStyles = (variant) => {
  if (variant === 'Solid') {
    return SolidButton;
  } else if (variant === 'Text') {
    return TextButton;
  }
};

export const Button = (props) => {
  const { variant, isFullWidth, children } = props;

  const StyledButton = getButtonStyles(variant);

  return (
    <StyledButton isFullWidth={isFullWidth} type="button">
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  isFullWidth: PropTypes.bool,
};
