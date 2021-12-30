import React from 'react';

import { GlobalStyle } from '../src/components/Globals/globalStyles';
import { GlobalTheme } from '../src/components/Globals/globalTheme';

export const parameters = {
  options: {
    storySort: {
      order: ['Theme', 'Components'],
    },
  },
};

export const decorators = [
  (Story) => (
    <GlobalTheme>
      <GlobalStyle />
      <Story />
    </GlobalTheme>
  ),
];
