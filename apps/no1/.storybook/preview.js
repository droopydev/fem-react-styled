import React from 'react';

import { GlobalStyle } from '../src/components/globals/globalStyles';
import { GlobalTheme } from '../src/components/globals/globalTheme';

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
