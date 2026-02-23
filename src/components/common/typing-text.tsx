import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingText({ text, className = '', speed = 100 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="cursor-blink">|</span>
    </span>
  );
}
