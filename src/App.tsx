import './App.css';
import { BaseButton } from './components/common/base-button';
import { TerminalBlock } from './components/common/terminal-block';
import { TerminalHeader } from './components/common/terminal-header';

function App() {
  return (
    <div>
      <TerminalHeader />
      <TerminalBlock title="Portfolio">
        <BaseButton title="contact-me"></BaseButton>
      </TerminalBlock>
    </div>
  );
}

export default App;
