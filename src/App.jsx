import React, { useState } from 'react';
import { GitGraph, Map, Play, Download, GitBranch, RefreshCw, Users, Rocket } from 'lucide-react';

import { Chapter1Concept } from './components/Chapter1Concept';
import { Chapter2Flowchart } from './components/Chapter2Flowchart';
import { Chapter3PathA } from './components/Chapter3PathA';
import { Chapter4PathB } from './components/Chapter4PathB';
import { Chapter5Branch } from './components/Chapter5Branch';
import { Chapter6Sync } from './components/Chapter6Sync';
import { Chapter7Team } from './components/Chapter7Team';
import { Chapter8Practice } from './components/Chapter8Practice';

const App = () => {
  const [activeTab, setActiveTab] = useState('concept');

  const tabs = [
    { id: 'concept', label: '1. 觀念與準備', icon: <GitGraph size={16} /> },
    { id: 'flow', label: '2. 流程總覽', icon: <Map size={16} /> },
    { id: 'pathA', label: '3. 情境 A', icon: <Play size={16} /> },
    { id: 'pathB', label: '4. 情境 B', icon: <Download size={16} /> },
    { id: 'branch', label: '5. 分支跳躍', icon: <GitBranch size={16} /> },
    { id: 'sync', label: '6. 同步與衝突', icon: <RefreshCw size={16} /> },
    { id: 'team', label: '7. 團隊與 PR', icon: <Users size={16} /> },
    { id: 'practice', label: '8. 實戰演練', icon: <Rocket size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-slate-900 text-white pt-8 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <GitGraph size={200} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Git 時光機實驗室 🚀</h1>
          <p className="text-slate-400 text-lg">
            從零開始，透過互動視覺化理解版本控制的核心邏輯
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 pb-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white p-2 rounded-xl shadow-lg border border-slate-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 flex-1 justify-center whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-md transform scale-105 z-10' 
                  : 'hover:bg-slate-100 text-slate-600 hover:text-indigo-600'
                }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.id.toUpperCase().substring(0,4)}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10 min-h-[600px] transition-all overflow-hidden">
          {activeTab === 'concept' && <Chapter1Concept />}
          {activeTab === 'flow' && <Chapter2Flowchart />}
          {activeTab === 'pathA' && <Chapter3PathA />}
          {activeTab === 'pathB' && <Chapter4PathB />}
          {activeTab === 'branch' && <Chapter5Branch />}
          {activeTab === 'sync' && <Chapter6Sync />}
          {activeTab === 'team' && <Chapter7Team />}
          {activeTab === 'practice' && <Chapter8Practice />}
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center text-slate-400 py-8 text-sm">
        <p>Built for learning Git fundamentals.</p>
      </footer>
      
      {/* Global Styles for Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;