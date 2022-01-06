import { GlobalTheme } from '../src/components/Globals/GlobalTheme';
import { GlobalStyle } from '../src/components/Globals/GlobalStyles';

export const decorators = [
  (Story) => (
    <GlobalTheme>
      <GlobalStyle />
      <Story />
    </GlobalTheme>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F0F0F0',
      },
      {
        name: 'grey',
        value: '#A9A9A9',
      },
      {
        name: 'dark',
        value: '#373737',
      },
    ],
  },
};
