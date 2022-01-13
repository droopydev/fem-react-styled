import styled from 'styled-components';
import Proptypes from 'prop-types';

const StyledInput = styled.input`
  &[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    font: inherit;
    color: currentColor;
    width: 2.15em;
    height: 2.15em;
    border: 0.15em solid var(--checkbox-color-border-default);
    border-radius: 1em;
    transform: translateY(-0.075em);

    transition: all 200ms;
    display: grid;
    place-content: center;

    &:hover {
      border: 0.15em solid var(--checkbox-color-border-hover);
    }

    &:checked {
      background: var(--checkbox-color-bg-active);
    }
  }

  &[type='checkbox']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em red;
  }

  &input[type='checkbox']:checked::before {
    transform: scale(1);
  }
`;

const StyledDiv = styled.div`
  display: inline-block;
`;

export const Checkbox = ({ name, label }) => {
  return (
    <>
      <StyledInput type="checkbox" id={name} name={name} />
      <label htmlFor={name} className="visually-hidden">
        {label}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  name: Proptypes.string,
  label: Proptypes.string,
};

Checkbox.defaultProps = {
  name: 'Checkbox',
  label: 'Checkbox',
};
