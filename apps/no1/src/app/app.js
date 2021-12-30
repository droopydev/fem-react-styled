import Fem from './fem';
import { GlobalStyle } from '../components/Globals/globalStyles';
import { GlobalTheme } from '../components/Globals/globalTheme';

export function App() {
  return (
    <GlobalTheme>
      <GlobalStyle />
      <Fem />
    </GlobalTheme>
  );
}
export default App;
