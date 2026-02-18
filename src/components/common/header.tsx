import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background p-4">
      <div className="flex max-w-1064 mx-auto px-4 justify-between items-center h-16">
        {/* Logo area*/}
        <div className="flex items-center font-bold">
          <img src="/icons/ic_logo.svg" alt="Logo" className="mr-2" width={16} height={16} />
        </div>
        {/* Hambuger button - for mobile */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-mBlue"></span>
          <span className="w-6 h-0.5 bg-mBlue mt-1"></span>
          <span className="w-6 h-0.5 bg-mBlue mt-1"></span>
        </button>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/">
              <span className="text-mTeal">#</span>home
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
