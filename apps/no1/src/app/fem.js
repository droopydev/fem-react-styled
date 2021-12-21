import * as React from 'react';
import styled from 'styled-components';
import OrderSummaryCard from '../components/OrderSummaryCard/OrderSummaryCard';

const StyledPageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Fem = () => {
  return (
    <StyledPageWrapper>
      <OrderSummaryCard />
    </StyledPageWrapper>
  );
};

export default Fem;
