import React, { useState, useEffect, useRef } from 'react';
import { 
  GitGraph, 
  GitCommit, 
  GitPullRequest, 
  Github, 
  Server, 
  Laptop, 
  ArrowRight, 
  ArrowLeft, 
  Users, 
  User, 
  Save, 
  Cloud, 
  CheckCircle,
  AlertCircle,
  Terminal,
  FileText,
  FileCode,
  EyeOff,
  Plus,
  Trash2,
  Lock,
  Database,
  GitMerge,
  GitBranch,
  Link,
  Download,
  Globe,
  Folder
} from 'lucide-react';

// --- Shared Components ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    gray: "bg-slate-100 text-slate-600",
    red: "bg-red-100 text-red-800",
    indigo: "bg-indigo-100 text-indigo-800",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-xs font-mono font-medium ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
};

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-6 border-l-4 border-indigo-500 pl-4">
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
  </div>
);

const InstructionalText = ({ title, children }) => (
  <div className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-5 mb-6 text-slate-700 leading-relaxed text-sm">
    <h4 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
      {title}
    </h4>
    {children}
  </div>
);

// --- Simulation Components ---

// 模擬終端機
const TerminalSim = ({ logs, onCommand, promptLabel = "~/project (main)", height="h-64" }) => {
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onCommand(input);
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
        />
      </form>
    </div>
  );
};

// --- Chapter Contents ---

