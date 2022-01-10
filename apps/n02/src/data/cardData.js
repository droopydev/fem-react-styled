import iconSedan from '../assets/icon-sedans.svg';
import iconLuxury from '../assets/icon-luxury.svg';
import iconSuvs from '../assets/icon-suvs.svg';

import { THEME } from '../components/Globals/GlobalTheme';

const Data = [
  {
    icon: iconSedan,
    title: 'Sedans',
    cardColor: THEME.colors.brightOrange,
    description:
      'Choose a sedan for it afforability and excellent fuel economy. Ideal for cruising in the city or your next trip.',
  },
  {
    icon: iconSuvs,
    title: 'Suvs',
    cardColor: THEME.colors.darkCyan,
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vaccination and off-reado adventures.',
  },
  {
    icon: iconLuxury,
    title: 'Luxury',
    cardColor: THEME.colors.veryDarkCyan,
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
  },
];

export default Data;
