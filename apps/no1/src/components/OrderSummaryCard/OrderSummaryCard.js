import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';
import PricePlan from '../PricePlan/PricePlan';

import ArticleImage from '../../assets/illustration-hero.svg';

const StyledArticle = styled.article`
  background-color: white;
  max-width: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 7px 20px -4px rgb(28 46 86 / 20%);

  > img {
    max-width: 100%;
    vertical-align: bottom;
  }
`;

const StyledContentWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-flow: column;
  text-align: center;

  > h1 {
    margin-bottom: 30px;
  }

  > p {
    line-height: 1.5em;
    margin-bottom: 30px;
  }
`;

const ButtonsWrapper = styled.div`
  > button:first-child {
    margin: 2rem 0 1rem 0;
  }
`;

const OrderSummaryCard = () => {
  return (
    <StyledArticle>
      <img
        src={ArticleImage}
        alt="Illustration of a teen girl listening to music"
      ></img>
      <StyledContentWrapper>
        <h1>Order Summary</h1>
        <p>
          You can now listen to million of songs, audiobooks, and podcasts on
          any device anywhere you like
        </p>
        <PricePlan title="Annual Plan" price="$59.99/year" />
        <ButtonsWrapper>
          <Button variant="Solid" isFullWidth={true}>
            Proceed To Payment
          </Button>
          <Button variant="Text" isFullWidth={true}>
            Cancel Order
          </Button>
        </ButtonsWrapper>
      </StyledContentWrapper>
    </StyledArticle>
  );
};

export default OrderSummaryCard;
