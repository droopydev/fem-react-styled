import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';

import Button from '../Button/Button';
import iconFallback from '../../assets/icon-fallback.svg';

const CardContainer = styled.div`
  ${({ theme, cardColor }) => css`
    background-color: ${cardColor};
    display: flex;
    flex-flow: column;
    height: 100%;
    padding: 2.5rem;

    > img {
      display: inline-block;
      margin-right: auto;
    }

    > p {
      color: ${theme.colors.transparentWhite};
      line-height: 1.5em;
      margin-bottom: 2rem;
    }

    > h3 {
      font-size: ${theme.typography.size.xxxl};
      font-family: ${theme.typography.fontFamily.secondary};
      text-transform: uppercase;
    }
  `}
`;

const ButtonWrapper = styled.div`
  flex: 1 1 100%;
  display: flex;

  > button {
    margin-top: auto;
  }
`;

const PreviewCard = ({ cardColor, children, icon, title }) => {
  function fallbackIcon(ev) {
    ev.target.src = iconFallback;
  }

  function checkColor(propsColor) {
    return CSS.supports(`background-color: ${propsColor}`) ? propsColor : 'red';
  }

  return (
    <CardContainer cardColor={checkColor(cardColor)}>
      <img src={icon} alt="Icon" onError={fallbackIcon} />
      <h3>{title}</h3>
      <p>{children}</p>
      <ButtonWrapper>
        <Button textColor={checkColor(cardColor)}>Learn More</Button>
      </ButtonWrapper>
    </CardContainer>
  );
};

export default PreviewCard;

PreviewCard.propTypes = {
  cardColor: Proptypes.string,
  icon: Proptypes.string,
  children: Proptypes.string,
  title: Proptypes.string,
};

PreviewCard.defaultProps = {
  icon: iconFallback,
  cardColor: 'gray',
  children:
    'Ullamco eu aute nulla elit voluptate esse velit adipisicing ut enim amet veniam aute eu.',
  title: 'Card Title',
};
