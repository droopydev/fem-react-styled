import Fem from './fem';
import { GlobalStyle } from '../components/globals/globalStyles';
import { GlobalTheme } from '../components/globals/globalTheme';

export function App() {
  return (
    <GlobalTheme>
      <GlobalStyle />
      <Fem />
    </GlobalTheme>
  );
}
export default App;
