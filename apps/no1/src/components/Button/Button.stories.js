import { Button } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Solid = ButtonTemplate.bind({});

Solid.args = {
  variant: 'Solid',
  isFullWidth: false,
  children: 'Solid Button',
};

export const Text = ButtonTemplate.bind({});

Text.args = {
  variant: 'Text',
  isFullWidth: false,
  children: 'Text Button',
};
