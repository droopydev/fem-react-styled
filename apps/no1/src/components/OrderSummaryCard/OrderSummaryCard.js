import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import PricePlan from '../PricePlan/PricePlan';

const StyledArticle = styled.article`
  background-color: white;
  max-width: 400px;
  border-radius: 1rem;
`;

const StyledContentWrapper = styled.div`
  padding: 2rem;
`;

const OrderSummaryCard = () => {
  return (
    <StyledArticle>
      <img></img>
      <StyledContentWrapper>
        <h1>Order Summary Card</h1>
        <p>
          You can now listen to million of songs, audiobooks, and podcasts on
          any device anywhere you like
        </p>
        <PricePlan />
        <Button>Proceed To Payment</Button>
        <Button>Cancel Order</Button>
      </StyledContentWrapper>
    </StyledArticle>
  );
};

export default OrderSummaryCard;
