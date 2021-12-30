import PricePlan from './PricePlan';

export default {
  title: 'Components/PricePlan',
  component: PricePlan,
};

const PricePlanTemplate = (args) => <PricePlan {...args} />;

export const Default = PricePlanTemplate.bind({});

Default.args = {
  title: 'Annual Plan',
  price: '$59.99/year',
};
