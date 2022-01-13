import { InputText } from './InputText';

export default {
  component: InputText,
  title: 'Component/InputText',
  parameters: {
    layout: 'centered',
  },
};

const InputTextTemplate = (args) => <InputText {...args} />;

export const Default = InputTextTemplate.bind({});
