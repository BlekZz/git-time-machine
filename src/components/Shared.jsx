import React, { useState, useEffect, useRef } from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    gray: "bg-slate-100 text-slate-600",
    red: "bg-red-100 text-red-800",
    indigo: "bg-indigo-100 text-indigo-800",
    pink: "bg-pink-100 text-pink-800"
  };
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-mono font-medium ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
};

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6 border-l-4 border-indigo-500 pl-4">
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
  </div>
);

export const InstructionalText = ({ title, children, icon }) => (
  <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-5 mb-6 text-slate-700 leading-relaxed text-sm">
    <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
      {icon ? icon : <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>}
      {title}
    </h4>
    {children}
  </div>
);

export const TerminalSim = ({ logs, onCommand, promptLabel = "~/project (main)", height="h-64" }) => {
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    const container = endRef.current?.parentElement;
    if (container) container.scrollTop = container.scrollHeight;
  }, [logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (onCommand) onCommand(input);
    setInput("");
  };

  return (
    <div className={`bg-slate-900 rounded-lg overflow-hidden font-mono text-sm text-slate-300 shadow-xl flex flex-col ${height}`}>
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-slate-400">bash — git simulation</span>
      </div>
      <div className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
        {logs.map((log, i) => (
          <div key={i} className={`${log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-green-400' : log.type === 'warning' ? 'text-yellow-400' : 'text-slate-300'} mb-1 break-all`}>
            {log.prefix && <span className="text-slate-500 mr-2 select-none">{log.prefix}</span>}
            {log.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-2 bg-slate-800 flex items-center shrink-0">
        <span className="text-green-400 mr-2">➜</span>
        <span className="text-cyan-400 mr-2 whitespace-nowrap">{promptLabel}</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 text-white placeholder-slate-600 min-w-0"
          placeholder="輸入指令..."
          disabled={!onCommand}
        />
      </form>
    </div>
  );
};
