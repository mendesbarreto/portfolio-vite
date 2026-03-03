import './App.css';
import { TerminalBlock } from './components/common/terminal-block';
import { TerminalHeader } from './components/common/terminal-header';
import { Highlights } from './features/home/components/highlights';
import { HomeSummary } from './features/home/components/home-summary';

function App() {
  return (
    <div>
      <TerminalHeader />
      <HomeSummary />
      <TerminalBlock title="achievement">
        <Highlights></Highlights>
      </TerminalBlock>
    </div>
  );
}

export default App;
