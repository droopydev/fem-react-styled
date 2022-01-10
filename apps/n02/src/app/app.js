import { GlobalTheme } from '../components/Globals/GlobalTheme';
import { GlobalStyle } from '../components/Globals/GlobalStyles';

import styled from 'styled-components';
import Data from '../data/cardData.js';
import PreviewCard from '../components/PreviewCard/PreviewCard.js';

const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  width: 80%;
`;

const CardGrid = styled.ul`
  display: grid;
  margin: 2rem 0 0 0;
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);

    > li:last-child {
      grid-column: span 2;
    }
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 0 0 0;

    > li:last-child {
      grid-column: 3;
    }
  }
`;

export function App() {
  return (
    <GlobalTheme>
      <GlobalStyle />
      <PageWrapper>
        <CardGrid>
          {Data.map((item) => {
            return (
              <li key={item.title}>
                <PreviewCard
                  icon={item.icon}
                  cardColor={item.cardColor}
                  children={item.description}
                  title={item.title}
                />
              </li>
            );
          })}
        </CardGrid>
      </PageWrapper>
    </GlobalTheme>
  );
}
export default App;
