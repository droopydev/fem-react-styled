import styled from 'styled-components';
import Proptypes from 'prop-types';

const StyledContainer = styled.div`
  display: flex;
  background-color: var(--surface-color);
  padding: 1em;
  border-radius: 0.2rem;

  &:focus-within {
    outline: red;
  }
`;

const FakeCheckbox = styled.div`
  height: 2em;
  width: 2em;
  border-radius: 1em;
  border: 2px solid var(--checkbox-color-border-default);
  margin: auto 2rem auto 0;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  color: currentColor;
  font-size: 1rem;
  font-family: var(--font-family-primary);

  &:focus {
    color: var(--text-color);
    outline: none;
  }
`;

export const InputText = ({ onSubmit, onChange, inputValue }) => {
  return (
    <StyledContainer className="test">
      <FakeCheckbox />
      <form onSubmit={onSubmit}>
        <label className="visually-hidden" for="add-todo">
          Add a todo item
        </label>
        <StyledInput
          type="text"
          id="add-todo"
          name="add-todo"
          placeholder="E.g Get a Job"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </StyledContainer>
  );
};

// InputText.propTypes = {
//   placeholder: Proptypes.string,
// };

// InputText.defaultProps = {
//   placeholder: 'E.g Get a job',
// };
