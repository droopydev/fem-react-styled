import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
};

const ButtonTemplate = (args) => <Button {...args} />;

export const Solid = ButtonTemplate.bind({});

Solid.args = {
  children: 'Solid Button',
};
