import './App.css';
import { TypingText } from './components/common/typing-text';

function App() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Typing</h1>
      <div className="text-mGray font-mono">
        <span className="text-mTeal">$</span>{' '}
        <TypingText text="Welcome to Douglas Mendes - Portfolio" />
      </div>
    </div>
  );
}

export default App;
