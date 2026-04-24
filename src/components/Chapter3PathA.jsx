import React, { useState } from 'react';
import { SectionTitle, Card, TerminalSim, InstructionalText } from './Shared';
import { Laptop, Folder, ArrowRight, Github, Shield, PlusCircle, CheckCircle, FileText, Eye, ShieldAlert } from 'lucide-react';

export const Chapter3PathA = () => {
  const [step, setStep] = useState(0); // 0: initial, 1: init, 2: add/commit, 3: remote add, 4: push
  const [logs, setLogs] = useState([{ prefix: '$', text: '準備開始情境 A：從零開始建立專案。' }]);
  const repoUrl = "https://github.com/blake/my-new-project.git";

  const addLog = (text, type = 'info', prefix = '>') => {
    setLogs(prev => [...prev, { text, type, prefix }]);
  };

  const handleInit = () => {
    if (step >= 1) return;
    addLog('git init', 'input', '$');
    setTimeout(() => {
      addLog('Initialized empty Git repository in /project/.git/', 'success');
      setStep(1);
    }, 300);
  };

  const handleCommit = () => {
    if (step >= 2) return;
    addLog('git add .', 'input', '$');
    addLog('git commit -m "Initial commit"', 'input', '$');
    setTimeout(() => {
      addLog('[main (root-commit) 1a2b3c] Initial commit', 'success');
      setStep(2);
    }, 300);
  };

  const handleLink = () => {
    if (step >= 3) return;
    addLog(`git remote add origin ${repoUrl}`, 'input', '$');
    setTimeout(() => {
      addLog(`remote "origin" added. Linked to ${repoUrl}`, 'success');
      setStep(3);
    }, 300);
  };

  const handlePush = () => {
    if (step >= 4) return;
    addLog('git push -u origin main', 'input', '$');
    setTimeout(() => {
      addLog(`To ${repoUrl}`, 'success');
      addLog(` * [new branch]      main -> main`, 'success');
      addLog(`Branch 'main' set up to track remote branch 'main' from 'origin'.`, 'success');
      setStep(4);
    }, 800);
  };

  const reset = () => {
    setStep(0);
    setLogs([{ prefix: '$', text: '已重置。' }]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <SectionTitle title="3. 情境 A：從零開始" subtitle="自己當造物主，將本地專案上傳到 GitHub" />

      <InstructionalText title="什麼時候會用到？">
        <p>你用 VSCode 在電腦裡建立了一個資料夾，寫好了幾個 HTML 檔案，現在你想把它們上傳到 GitHub 備份，並分享給全世界。</p>
      </InstructionalText>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-slate-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-700 flex items-center gap-2"><PlusCircle size={18} /> 操作步驟</h3>
              <button onClick={reset} className="text-xs text-slate-500 hover:text-indigo-600 underline">重新開始</button>
            </div>
            
            <div className="space-y-3">
              <p className="text-xs text-slate-500 mb-2">註：以下範例中的 Repository URL 是假想的，僅供教學演示。</p>
              
              {/* Step 1 */}
              <div className={`p-3 border rounded-lg transition-all ${step === 0 ? 'bg-white border-indigo-300 shadow-md ring-2 ring-indigo-50' : step > 0 ? 'bg-green-50 border-green-200 opacity-60' : 'bg-slate-50 border-slate-200 opacity-40'}`}>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-slate-700">$ git init</div>
                  <button onClick={handleInit} disabled={step !== 0} className={`px-3 py-1 rounded text-xs font-bold text-white ${step > 0 ? 'bg-green-500' : step === 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-300'}`}>
                    {step > 0 ? '完成' : '執行'}
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-2">在目前資料夾建立 .git，開始追蹤檔案。</div>
              </div>

              {/* Step 2 */}
              <div className={`p-3 border rounded-lg transition-all ${step === 1 ? 'bg-white border-indigo-300 shadow-md ring-2 ring-indigo-50' : step > 1 ? 'bg-green-50 border-green-200 opacity-60' : 'bg-slate-50 border-slate-200 opacity-40'}`}>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-slate-700">$ git add . <br/>$ git commit -m "Init"</div>
                  <button onClick={handleCommit} disabled={step !== 1} className={`px-3 py-1 rounded text-xs font-bold text-white ${step > 1 ? 'bg-green-500' : step === 1 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-300'}`}>
                    {step > 1 ? '完成' : '執行'}
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-2">先把本地端的檔案正式存檔一次。</div>
              </div>

              {/* Step 3 */}
              <div className={`p-3 border rounded-lg transition-all ${step === 2 ? 'bg-white border-indigo-300 shadow-md ring-2 ring-indigo-50' : step > 2 ? 'bg-green-50 border-green-200 opacity-60' : 'bg-slate-50 border-slate-200 opacity-40'}`}>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-slate-700 truncate mr-2" title={`$ git remote add origin ${repoUrl}`}>
                    $ git remote add origin {repoUrl.split('/').pop()}
                  </div>
                  <button onClick={handleLink} disabled={step !== 2} className={`px-3 py-1 rounded text-xs font-bold text-white shrink-0 ${step > 2 ? 'bg-green-500' : step === 2 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-300'}`}>
                    {step > 2 ? '完成' : '執行'}
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-2">告訴 Git 雲端的網址在哪裡（命名為 origin）。</div>
              </div>

              {/* Step 4 */}
              <div className={`p-3 border rounded-lg transition-all ${step === 3 ? 'bg-white border-indigo-300 shadow-md ring-2 ring-indigo-50' : step > 3 ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200 opacity-40'}`}>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm text-slate-700">$ git push -u origin main</div>
                  <button onClick={handlePush} disabled={step !== 3} className={`px-3 py-1 rounded text-xs font-bold text-white ${step > 3 ? 'bg-green-500' : step === 3 ? 'bg-indigo-600 hover:bg-indigo-700 animate-pulse' : 'bg-slate-300'}`}>
                    {step > 3 ? '完成' : '執行'}
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-2">把本地的進度推上雲端！(-u 會記住預設目標)</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Feedback */}
        <div className="flex items-center justify-center bg-slate-100 rounded-xl border border-slate-200 p-8 relative overflow-hidden">
          {step === 4 && <div className="absolute inset-0 bg-green-50/50 z-0 animate-fade-in pointer-events-none"></div>}
          
          <div className="relative flex items-center gap-20 z-10 w-full justify-center">
             {/* Local Folder */}
             <div className="flex flex-col items-center relative">
               <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${step >= 1 ? 'bg-indigo-600 text-white ring-4 ring-indigo-200' : 'bg-white text-slate-300 border border-slate-200'}`}>
                 <Laptop size={40} />
               </div>
               {step >= 1 && (
                 <div className="absolute -right-3 -top-3 w-9 h-9 bg-yellow-100 border-2 border-yellow-300 rounded-lg flex items-center justify-center shadow-md animate-fade-in" title=".git folder created">
                   <Folder size={14} className="text-yellow-600" />
                   <span className="absolute text-[7px] font-black text-yellow-700 -bottom-0.5">.git</span>
                 </div>
               )}
               {step >= 2 && step < 4 && (
                 <div className="absolute -bottom-2 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold animate-fade-in whitespace-nowrap border border-green-200">
                   已存檔 (待上傳)
                 </div>
               )}
               <span className="mt-4 font-bold text-slate-600">Local (你的電腦)</span>
             </div>

             {/* Connection Line */}
             <div className="absolute left-10 right-10 top-10 h-1 bg-slate-200 -z-10 rounded-full">
               <div className={`h-full rounded-full transition-all duration-1000 ease-out bg-indigo-500 ${step >= 3 ? 'w-full opacity-50' : 'w-0'} ${step === 4 ? 'opacity-100 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : ''}`}></div>
             </div>
             
             {step === 3 && (
               <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 animate-fade-in px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                 已連結 (Ready)
               </div>
             )}
             
             {step === 4 && (
               <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 animate-fade-in px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 flex items-center gap-1">
                 <CheckCircle size={14} /> 上傳成功！
               </div>
             )}

             {/* GitHub Repo */}
             <div className="flex flex-col items-center relative">
               <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${step >= 4 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-300 border border-slate-200'}`}>
                 <Github size={40} />
               </div>
               <span className="mt-4 font-bold text-slate-600">Remote (GitHub)</span>

               {step >= 4 && (
                 <div className="absolute -right-5 top-1 flex flex-col gap-0.5 animate-fade-in">
                   <div className="flex items-center justify-center gap-1 bg-green-100 border border-green-300 rounded px-1.5 py-0.5 shadow-sm text-[9px] text-green-700 font-bold">
                     <Shield size={10} /> 備份完成
                   </div>
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <TerminalSim logs={logs} height="h-48" />
      </div>

      {/* Commit Message Guidelines */}
      <div className="mt-8">
        <Card className="bg-blue-50 border-blue-200">
           <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
             <FileText size={18} /> 養成好習慣：Commit Message 怎麼寫？
           </h3>
           <p className="text-sm text-blue-700 mb-4">好的 Commit Message 能讓同事（或一個月後的你）秒懂你改了什麼。業界通常會使用「前綴 (Prefix)」來分類：</p>
           <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-white p-3 rounded border border-blue-100 shadow-sm text-sm">
               <div className="font-bold text-slate-700"><span className="text-blue-600 bg-blue-100 px-1 rounded">feat:</span> 新增功能</div>
               <div className="text-slate-500 mt-1">例如：<code>feat: 新增購物車結帳按鈕</code></div>
             </div>
             <div className="bg-white p-3 rounded border border-blue-100 shadow-sm text-sm">
               <div className="font-bold text-slate-700"><span className="text-red-600 bg-red-100 px-1 rounded">fix:</span> 修復 Bug</div>
               <div className="text-slate-500 mt-1">例如：<code>fix: 修正登入失敗時不會跳出警告的問題</code></div>
             </div>
             <div className="bg-white p-3 rounded border border-blue-100 shadow-sm text-sm">
               <div className="font-bold text-slate-700"><span className="text-purple-600 bg-purple-100 px-1 rounded">docs:</span> 文件修改</div>
               <div className="text-slate-500 mt-1">例如：<code>docs: 更新 README 安裝教學</code></div>
             </div>
             <div className="bg-white p-3 rounded border border-blue-100 shadow-sm text-sm">
               <div className="font-bold text-slate-700"><span className="text-green-600 bg-green-100 px-1 rounded">style:</span> 格式修改</div>
               <div className="text-slate-500 mt-1">例如：<code>style: 調整首頁標題字體大小</code></div>
             </div>
           </div>
        </Card>
      </div>

      {/* Gitignore & Git Log */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="bg-yellow-50 border-yellow-200">
           <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
             <ShieldAlert size={18} /> 防雷神針：隱形斗篷 .gitignore
           </h3>
           <p className="text-sm text-yellow-700 mb-3">
             新手最常犯的錯，就是把「幾萬個暫存檔 (如 <code>node_modules</code>)」或是「寫有資料庫密碼的檔案」一起 <code>git add .</code> 傳上 GitHub，導致專案又肥又危險。
           </p>
           <p className="text-sm text-yellow-700 font-bold mb-2">解決方法：</p>
           <p className="text-sm text-yellow-700">
             在專案資料夾底下建立一個名為 <code>.gitignore</code> 的檔案。在裡面寫上你不想被 Git 追蹤的檔案或資料夾名稱。Git 就會當作沒看到它們！
           </p>
           <div className="bg-slate-900 rounded p-3 mt-3 font-mono text-xs text-green-400">
             # 檔案名稱：.gitignore<br/>
             node_modules/<br/>
             .env<br/>
             *.log
           </div>
        </Card>

        <Card className="bg-emerald-50 border-emerald-200">
           <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
             <Eye size={18} /> 偷看遊戲存檔：git log
           </h3>
           <p className="text-sm text-emerald-700 mb-3">
             存檔完通常會心虛：「它真的存進去了嗎？」這時候你可以用指令來調出歷史紀錄。
           </p>
           <div className="bg-slate-900 rounded p-3 mb-3 font-mono text-xs text-green-400">
             $ git log --oneline<br/>
             <span className="text-yellow-400">a1b2c3d</span> (HEAD -{'>'} main) feat: 結帳功能<br/>
             <span className="text-yellow-400">9f8e7d6</span> docs: 更新說明
           </div>
           <p className="text-sm text-emerald-700">
             <strong>💡 視覺化推薦：</strong>如果你覺得純文字太難懂，記得打開我們在安裝教學中請你裝的 <strong>Git Graph 外掛</strong>，它會在 VSCode 裡畫出超美的時間線樹狀圖喔！
           </p>
        </Card>
      </div>
    </div>
  );
};
