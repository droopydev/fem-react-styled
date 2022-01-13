import { Checkbox } from './Checkbox';

export default {
  component: Checkbox,
  title: 'Component/Checkbox',
  parameters: {
    layout: 'centered',
  },
};

const CheckboxTemplate = (args) => <Checkbox {...args} />;

export const Default = CheckboxTemplate.bind({});

Default.args = {
  name: 'Default',
  label: 'Ex incididunt aliquip cillum tempor occaecat irure ullamco.',
};
