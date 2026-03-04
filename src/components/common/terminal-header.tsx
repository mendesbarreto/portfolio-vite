import { useState } from 'react';
import { TypingText } from './typing-text';
import { TerminalWindowControl } from './terminal-window-control';
import { Link, useLocation } from '@tanstack/react-router';

const tabs = [
  { name: 'home', path: '/' },
  { name: 'about-me', path: '/about' },
  { name: 'contact', path: '/contacts' },
];

export function TerminalHeader() {
  const pathname = useLocation().pathname || 'home';
  const activeTab = tabs.find((tab) => tab.path === pathname)?.name || 'home';

  return (
    <div className={`bg-black border border-mTeal rounded-lg p-4 font-mono`}>
      <div className="flex justify-between items-center gap-2 mb-3 border-b border-mTeal pb-3">
        <TerminalWindowControl />
        <div className="flex justify-end">
          <div className="flex justify-between items-center gap-2 ">
            {' '}
            <nav className="flex gap-2">
              {tabs.map((tab) => (
                <Link
                  to={tab.path}
                  key={tab.name}
                  className={`py-1 px-4 rounded focus:outline-none ${
                    tab.name === activeTab
                      ? 'bg-secondary text-mTeal border border-mTeal'
                      : 'text-mGray hover:text-mTeal hover:bg-background-light/50'
                  }`}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="text-mGray font-mono text-left">
        <span className="text-mTeal text-right mr-2">$</span>
        <TypingText text="Welcome to Douglas Mendes - Senior Software Engineering Manager" />
      </div>
    </div>
  );
}
