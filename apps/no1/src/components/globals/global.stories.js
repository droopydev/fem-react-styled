import { THEME } from './globalTheme';
import styled, { css } from 'styled-components';

export default {
  title: 'Theme/Colours',
};

const Box = styled.div`
  ${({ color }) => css`
    width: 50px;
    height: 50px;
    background-color: ${color};
  `}
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const Colours = () => {
  const colors = Object.entries(THEME.colours);
  return (
    <div>
      {colors.map(([name, value], index) => {
        return (
          <ColorWrapper>
            <Box color={value} />
            <p>
              {name}: {value}
            </p>
          </ColorWrapper>
        );
      })}
    </div>
  );
};
