import './App.css';
import { TerminalBlock } from './components/common/terminal-block';
import { TypingText } from './components/common/typing-text';

function App() {
  return (
    <TerminalBlock title="Douglas">
      <div className="text-mGray font-mono">
        <span className="text-mTeal">$</span> <TypingText text="Noemie ama Minicrafit" />
      </div>
    </TerminalBlock>
  );
}

export default App;
