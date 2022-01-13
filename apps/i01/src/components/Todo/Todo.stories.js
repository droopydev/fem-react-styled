import ToDo from './Todo';

export default {
  component: ToDo,
  title: 'Component/ToDO',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      action: 'hello',
    },
  },
};

const Template = (args) => <ToDo {...args} />;

export const Default = Template.bind({});
