import './App.css';
import { BaseButton } from './components/common/base-button';
import { TerminalBlock } from './components/common/terminal-block';
import { TerminalHeader } from './components/common/terminal-header';
import { HomeSummary } from './features/home/components/home-summary';

function App() {
  return (
    <div>
      <TerminalHeader />
      <HomeSummary />
      <TerminalBlock title="Portfolio">[]</TerminalBlock>
    </div>
  );
}

export default App;
