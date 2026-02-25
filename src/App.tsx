import './App.css';
import { TerminalBlock } from './components/common/terminal-block';
import { TerminalHeader } from './components/common/terminal-header';
import { TypingText } from './components/common/typing-text';

function App() {
  return (
    <div>
      <TerminalHeader />
      <TerminalBlock title="Portfolio"></TerminalBlock>
    </div>
  );
}

export default App;
