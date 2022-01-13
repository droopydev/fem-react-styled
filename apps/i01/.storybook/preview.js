import { GlobalStyles } from '../src/components/Globals/GlobalStyles';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
