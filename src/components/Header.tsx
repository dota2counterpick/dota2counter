
import React from 'react';

interface HeaderProps {
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D2</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">DOTA 2 Counter Pick</h1>
              <p className="text-slate-400 text-sm">Strategic hero selection tool</p>
            </div>
          </div>
          
          <button
            onClick={onReset}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors border border-slate-600"
          >
            Reset All
          </button>
        </div>
      </div>
    </header>
  );
};
