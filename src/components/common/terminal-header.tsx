import { useState } from 'react';
import { TypingText } from './typing-text';

const tabs = [{ name: 'home' }, { name: 'about-me' }, { name: 'contact' }];

interface TerminalHeaderProps {
  title?: string;
}

export function TerminalHeader({ title }: TerminalHeaderProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className={`bg-black border border-mTeal rounded-lg p-4 font-mono`}>
      <div className="flex justify-between items-center gap-2 mb-3">
        <div className="flex items-center gap-2 mb-3 ">
          <span className="w-3 h-3 rounded-lg  bg-red-500"></span>
          <span className="w-3 h-3 rounded-lg  bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-lg  bg-green-500"></span>
          <span className="ml-2 text-mTeal text-sm">{title || 'Terminal'}</span>
        </div>
        <div className="flex justify-end">
          <div className="flex gap-2">
            {' '}
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.name}
                className={`'text-mTeal' py-1.5 px-4 ${tab.name === activeTab ? 'bg-teal-950 text-s border border-mTeal text-mTeal rounded-sm' : ''}`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b border-mTeal my-2"></div>
      <div className="text-mGray font-mono text-left">
        <span className="text-mTeal text-right">$</span>{' '}
        <TypingText text="Welcome to Douglas Mendes - Senior Software Engineering Manager" />
      </div>
    </div>
  );
}
