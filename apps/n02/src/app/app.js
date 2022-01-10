import { GlobalTheme } from '../components/Globals/GlobalTheme';
import { GlobalStyle } from '../components/Globals/GlobalStyles';

import styled from 'styled-components';
import Data from '../data/cardData.js';
import PreviewCard from '../components/PreviewCard/PreviewCard.js';

const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
`;

const CardGrid = styled.div`
  display: flex;
  flex-flow: column;
  margin: 2rem 0 0 0;

  @media screen and (min-width: 600px) {
    flex-flow: row;
    margin: 0 0 0 0;
  }
`;

export function App() {
  return (
    <GlobalTheme>
      <GlobalStyle />
      <PageWrapper>
        <CardGrid>
          {Data.map((item, index) => {
            return (
              <PreviewCard
                icon={item.icon}
                cardColor={item.cardColor}
                children={item.description}
                title={item.title}
              />
            );
          })}
        </CardGrid>
      </PageWrapper>
    </GlobalTheme>
  );
}
export default App;
