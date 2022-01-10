import { THEME } from '../Globals/GlobalTheme';
import PreviewCard from './PreviewCard';

import iconSedan from '../../assets/icon-sedans.svg';
import iconLuxury from '../../assets/icon-luxury.svg';
import iconSuvs from '../../assets/icon-suvs.svg';
import iconFallback from '../../assets/icon-fallback.svg';

export default {
  component: PreviewCard,
  title: 'Components/PreviewCard',
  parameters: {
    layout: 'centered',
  },
};

const PreviewCardTemplate = (args) => <PreviewCard {...args} />;

export const Sedans = PreviewCardTemplate.bind({});

Sedans.args = {
  icon: iconSedan,
  title: 'Sedans',
  cardColor: THEME.colors.brightOrange,
  children:
    'Choose a sedan for it afforability and excellent fuel economy. Ideal for cruising in the city or your next trip.',
};

export const Suvs = PreviewCardTemplate.bind({});
Suvs.args = {
  icon: iconSuvs,
  title: 'Suvs',
  cardColor: THEME.colors.darkCyan,
  children:
    'Choose a sedan for it afforability and excellent fuel economy. Ideal for cruising in the city or your next trip.',
};

export const Luxury = PreviewCardTemplate.bind({});
Luxury.args = {
  icon: iconLuxury,
  title: 'Luxury',
  cardColor: THEME.colors.veryDarkCyan,
  children:
    'Choose a sedan for it afforability and excellent fuel economy. Ideal for cruising in the city or your next trip.',
};

export const Default = PreviewCardTemplate.bind({});
Default.args = {
  icon: iconFallback,
};