// Chapter 1: 基礎概念
const ChapterConcept = () => (
  <div className="space-y-8 animate-fade-in">
    <SectionTitle title="1. 什麼是 Git？" subtitle="時光機與平行宇宙的結合" />
    
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
            <GitGraph size={24} />
          </div>
          <h3 className="text-lg font-bold">Git 是一種「版本控制系統」</h3>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">
          想像你在寫報告，存檔成 `報告_v1.doc`, `報告_最終版.doc`, `報告_真的最後版.doc`。
        </p>
        <p className="text-slate-600 leading-relaxed">
          Git 幫你自動管理這些版本。它像一台<strong>時光機</strong>，每次你「存檔 (Commit)」時，它就會拍一張快照。你可以隨時回到過去的任何時間點，而不需要複製一堆檔案。
        </p>
      </Card>

      <Card>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
            <Server size={24} />
          </div>
          <h3 className="text-lg font-bold">Git vs. GitHub/GitLab</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <GitGraph className="text-slate-400 mt-1 shrink-0" size={18} />
            <div>
              <span className="font-bold text-slate-700">Git (工具):</span>
              <p className="text-sm text-slate-600">安裝在你電腦上的軟體。負責記錄你的修改歷史。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Github className="text-slate-400 mt-1 shrink-0" size={18} />
            <div>
              <span className="font-bold text-slate-700">GitHub / GitLab (平台):</span>
              <p className="text-sm text-slate-600">雲端的儲存空間（類似 Google Drive for Code）。同時提供了社交功能和專案管理工具。</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

// Chapter 2: Repo Setup (Modified)
const ChapterSetup = () => {
  const [mode, setMode] = useState('init'); // 'init' or 'clone'
  const [repoUrl, setRepoUrl] = useState('https://github.com/blake/demo-project.git'); // Preset URL
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLinked, setIsLinked] = useState(false);
  const [logs, setLogs] = useState([{ prefix: '$', text: 'Ready to setup repository.' }]);

  const addLog = (text, type = 'info') => {
    setLogs(prev => [...prev, { text, type, prefix: '>' }]);
  };

  const handleInitConnect = () => {
    if (!isInitialized) {
        addLog('Initialized empty Git repository in /project/.git/', 'success');
        setIsInitialized(true);
    }
    
    setTimeout(() => {
        if (repoUrl && !isLinked) {
            addLog(`remote "origin" added. Linked to ${repoUrl}`, 'success');
            setIsLinked(true);
        }
    }, 800);
  };

  const handleClone = () => {
    addLog(`Cloning into 'project'...`, 'info');
    setTimeout(() => {
      addLog(`remote: Enumerating objects: 12, done.`, 'info');
      addLog(`remote: Total 12 (delta 3), reused 0 (delta 0)`, 'info');
      addLog(`Unpacking objects: 100% (12/12), done.`, 'success');
      setIsInitialized(true);
      setIsLinked(true);
    }, 800);
  };

  const reset = () => {
    setIsLinked(false);
    setIsInitialized(false);
    setRepoUrl('https://github.com/blake/demo-project.git');
    setLogs([{ prefix: '$', text: 'Ready.' }]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <SectionTitle title="2. 建立與連結" subtitle="一切的起點：如何開始一個 Git 專案？" />

      <InstructionalText title="如何與世界連結？">
        <p className="mb-2">在開始寫程式之前，我們必須建立 Local (你的電腦) 與 Remote (GitHub) 的連結。這通常有兩種情境：</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>情境 A (Init)：</strong>你已經在寫 code 了，現在想把它推上 GitHub。
              <div className="mt-1 text-xs bg-indigo-100 p-2 rounded text-indigo-800">
                  <span className="font-bold">注意：</span> 當你執行 <code>git init</code> 後，資料夾內會產生一個隱藏的 <code>.git</code> 資料夾。所有的歷史紀錄都存在這裡，千萬不要刪掉它！
              </div>
          </li>
          <li><strong>情境 B (Clone)：</strong>專案已經在 GitHub 上了 (例如公司的專案)，你想要把它下載下來。這時用 <code>git clone</code> 最快。</li>
        </ul>
      </InstructionalText>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Interaction Area */}
        <div className="space-y-6">
          <Card className="bg-slate-50">
            <div className="flex gap-2 mb-6">
              <button 
                onClick={() => { setMode('init'); reset(); }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-all ${mode === 'init' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-600 border-slate-200'}`}
              >
                情境 A: 全新專案 (Init)
              </button>
              <button 
                onClick={() => { setMode('clone'); reset(); }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-all ${mode === 'clone' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white text-slate-600 border-slate-200'}`}
              >
                情境 B: 下載專案 (Clone)
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">GitHub Repository URL</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="flex-1 px-3 py-2 rounded border border-slate-300 text-sm focus:outline-none focus:border-indigo-500 text-slate-600 bg-slate-100"
                  />
                  {mode === 'init' ? (
                    <button 
                      onClick={handleInitConnect}
                      disabled={isLinked}
                      className={`px-4 py-2 rounded text-sm font-bold text-white transition-all ${isLinked ? 'bg-green-500' : 'bg-slate-800 hover:bg-slate-700'}`}
                    >
                      {isLinked ? 'Linked!' : 'Run Init & Link'}
                    </button>
                  ) : (
                    <button 
                      onClick={handleClone}
                      disabled={isLinked}
                      className={`px-4 py-2 rounded text-sm font-bold text-white transition-all ${isLinked ? 'bg-green-500' : 'bg-slate-800 hover:bg-slate-700'}`}
                    >
                      {isLinked ? 'Cloned!' : 'Clone'}
                    </button>
                  )}
                </div>
              </div>

              <div className="p-4 bg-white rounded border border-slate-200 text-sm text-slate-600">
                {mode === 'init' ? (
                  <>
                    <p className={`font-mono p-1 mb-2 rounded transition-colors ${isInitialized ? 'bg-green-100 text-green-800' : 'bg-slate-100'}`}>$ git init</p>
                    <p className={`font-mono p-1 rounded transition-colors ${isLinked ? 'bg-green-100 text-green-800' : 'bg-slate-100'}`}>$ git remote add origin {repoUrl}</p>
                  </>
                ) : (
                  <p className={`font-mono p-1 rounded transition-colors ${isLinked ? 'bg-green-100 text-green-800' : 'bg-slate-100'}`}>$ git clone {repoUrl}</p>
                )}
              </div>
            </div>
          </Card>
          
          <TerminalSim logs={logs} onCommand={() => {}} height="h-40" />
        </div>

        {/* Visual Feedback */}
        <div className="flex items-center justify-center bg-slate-100 rounded-xl border border-slate-200 p-8">
          <div className="relative flex items-center gap-16">
             {/* Local */}
             <div className="flex flex-col items-center z-10 relative">
               <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${isInitialized ? 'bg-indigo-600 text-white' : 'bg-white text-slate-300'}`}>
                 <Laptop size={40} />
               </div>
               {isInitialized && (
                   <div className="absolute -right-2 -top-2 w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 shadow-md animate-fade-in" title=".git folder created">
                       <Folder size={14} className="fill-slate-400" />
                       <span className="absolute text-[8px] font-bold text-slate-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1 ml-0.5">.git</span>
                   </div>
               )}
               <span className="mt-3 font-bold text-slate-600">Local Folder</span>
             </div>

             {/* Connection Line */}
             <div className="absolute left-10 right-10 top-10 h-1 bg-slate-200 -z-0">
               <div className={`h-full bg-green-500 transition-all duration-1000 ease-out ${isLinked ? 'w-full' : 'w-0'}`}></div>
             </div>
             {isLinked && (
               <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold animate-fade-in">
                 {mode === 'init' ? 'Linked' : 'Cloned'}
               </div>
             )}

             {/* Remote */}
             <div className="flex flex-col items-center z-10">
               <div className="w-20 h-20 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-lg">
                 <Github size={40} />
               </div>
               <span className="mt-3 font-bold text-slate-600">GitHub Repo</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chapter 3: 檔案與 Ignore (Modified)
const ChapterFileStatus = () => {
  const [files, setFiles] = useState([]);
  const [logs, setLogs] = useState([{ prefix: '$', text: 'Ready.' }]);
  const [hasGitignore, setHasGitignore] = useState(false);

  const addLog = (text, type = 'info', prefix = '>') => {
    setLogs(prev => [...prev, { text, type, prefix }]);
  };

  const addFile = (name, type) => {
    if (files.some(f => f.name === name)) {
      addLog(`File ${name} already exists.`, 'error');
      return;
    }
    const shouldIgnore = hasGitignore && (name.endsWith('.env') || name === '.DS_Store' || name.includes('node_modules'));
    const status = shouldIgnore ? 'ignored' : 'untracked';
    
    setFiles([...files, { name, type, status }]);
    addLog(`Created ${name}`, 'success');
  };

  const toggleGitignore = () => {
    if (hasGitignore) {
      addLog('.gitignore removed.', 'warning');
      setHasGitignore(false);
      setFiles(files.map(f => f.status === 'ignored' ? { ...f, status: 'untracked' } : f));
    } else {
      addLog('Created .gitignore with rules: *.env, node_modules/', 'success');
      setHasGitignore(true);
      setFiles(files.map(f => {
        const matchesPattern = f.name.endsWith('.env') || f.name.includes('node_modules');
        if (f.status === 'untracked' && matchesPattern) {
          return { ...f, status: 'ignored' };
        }
        return f;
      }));
      
      if (files.some(f => f.status === 'staged' && (f.name.endsWith('.env') || f.name.includes('node_modules')))) {
        addLog('提示：已經 Staged 的檔案不會被 .gitignore 影響。', 'warning');
      }
    }
  };

  const handleCommand = (cmd) => {
    const command = cmd.trim();
    addLog(command, 'input', '$');

    if (command === 'git status') {
      const untracked = files.filter(f => f.status === 'untracked');
      const staged = files.filter(f => f.status === 'staged');
      const committed = files.filter(f => f.status === 'committed');
      
      let isClean = true;

      if (staged.length > 0) {
        addLog('Changes to be committed (Staged):', 'success');
        staged.forEach(f => addLog(`  new file:   ${f.name}`, 'success', ''));
        isClean = false;
      }
      if (untracked.length > 0) {
        addLog('Untracked files:', 'error');
        untracked.forEach(f => addLog(`  ${f.name}`, 'error', ''));
        isClean = false;
      }
      if (committed.length > 0 && isClean) {
         addLog('Nothing to commit, working tree clean.', 'info');
      } else if (files.length === 0) {
         addLog('No files in directory.', 'info');
      }
    } else if (command === 'git add .') {
      const newFiles = files.map(f => f.status === 'untracked' ? { ...f, status: 'staged' } : f);
      const count = newFiles.filter(f => f.status === 'staged' && !files.find(old => old.name === f.name && old.status === 'staged')).length;
      setFiles(newFiles);
      if (count > 0) addLog(`Staged ${count} files. Ready to commit.`, 'success');
      else addLog('No new files to stage.', 'warning');
    } else if (command.includes('git commit')) {
      const stagedFiles = files.filter(f => f.status === 'staged');
      if (stagedFiles.length === 0) {
        addLog('Nothing to commit (create/copy files and use "git add" to track)', 'error');
        return;
      }
      setFiles(files.map(f => f.status === 'staged' ? { ...f, status: 'committed' } : f));
      addLog(`[main] Committed ${stagedFiles.length} files.`, 'success');
    } else {
      addLog(`指令未支援。試試: git status, git add ., git commit -m "msg"`, 'warning');
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <SectionTitle title="3. Git Add, Commit & Ignore" subtitle="決定什麼要被記錄下來" />

      <InstructionalText title="暫存區 (Staging Area) 的概念">
        <p>Git 不是你一存檔就會記錄歷史，它有一個「中轉站」叫做暫存區。</p>
        <ul className="list-decimal pl-5 mt-2 space-y-1">
          <li><strong>Untracked (紅色)</strong>：新檔案，Git 還不認識它。</li>
          <li><strong>Git Add (變綠色)</strong>：你告訴 Git：「這個檔案我要記錄」，它就會進入暫存區。</li>
          <li><strong>Git Commit (變藍色)</strong>：這是正式的「存檔」，Git 會拍下暫存區所有檔案的快照，永久保存。</li>
          <li><strong>Ignore (灰色)</strong>：像密碼檔 (.env) 這種東西，我們希望 Git 永遠假裝沒看到。</li>
        </ul>
      </InstructionalText>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Controls - Beautified */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-slate-50 border-slate-200">
            <h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2 uppercase text-xs tracking-wider">
              File Actions
            </h3>
            <div className="space-y-2">
              <button onClick={() => addFile(`note_${files.length+1}.txt`, 'text')} className="w-full bg-white hover:bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center gap-3 transition-all text-sm group text-left">
                <div className="p-1.5 bg-blue-100 rounded text-blue-600 group-hover:bg-blue-200 transition-colors">
                  <FileText size={16} />
                </div>
                <div>
                  <div className="font-bold text-slate-700">新增文字檔</div>
                  <div className="text-xs text-slate-400">一般檔案 (.txt)</div>
                </div>
                <Plus size={16} className="ml-auto text-slate-300 group-hover:text-slate-500" />
              </button>

              <button onClick={() => addFile(`config_${files.length+1}.env`, 'secret')} className="w-full bg-white hover:bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center gap-3 transition-all text-sm group text-left">
                <div className="p-1.5 bg-red-100 rounded text-red-600 group-hover:bg-red-200 transition-colors">
                  <Lock size={16} />
                </div>
                <div>
                  <div className="font-bold text-slate-700">新增機密檔</div>
                  <div className="text-xs text-slate-400">敏感資料 (.env)</div>
                </div>
                <Plus size={16} className="ml-auto text-slate-300 group-hover:text-slate-500" />
              </button>
            </div>
            
            <div className="my-4 border-t border-slate-200"></div>
            
            <button 
              onClick={toggleGitignore}
              className={`w-full border rounded-lg p-3 flex items-center gap-3 transition-all text-sm group text-left ${hasGitignore ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-dashed border-slate-300 hover:border-slate-400'}`}
            >
              <div className={`p-1.5 rounded transition-colors ${hasGitignore ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>
                <EyeOff size={16} />
              </div>
              <div>
                <div className="font-bold">.gitignore</div>
                <div className={`text-xs ${hasGitignore ? 'text-slate-400' : 'text-slate-500'}`}>
                  {hasGitignore ? '已啟用：忽略機密檔' : '未啟用：點擊建立規則'}
                </div>
              </div>
            </button>
          </Card>

          <Card className="bg-slate-50">
            <h3 className="font-bold text-slate-700 mb-2 text-xs uppercase tracking-wider">Git Commands</h3>
            <div className="space-y-2">
              <button onClick={() => handleCommand('git add .')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center justify-between transition-all shadow-sm active:scale-95">
                 <span>git add .</span>
                 <span className="text-indigo-200 text-xs font-normal">加入追蹤</span>
              </button>
              <button onClick={() => handleCommand('git commit -m "save"')} className="w-full bg-slate-800 hover:bg-slate-900 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center justify-between transition-all shadow-sm active:scale-95">
                 <span>git commit</span>
                 <span className="text-slate-400 text-xs font-normal">提交存檔</span>
              </button>
              <button onClick={() => handleCommand('git status')} className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg px-4 py-2 text-sm font-medium flex items-center justify-between transition-all active:scale-95">
                 <span>git status</span>
                 <span className="text-slate-400 text-xs font-normal">查看狀態</span>
              </button>
            </div>
          </Card>
        </div>

        {/* Right: Visualization & Terminal */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm min-h-[220px] flex flex-col">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center flex-wrap gap-2">
              <span className="font-mono text-sm text-slate-600 font-bold">~/project/</span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Untracked</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Staged</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Committed</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Ignored</span>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 content-start flex-1">
              {hasGitignore && (
                <div className="p-3 bg-slate-100 rounded border border-slate-300 flex items-center gap-2 opacity-100">
                  <FileCode size={20} className="text-slate-600" />
                  <span className="text-sm font-mono text-slate-700">.gitignore</span>
                </div>
              )}
              {files.map((f, i) => (
                <div key={i} className={`p-3 rounded border flex items-center gap-2 transition-all duration-300 animate-fade-in
                  ${f.status === 'untracked' ? 'bg-red-50 border-red-200 text-red-700' : 
                    f.status === 'staged' ? 'bg-green-50 border-green-200 text-green-700 shadow-sm' : 
                    f.status === 'committed' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' :
                    'bg-slate-50 border-slate-200 text-slate-400 opacity-60' 
                  }
                `}>
                  {f.type === 'secret' ? <Lock size={16} /> : <FileText size={16} />}
                  <span className="text-sm font-mono truncate">{f.name}</span>
                  {f.status === 'ignored' && <EyeOff size={14} className="ml-auto" />}
                  {f.status === 'committed' && <CheckCircle size={14} className="ml-auto" />}
                </div>
              ))}
              {files.length === 0 && !hasGitignore && (
                <div className="col-span-full text-center text-slate-400 py-8 italic text-sm">
                  資料夾是空的... 請從左側新增檔案
                </div>
              )}
            </div>
          </div>

          <TerminalSim logs={logs} onCommand={handleCommand} height="h-48" />
        </div>
      </div>
    </div>
  );
};

// Chapter 4: Push & Pull (Modified)
const ChapterPushPull = () => {
  const [localCommits, setLocalCommits] = useState([{ id: 'c1', msg: 'Initial commit', time: '10:00' }]);
  const [remoteCommits, setRemoteCommits] = useState([{ id: 'c1', msg: 'Initial commit', time: '10:00' }]);
  const [logs, setLogs] = useState([{ prefix: '$', text: 'Git 模擬環境已就緒。' }]);
  const [pendingChanges, setPendingChanges] = useState(false); 

  const addLog = (text, type = 'info', prefix = '>') => {
    setLogs(prev => [...prev, { text, type, prefix }]);
  };

  const remoteHeadId = remoteCommits[remoteCommits.length - 1].id;
  const localHeadId = localCommits[localCommits.length - 1].id;
  
  const isLocalUpToDateWithRemote = localCommits.some(c => c.id === remoteHeadId);
  const needPull = !isLocalUpToDateWithRemote;
  const canPush = !needPull && (localHeadId !== remoteHeadId);

  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    addLog(cmd, 'input', '$');

    if (command.includes('git add')) {
      if (pendingChanges) { addLog('已經有檔案在暫存區了', 'warning'); return; }
      setPendingChanges(true);
      addLog('index.html 修改已加入暫存區 (Staged)。', 'success');
    } else if (command.includes('git commit')) {
      doCommit('Update via terminal');
    } else if (command === 'git push') {
      doPush();
    } else if (command === 'git pull') {
      doPull();
    } else {
      addLog(`未知指令。`, 'error');
    }
  };

  const doCommit = (msg = 'Updated feature') => {
    if (!pendingChanges) {
      addLog('nothing to commit, working tree clean', 'error');
      return;
    }
    const lastIdNum = parseInt(localCommits[localCommits.length - 1].id.substring(1));
    const newId = `c${lastIdNum + 1}`;
    
    const newCommit = { id: newId, msg: msg, time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}) };
    setLocalCommits([...localCommits, newCommit]);
    setPendingChanges(false);
    addLog(`[main ${newId}] ${msg}`, 'success', '');
  };

  const doPush = () => {
    if (needPull) {
      addLog('Rejected! Remote contains work that you do not have. Please git pull.', 'error');
      return;
    }
    if (!canPush) {
      addLog('Everything up-to-date', 'info');
      return;
    }
    setRemoteCommits([...localCommits]);
    addLog('To https://github.com/project.git', 'success');
    addLog(`   ${remoteHeadId}..${localHeadId}  main -> main`, 'success');
  };

  const doPull = () => {
    if (!needPull) {
      addLog('Already up to date.', 'info');
      return;
    }
    const localExclusive = localCommits.filter(lc => !remoteCommits.some(rc => rc.id === lc.id));
    const newLocalState = [...remoteCommits, ...localExclusive];
    
    setLocalCommits(newLocalState);
    addLog('Updating...', 'success');
    addLog(`Fast-forward / Merge successful.`, 'success');
  };

  const simulateTeammatePush = () => {
    const lastRemoteIdNum = parseInt(remoteCommits[remoteCommits.length - 1].id.substring(1));
    const nextId = `c${lastRemoteIdNum + 10}`; 
    const newCommit = { id: nextId, msg: 'Teammate fixed bug', time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}) };
    
    setRemoteCommits([...remoteCommits, newCommit]);
    addLog('模擬：GitHub 上有了新的提交 (ID: ' + nextId + ')。', 'warning', 'System');
  };

  return (
    <div className="animate-fade-in space-y-6">
      <SectionTitle title="4. Push 與 Pull" subtitle="同步你的平行宇宙" />

      <InstructionalText title="上傳與下載的原理">
        <p>你的電腦 (Local) 和 GitHub (Remote) 是兩個分開的資料庫。</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Git Push (推)</strong>：把你電腦上「多出來」的 Commit 記錄，複製一份丟上去 GitHub。</li>
          <li><strong>Git Pull (拉)</strong>：把 GitHub 上「多出來」的 Commit 記錄 (可能是同事寫的)，複製一份抓下來，並合併到你的電腦。</li>
          <li><strong>黃金法則</strong>：在 Push 之前，永遠先 Pull，確保你的進度是最新的，避免衝突。</li>
        </ul>
      </InstructionalText>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Controls & Terminal */}
        <div className="lg:col-span-1 space-y-4 order-2 lg:order-1">
          <Card className="bg-slate-50 border-slate-200 shadow-none">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Control Panel</h3>
            
            <div className="space-y-3">
              <div className="relative">
                <button 
                  onClick={() => { 
                    if(pendingChanges) { addLog('已經有修改了，請先 Commit', 'warning'); return; }
                    setPendingChanges(true); 
                    addLog('你修改了 index.html', 'info', 'Editor'); 
                  }}
                  className="w-full bg-white text-slate-700 border border-slate-300 shadow-sm hover:bg-slate-50 active:scale-95 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 justify-between group"
                >
                  <span className="flex items-center gap-2"><FileText size={16} className="text-blue-500"/> 1. 修改檔案 (Modify)</span>
                  {pendingChanges && <CheckCircle size={16} className="text-green-500" />}
                </button>
                {pendingChanges && <span className="absolute -right-2 -top-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>}
              </div>

              <button 
                onClick={() => doCommit()}
                disabled={!pendingChanges}
                className={`w-full flex items-center gap-2 justify-between transition-all font-medium px-4 py-2 rounded-lg ${pendingChanges ? 'bg-indigo-600 text-white shadow hover:bg-indigo-700 active:scale-95' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
              >
                <span className="flex items-center gap-2"><GitCommit size={16} /> 2. 提交 (Commit)</span>
              </button>

              <hr className="border-slate-200 my-2" />
              
              <button 
                onClick={simulateTeammatePush}
                className="w-full bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 px-4 py-2 rounded-lg font-medium flex items-center gap-2 text-sm justify-center"
              >
                <User size={14} /> 模擬同事先 Push 了
              </button>

              <button 
                onClick={doPull}
                disabled={!needPull}
                className={`w-full flex items-center gap-2 justify-between transition-all font-medium px-4 py-2 rounded-lg ${needPull ? 'bg-green-600 text-white shadow hover:bg-green-700 active:scale-95' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
              >
                <span className="flex items-center gap-2"><ArrowLeft size={16} /> 下載更新 (Pull)</span>
                {needPull && <Badge color="red">New</Badge>}
              </button>
            </div>
          </Card>

          <TerminalSim logs={logs} onCommand={handleCommand} height="h-64" />
        </div>

        {/* Right Column: Visualization */}
        <div className="lg:col-span-2 order-1 lg:order-2 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-inner min-h-[500px] flex flex-col relative">
          
          <div className="grid grid-cols-5 gap-4 h-full">
            {/* Local Timeline */}
            <div className="col-span-2 flex flex-col relative">
              <div className="flex items-center gap-2 mb-6 text-indigo-700 font-bold border-b border-indigo-100 pb-2">
                <Laptop size={20} />
                <h3>Local (你的電腦)</h3>
              </div>
              
              <div className="relative flex-1 space-y-4 px-2">
                <div className="absolute left-6 top-2 bottom-0 w-0.5 bg-slate-200 -z-10"></div>
                
                {localCommits.map((c, i) => {
                  const isUnpushed = !remoteCommits.find(rc => rc.id === c.id);
                  return (
                    <div key={c.id} className={`flex items-start gap-3 animate-fade-in-up transition-all duration-500`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs z-10 shadow-md shrink-0 border-4 border-slate-50
                        ${isUnpushed ? 'bg-indigo-500 ring-2 ring-indigo-200' : 'bg-slate-400'}
                      `}>
                        {c.id}
                      </div>
                      <div className={`p-3 rounded-lg text-sm border flex-1 shadow-sm transition-all
                        ${isUnpushed 
                          ? 'bg-white border-indigo-200 border-l-4 border-l-indigo-500' 
                          : 'bg-slate-100 border-slate-200 text-slate-500 grayscale'}
                      `}>
                        <div className="font-semibold truncate">{c.msg}</div>
                        <div className="text-xs opacity-70 flex justify-between mt-1">
                          <span>{c.time}</span>
                          {isUnpushed && <span className="text-indigo-600 font-bold text-[10px] bg-indigo-50 px-1 rounded">Wait to Push</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                {/* Pending Changes Indicator */}
                {pendingChanges && (
                  <div className="flex items-center gap-3 animate-pulse opacity-70 mt-4">
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-indigo-400 bg-white z-10 shrink-0"></div>
                    <div className="p-2 rounded border border-dashed border-indigo-300 text-xs text-indigo-600 bg-indigo-50 flex-1">
                      Working on changes...
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Bridge (Push Button) */}
            <div className="col-span-1 flex flex-col items-center justify-center relative z-20">
               <div className="sticky top-1/2 -translate-y-1/2 w-full flex flex-col items-center gap-2">
                 {/* Connection Lines */}
                 <div className="h-0.5 w-full bg-slate-200 absolute top-1/2 -z-10"></div>
                 
                 {needPull ? (
                    <div className="group flex flex-col items-center gap-1 animate-pulse">
                      <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center border-4 border-red-50 cursor-not-allowed">
                        <AlertCircle size={24} />
                      </div>
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm text-center">
                        Conflict<br/>Must Pull
                      </span>
                    </div>
                 ) : canPush ? (
                    <button 
                      onClick={doPush}
                      className="group flex flex-col items-center gap-1 animate-bounce"
                    >
                      <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 hover:scale-110 transition-transform cursor-pointer border-4 border-white">
                        <ArrowRight size={24} />
                      </div>
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded shadow-sm">
                        Push Commits
                      </span>
                    </button>
                 ) : (
                    <div className="group flex flex-col items-center gap-1 opacity-40">
                      <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center border-4 border-white cursor-not-allowed">
                        <ArrowRight size={20} />
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-100 px-1 rounded">Synced</span>
                    </div>
                 )}
               </div>
            </div>

            {/* Remote Timeline */}
            <div className="col-span-2 flex flex-col relative">
              <div className="flex items-center gap-2 mb-6 text-purple-700 font-bold border-b border-purple-100 pb-2">
                <Cloud size={20} />
                <h3>Remote (GitHub)</h3>
              </div>
              
              <div className="relative flex-1 space-y-4 px-2">
                <div className="absolute left-6 top-2 bottom-0 w-0.5 bg-slate-200 -z-10"></div>

                {remoteCommits.map((c, i) => (
                  <div key={c.id} className="flex items-start gap-3 animate-fade-in-up">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs z-10 shadow-md shrink-0 border-4 border-slate-50">
                      {c.id}
                    </div>
                    <div className="p-3 rounded-lg text-sm border bg-white border-purple-100 shadow-sm flex-1">
                      <div className="font-semibold text-slate-700 truncate">{c.msg}</div>
                      <div className="text-xs text-slate-400 mt-1">Synced</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Chapter 5: Team Collaboration (Merged: Merge/Rebase + Workflow)
const ChapterTeam = () => {
  const [mode, setMode] = useState('diverged'); // 'diverged', 'merged', 'rebased'
  const [activeTab, setActiveTab] = useState('graph'); // 'graph', 'code'

  const codeBase = `function calculate(a, b) {\n  return a + b;\n}`;
  const codeRemote = `function calculate(a, b) {\n  console.log("Calculating..."); // Remote Added\n  return a + b;\n}`;
  const codeLocal = `function calculate(a, b) {\n  if (a < 0) return 0; // Local Added\n  return a + b;\n}`;
  const codeRebased = `function calculate(a, b) {\n  console.log("Calculating..."); // Remote Added\n  if (a < 0) return 0; // Local (Re-applied)\n  return a + b;\n}`;
  const codeMerged = `function calculate(a, b) {\n  if (a < 0) return 0; // Local Added\n  console.log("Calculating..."); // Remote Added\n  return a + b;\n}`;

  return (
    <div className="space-y-12 animate-fade-in">
      <SectionTitle title="5. 團隊協作全攻略" subtitle="從合併代碼到工作流程" />

      {/* Part 1: Merge vs Rebase Interactive */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="indigo">Part 1</Badge>
          <h3 className="text-xl font-bold text-slate-800">Merge vs Rebase：兩條平行宇宙如何匯聚？</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 space-y-4">
            <Card className="h-full bg-slate-50 border-slate-200">
               <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                 <GitBranch size={20} /> 情境模擬
               </h3>
               <div className="text-sm text-slate-600 mb-4">
                 你和同事同時修改了 <code>calculate.js</code>。
                 <ul className="list-disc pl-5 mt-2 space-y-1">
                   <li><span className="text-purple-600 font-bold">Remote (同事)</span>：加了 console.log。</li>
                   <li><span className="text-indigo-600 font-bold">Local (你)</span>：加了負數檢查。</li>
                 </ul>
               </div>
               
               <div className="flex gap-2 mt-6">
                  <button 
                    onClick={() => setMode('diverged')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${mode === 'diverged' ? 'bg-slate-800 text-white' : 'bg-white text-slate-600'}`}
                  >
                    1. 分歧 (Diverged)
                  </button>
                  <button 
                    onClick={() => setMode('merged')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${mode === 'merged' ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-200' : 'bg-white text-slate-600'}`}
                  >
                    2. Merge (合併)
                  </button>
                  <button 
                    onClick={() => setMode('rebased')}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all ${mode === 'rebased' ? 'bg-orange-600 text-white shadow-md ring-2 ring-orange-200' : 'bg-white text-slate-600'}`}
                  >
                    3. Rebase (變基)
                  </button>
               </div>
            </Card>
          </div>

          <div className="flex-1">
            <Card className="h-full border-blue-100 bg-blue-50/50">
               <h3 className="font-bold text-slate-700 mb-2">
                 {mode === 'diverged' && "現在狀況：分道揚鑣"}
                 {mode === 'merged' && "Merge：保留歷史真實樣貌"}
                 {mode === 'rebased' && "Rebase：讓歷史變一直線"}
               </h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 {mode === 'diverged' && "兩邊都有新的 Commit，互不知道對方的存在。現在必須決定如何把這兩條線接起來。"}
                 {mode === 'merged' && "最安全、最標準的做法。Git 會產生一個額外的「Merge Commit」來綁兩個結。歷史紀錄會呈現「菱形」結構，清楚交代分支何時分開、何時合併。"}
                 {mode === 'rebased' && "進階做法。Git 會把你的 Commit 暫時拿起來，把基底換成 Remote 最新的，然後再把你的 Commit 貼上去。優點是歷史紀錄超乾淨（一條線），缺點是修改了歷史紀錄。"}
               </p>
            </Card>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg mb-8">
           <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex gap-4">
              <button onClick={() => setActiveTab('graph')} className={`flex items-center gap-2 text-sm font-bold ${activeTab === 'graph' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>
                 <GitGraph size={16} /> 歷史結構圖 (Graph)
              </button>
              <button onClick={() => setActiveTab('code')} className={`flex items-center gap-2 text-sm font-bold ${activeTab === 'code' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>
                 <FileCode size={16} /> 程式碼比對 (Diff)
              </button>
           </div>

           <div className="p-8 min-h-[300px] flex items-center justify-center bg-slate-50/50">
              {activeTab === 'graph' ? (
                // Graph Visualization
                <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
                   <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                      <div className="w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold shadow">C0</div>
                      <span className="text-xs text-slate-500 mt-1">Base</span>
                   </div>

                   <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="80" y1="128" x2="160" y2="80" stroke="#9333ea" strokeWidth="3" strokeDasharray="5,5" />
                      {mode !== 'rebased' && <line x1="80" y1="128" x2="160" y2="176" stroke="#4f46e5" strokeWidth="3" strokeDasharray="5,5" />}
                      
                      {mode === 'merged' && (
                         <>
                           <line x1="200" y1="80" x2="320" y2="128" stroke="#9333ea" strokeWidth="3" />
                           <line x1="200" y1="176" x2="320" y2="128" stroke="#4f46e5" strokeWidth="3" />
                         </>
                      )}
                   </svg>

                   <div className="absolute left-40 top-[60px] flex flex-col items-center z-10">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow ring-4 ring-white">C1</div>
                      <span className="text-xs text-purple-700 font-bold mt-1">Remote</span>
                   </div>

                   <div className={`absolute flex flex-col items-center z-10 transition-all duration-700 ease-in-out
                      ${mode === 'rebased' ? 'left-72 top-[60px]' : 'left-40 top-[156px]'}
                   `}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow ring-4 ring-white
                         ${mode === 'rebased' ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white'}
                      `}>
                         {mode === 'rebased' ? "C2'" : "C2"}
                      </div>
                      <span className="text-xs text-indigo-700 font-bold mt-1">Local</span>
                   </div>

                   {mode === 'rebased' && (
                      <div className="absolute left-[210px] top-[78px] w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                   )}

                   {mode === 'merged' && (
                     <div className="absolute left-80 top-1/2 -translate-y-1/2 flex flex-col items-center z-10 animate-fade-in">
                        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow ring-4 ring-white">M</div>
                        <span className="text-xs text-green-700 font-bold mt-1">Merge</span>
                     </div>
                   )}
                </div>
              ) : (
                // Code Diff Visualization
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                   {/* Col 1: Remote */}
                   <div className="bg-purple-50 p-3 rounded border border-purple-200">
                      <div className="mb-2 font-bold text-purple-700 flex items-center gap-1"><Cloud size={12}/> Remote</div>
                      <pre className="whitespace-pre-wrap text-slate-600">
                        {codeRemote.split('\n').map((line, i) => (
                          <div key={i} className={line.includes('Remote Added') ? 'bg-purple-200 text-purple-900 font-bold' : ''}>{line}</div>
                        ))}
                      </pre>
                   </div>

                   {/* Col 2: Local */}
                   <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                      <div className="mb-2 font-bold text-indigo-700 flex items-center gap-1"><Laptop size={12}/> Local</div>
                      <pre className="whitespace-pre-wrap text-slate-600">
                        {codeLocal.split('\n').map((line, i) => (
                          <div key={i} className={line.includes('Local Added') ? 'bg-indigo-200 text-indigo-900 font-bold' : ''}>{line}</div>
                        ))}
                      </pre>
                   </div>

                   {/* Col 3: Result */}
                   <div className={`p-3 rounded border transition-all duration-500 ${mode === 'diverged' ? 'bg-slate-100 border-slate-300 opacity-50' : mode === 'rebased' ? 'bg-orange-50 border-orange-300 shadow-md' : 'bg-green-50 border-green-300 shadow-md'}`}>
                      <div className="mb-2 font-bold text-slate-700 flex items-center gap-1">
                        {mode === 'diverged' ? 'Result (Pending)' : 
                         mode === 'rebased' ? <><CheckCircle size={12} className="text-orange-600"/> Rebased Local (Linear)</> : 
                         <><CheckCircle size={12} className="text-green-600"/> Final Result</>}
                      </div>
                      
                      {mode === 'diverged' ? (
                         <div className="h-full flex items-center justify-center text-slate-400 italic">
                           等待合併...
                         </div>
                      ) : mode === 'rebased' ? (
                        <>
                          <pre className="whitespace-pre-wrap text-slate-600 mb-2">
                            {codeRebased.split('\n').map((line, i) => (
                               <div key={i} className={
                                 line.includes('Local (Re-applied)') ? 'bg-indigo-100 text-indigo-800' : 
                                 line.includes('Remote Added') ? 'bg-purple-100 text-purple-800' : ''
                               }>{line}</div>
                            ))}
                          </pre>
                          <div className="text-[10px] text-orange-600 mt-2 bg-orange-100 p-1 rounded">
                              注意：Rebase 會將 Remote 的變更墊在底部，再重新應用 Local 的變更。
                          </div>
                        </>
                      ) : (
                        <pre className="whitespace-pre-wrap text-slate-600">
                          {codeMerged.split('\n').map((line, i) => (
                             <div key={i} className={
                               line.includes('Local Added') ? 'bg-indigo-100 text-indigo-800' : 
                               line.includes('Remote Added') ? 'bg-purple-100 text-purple-800' : ''
                             }>{line}</div>
                          ))}
                        </pre>
                      )}
                   </div>
                </div>
              )}
           </div>
        </div>
      </section>

      {/* Part 2: Workflow Strategy */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Badge color="orange">Part 2</Badge>
          <h3 className="text-xl font-bold text-slate-800">工作流：獨立作業 vs 團隊協作</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Solo */}
          <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
            <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center gap-2">
              <User className="text-slate-600" />
              <h3 className="font-bold text-slate-700">獨立作業 (Solo)</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge color="blue">目標</Badge>
                <span className="text-sm">備份程式碼、記錄開發歷程</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-slate-100 px-1 rounded text-pink-600">Branch</span>
                  通常只用 <span className="font-bold">main</span> 或 <span className="font-bold">master</span> 一個分支到底。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-slate-100 px-1 rounded text-pink-600">Frequency</span>
                  想到就 Commit，寫完一段就 Push。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-slate-100 px-1 rounded text-pink-600">Conflict</span>
                  幾乎不會發生衝突。
                </li>
              </ul>
            </div>
          </div>

          {/* Team */}
          <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center gap-2">
              <Users className="text-indigo-600" />
              <h3 className="font-bold text-indigo-700">團隊協作 (Team)</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Badge color="purple">目標</Badge>
                <span className="text-sm">功能隔離、代碼品質審查、穩定發布</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-slate-100 px-1 rounded text-pink-600">Branch</span>
                  主程式 (main) 神聖不可侵犯。每個人都在自己的 Feature Branch 開發。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-slate-100 px-1 rounded text-pink-600">PR</span>
                  必須透過 Pull Request 進行合併，不能直接 Push 到 main。
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono bg-slate-100 px-1 rounded text-pink-600">Conflict</span>
                  家常便飯。需要經常 `git pull` 保持更新，解決衝突。
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-yellow-800">
          <h4 className="font-bold flex items-center gap-2 mb-2">
            <AlertCircle size={20} />
            團隊協作黃金法則：
          </h4>
          <p>
            在開始工作前，永遠先執行 <code>git pull</code>。保持你的本地端是最新的，可以減少 80% 的衝突痛苦。
          </p>
        </div>
      </section>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState('concept');

  const tabs = [
    { id: 'concept', label: '1. 觀念與區別', icon: <GitGraph size={18} /> },
    { id: 'setup', label: '2. 建立與連結', icon: <Link size={18} /> },
    { id: 'filestatus', label: '3. Add, Commit, Ignore', icon: <FileText size={18} /> },
    { id: 'pushpull', label: '4. Push 與 Pull', icon: <Terminal size={18} /> },
    { id: 'team', label: '5. 團隊協作', icon: <Users size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      {/* Header */}
      <header className="bg-slate-900 text-white pt-8 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <GitGraph size={200} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Git 時光機實驗室 🚀</h1>
          <p className="text-slate-400 text-lg">
            從零開始，透過互動視覺化理解版本控制的核心邏輯
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 pb-20">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 bg-white p-2 rounded-xl shadow-lg border border-slate-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex-1 justify-center whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
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
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10 min-h-[600px] transition-all">
          {activeTab === 'concept' && <ChapterConcept />}
          {activeTab === 'setup' && <ChapterSetup />}
          {activeTab === 'filestatus' && <ChapterFileStatus />}
          {activeTab === 'pushpull' && <ChapterPushPull />}
          {activeTab === 'team' && <ChapterTeam />}
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
          animation: fade-in 0.5s ease-out forwards;
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