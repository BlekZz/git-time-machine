import React from 'react';
import { SectionTitle, Card, Badge, InstructionalText } from './Shared';
import { Rocket, Target, CheckCircle, Terminal, FileText, GitBranch, ArrowUpCircle, GitPullRequest, Search } from 'lucide-react';

export const Chapter8Practice = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <SectionTitle title="8. 實戰演練：發起你的第一個 PR" subtitle="將所學化為行動，在專案中留下你的足跡！" />

      {/* Part 1: The Mission */}
      <section>
        <InstructionalText title="任務說明：這不是演習！" icon={<Target size={18} className="text-red-600" />}>
          <p className="mb-2">現在你要離開這個模擬網頁，<strong>打開你電腦真實的終端機與 VSCode</strong> 來完成這項任務。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>任務流程：</strong> 在專案中先建立（Branch）出自己的分支 ➡️ 進行數次的版本迭代與存檔 ➡️ Commit 且 Push 上去 ➡️ 最後對專案發出 PR (Pull Request)。</li>
            <li><strong>最終目標：</strong> 讓寫有你名字的 Markdown 筆記成功被合併進 main 主線中。</li>
            <li><strong>注意事項：</strong> 請確保你是在正確的作業專案（git-time-machine 或講師指定的 Repo）下操作，不要搞錯資料夾囉！</li>
          </ul>
        </InstructionalText>
      </section>

      {/* 起始狀態確認 */}
      <section>
        <Card className="bg-white border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">🧭 開始作業前：確認你的位置</div>
          <p className="text-sm text-slate-800 mb-4 font-medium">在開始之前，請打開你的 Terminal，逐行輸入以下指令確認狀態：</p>
          
          <div className="space-y-3">
            <div className="bg-slate-900 rounded-lg p-4 space-y-3">
              <div>
                <div className="text-xs text-slate-400 mb-1">① 確認你在 git-time-machine 資料夾內</div>
                <div className="font-mono text-sm text-green-400">$ pwd</div>
                <div className="text-xs text-slate-400 mt-1">✅ 應看到路徑結尾是 <code className="bg-slate-700 px-1 rounded">git-time-machine</code></div>
                <div className="text-xs text-red-400 mt-0.5">❌ 如果不對：輸入 <code className="bg-slate-700 text-white px-1 rounded">cd 路徑/git-time-machine</code> 切換過去</div>
              </div>
              
              <div>
                <div className="text-xs text-slate-400 mb-1">② 確認你在 main 分支</div>
                <div className="font-mono text-sm text-green-400">$ git branch</div>
                <div className="text-xs text-slate-400 mt-1">✅ 有星號（*）的那行應該是 <code className="bg-slate-700 px-1 rounded">* main</code></div>
                <div className="text-xs text-red-400 mt-0.5">❌ 如果不對：輸入 <code className="bg-slate-700 text-white px-1 rounded">git checkout main</code> 切換回來</div>
              </div>
              
              <div>
                <div className="text-xs text-slate-400 mb-1">③ 確認工作區是乾淨的</div>
                <div className="font-mono text-sm text-green-400">$ git status</div>
                <div className="text-xs text-slate-400 mt-1">✅ 應看到 <code className="bg-slate-700 px-1 rounded">nothing to commit, working tree clean</code></div>
                <div className="text-xs text-red-400 mt-0.5">❌ 如果有未存檔的修改：先 <code className="bg-slate-700 text-white px-1 rounded">git stash</code> 暫存起來，完成作業後再處理</div>
              </div>
              
              <div>
                <div className="text-xs text-slate-400 mb-1">④ 確認本地已和雲端同步</div>
                <div className="font-mono text-sm text-green-400">$ git pull</div>
                <div className="text-xs text-slate-400 mt-1">✅ 看到 <code className="bg-slate-700 px-1 rounded">Already up to date.</code> 代表你有最新的版本</div>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded p-3 text-sm font-bold text-green-900 flex items-center gap-2">
              <CheckCircle size={18} className="shrink-0 text-green-600" />
              <span>四個全部確認 OK 之後，就可以開始 Step 2 了！</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Part 2: Step-by-Step Hands-on */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Badge color="blue">任務步驟</Badge>
          <h3 className="text-xl font-bold text-slate-800">請跟著以下步驟，一步步在你的電腦上執行：</h3>
        </div>

        {/* 實戰示意圖 */}
        <Card className="bg-slate-900 mb-8 border-slate-700 overflow-hidden">
          <div className="w-full overflow-x-auto">
            <div style={{ minWidth: '850px' }} className="py-4">
              <svg viewBox="0 0 850 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ maxHeight: '320px' }}>
                <defs>
                  <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
                  </marker>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
                  </marker>
                  <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                  </marker>
                </defs>

                {/* Track Labels */}
                <text x="20" y="65" fill="#a5b4fc" fontSize="14" fontWeight="bold">☁️ 雲端 main</text>
                <text x="20" y="135" fill="#93c5fd" fontSize="14" fontWeight="bold">💻 本地 main</text>
                <text x="20" y="205" fill="#86efac" fontSize="14" fontWeight="bold">💻 本地分支</text>
                <text x="20" y="275" fill="#d8b4fe" fontSize="14" fontWeight="bold">☁️ 雲端分支</text>

                {/* Track Lines */}
                <line x1="150" y1="60" x2="820" y2="60" stroke="#6366f1" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />
                <line x1="210" y1="130" x2="820" y2="130" stroke="#3b82f6" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" />
                <line x1="290" y1="200" x2="820" y2="200" stroke="#22c55e" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" strokeDasharray="8 4" />
                <line x1="370" y1="270" x2="820" y2="270" stroke="#a855f7" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round" strokeDasharray="8 4" />

                {/* Connecting Arrows */}
                <path d="M 140 60 C 160 60, 170 130, 195 130" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-blue)" />
                <path d="M 200 130 C 220 130, 240 200, 275 200" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-green)" />
                <path d="M 280 200 C 300 200, 320 270, 355 270" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-purple)" />
                <path d="M 580 200 C 610 200, 640 270, 675 270" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-purple)" />
                <path d="M 680 270 C 720 270, 720 60, 775 60" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4" markerEnd="url(#arrow-purple)" />

                {/* Nodes */}
                <circle cx="140" cy="60" r="8" fill="#6366f1" stroke="#0f172a" strokeWidth="3" />
                
                <circle cx="200" cy="130" r="8" fill="#3b82f6" stroke="#0f172a" strokeWidth="3" />
                <text x="210" y="120" fill="#93c5fd" fontSize="12" fontFamily="monospace">1. clone (雙 main)</text>

                <circle cx="280" cy="200" r="8" fill="#22c55e" stroke="#0f172a" strokeWidth="3" />
                <text x="290" y="180" fill="#86efac" fontSize="12" fontFamily="monospace">2. checkout -b</text>
                <text x="290" y="195" fill="#86efac" fontSize="11" opacity="0.8">(產生 branch)</text>

                <circle cx="360" cy="270" r="8" fill="#a855f7" stroke="#0f172a" strokeWidth="3" />
                <text x="360" y="295" fill="#d8b4fe" fontSize="12" textAnchor="middle" fontFamily="monospace">3. push -u</text>
                <text x="360" y="310" fill="#d8b4fe" fontSize="11" textAnchor="middle" opacity="0.8">(建立雲端分支)</text>

                <circle cx="480" cy="200" r="8" fill="#4ade80" stroke="#0f172a" strokeWidth="3" />
                <text x="480" y="225" fill="#86efac" fontSize="12" textAnchor="middle" fontFamily="monospace">建立 md 檔</text>
                <text x="480" y="240" fill="#86efac" fontSize="11" textAnchor="middle" opacity="0.8">(add &amp; commit)</text>

                <circle cx="580" cy="200" r="8" fill="#4ade80" stroke="#0f172a" strokeWidth="3" />
                <text x="580" y="225" fill="#86efac" fontSize="12" textAnchor="middle" fontFamily="monospace">重複數次</text>
                <text x="580" y="240" fill="#86efac" fontSize="11" textAnchor="middle" opacity="0.8">(add &amp; commit)</text>

                <circle cx="680" cy="270" r="8" fill="#a855f7" stroke="#0f172a" strokeWidth="3" />
                <text x="680" y="295" fill="#d8b4fe" fontSize="12" textAnchor="middle" fontFamily="monospace">4. push</text>
                <text x="680" y="310" fill="#d8b4fe" fontSize="11" textAnchor="middle" opacity="0.8">(更新雲端)</text>

                <circle cx="780" cy="60" r="10" fill="#a855f7" stroke="#0f172a" strokeWidth="3" />
                <text x="780" y="30" fill="#d8b4fe" fontSize="14" textAnchor="middle" fontWeight="bold">5. 發出 PR</text>
                <text x="780" y="45" fill="#d8b4fe" fontSize="11" textAnchor="middle">合併至主線</text>
              </svg>
            </div>
          </div>
        </Card>
        
        <div className="space-y-6">
          
          {/* Step 1 */}
          <Card className="border-indigo-200 shadow-sm relative overflow-hidden bg-slate-50">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-400"></div>
             <div className="flex items-start gap-4 opacity-70">
               <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xl shrink-0 mt-1">1</div>
               <div className="flex-1">
                 <h4 className="font-bold text-lg text-slate-600 mb-2 flex items-center gap-2 line-through">
                   <Terminal size={18} /> 下載專案並進入資料夾 (Clone & CD)
                 </h4>
                 <div className="mt-2 bg-slate-100 border border-slate-200 rounded p-3 text-sm text-slate-600 flex items-start gap-2">
                   <CheckCircle size={16} className="mt-0.5 shrink-0 text-slate-500" />
                   <div>
                     <strong>✅ 你其實已經完成了！</strong><br/>
                     因為你現在正看著這個跑在你電腦上的教學網頁，這代表你稍早已經成功執行了 <code>git clone</code> 並 <code>cd</code> 進來了。所以這步我們直接打勾跳過！請打開你 VSCode 下方的終端機，準備進行下一步。
                   </div>
                 </div>
               </div>
             </div>
          </Card>

          {/* Step 2 */}
          <Card className="border-indigo-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl shrink-0 mt-1">2</div>
               <div className="flex-1">
                 <h4 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                   <GitBranch size={18} /> 建立專屬分支 (Branch)
                 </h4>
                 <p className="text-slate-600 mb-3 text-sm">為了不干擾 main 主線，請建立並切換到一個以你名字命名的分支。</p>
                 <div className="bg-slate-900 rounded p-4 font-mono text-sm text-green-400">
                   $ git checkout -b feat/your-name
                 </div>
                 <div className="mt-4 bg-green-50 border border-green-200 rounded p-3 text-sm text-green-800 flex items-start gap-2">
                   <CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" />
                   <div>
                     <strong>✅ 驗證成功：</strong><br/>
                     如果你看到 <code>Switched to a new branch 'feat/your-name'</code>，或是終端機的提示字元結尾變成了 <code>(feat/your-name)</code>，就代表你跳躍到新的宇宙了！
                   </div>
                 </div>
               </div>
             </div>
          </Card>

          {/* Step 3 */}
          <Card className="border-indigo-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl shrink-0 mt-1">3</div>
               <div className="flex-1">
                 <h4 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                   <FileText size={18} /> 新增檔案並存檔 (Add & Commit)
                 </h4>
                 <p className="text-slate-600 mb-3 text-sm">在 <code>learner-commits</code> 目錄下新增一個屬於你的檔案，裡面隨便寫幾句話打招呼。然後把它存檔進 Git。</p>

                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3 text-xs text-blue-800">
                   <div className="font-bold mb-2">💡 如何在 VSCode 裡新增檔案：</div>
                   <ol className="list-decimal pl-4 space-y-1">
                     <li>在 VSCode 左側的「檔案總管」（最上方的資料夾圖示）裡，找到 <code className="bg-blue-100 px-1 rounded">learner-commits</code> 資料夾</li>
                     <li>在 <code className="bg-blue-100 px-1 rounded">learner-commits</code> 資料夾上點右鍵 → <strong>New File</strong></li>
                     <li>輸入你的檔名，例如 <code className="bg-blue-100 px-1 rounded">blake.md</code>（改成你自己的名字）</li>
                     <li>在檔案裡輸入一些內容（例如「大家好，我是 Blake，這是我的第一個 Git 作業！」）</li>
                     <li>按 <strong>Ctrl+S</strong>（Mac 是 <strong>Cmd+S</strong>）儲存檔案</li>
                   </ol>
                   <div className="mt-2 text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-1">
                     ⚠️ 請建立<strong>新的</strong>檔案（你自己的名字），不要修改 <code className="bg-amber-100 px-1 rounded">example-blake.md</code>。
                   </div>
                 </div>

                 <div className="bg-slate-900 rounded p-4 font-mono text-sm text-green-400 space-y-2">
                   <div>$ git add learner-commits/your-name.md</div>
                   <div>$ git commit -m "docs: add your-name"</div>
                 </div>
                 <div className="mt-4 bg-green-50 border border-green-200 rounded p-3 text-sm text-green-800 flex items-start gap-2">
                   <CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" />
                   <div>
                     <strong>✅ 驗證成功：</strong><br/>
                     如果你看到 <code>[feat/your-name 1234567] docs: add your-name</code>，並且再輸入一次 <code>git status</code> 顯示 <code>nothing to commit, working tree clean</code>，代表快照拍攝成功！
                   </div>
                 </div>
               </div>
             </div>
          </Card>

          {/* Step 4 */}
          <Card className="border-indigo-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl shrink-0 mt-1">4</div>
               <div className="flex-1">
                 <h4 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                   <ArrowUpCircle size={18} /> 推送到 GitHub (Push)
                 </h4>
                 <p className="text-slate-600 mb-3 text-sm">因為這是一個全新的分支，遠端 GitHub 上還沒有它，所以第一次 Push 時需要加上 <code>-u origin</code> 來建立連結。</p>
                 <div className="bg-slate-900 rounded p-4 font-mono text-sm text-green-400">
                   $ git push -u origin feat/your-name
                 </div>
                 <div className="mt-4 bg-green-50 border border-green-200 rounded p-3 text-sm text-green-800 flex items-start gap-2">
                   <CheckCircle size={16} className="mt-0.5 shrink-0 text-green-600" />
                   <div>
                     <strong>✅ 驗證成功：</strong><br/>
                     終端機會跑出一堆上傳進度，最後你會看到 <code>* [new branch] feat/your-name -{'>'} feat/your-name</code>。同時，終端機通常還會貼心附上一行網址說 <code>Create a pull request for 'feat/your-name' on GitHub by visiting: ...</code>
                   </div>
                 </div>
               </div>
             </div>
          </Card>

          {/* Step 5 */}
          <Card className="border-indigo-200 shadow-sm relative overflow-hidden bg-indigo-50/30">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
             <div className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shrink-0 mt-1 shadow-md">5</div>
               <div className="flex-1">
                 <h4 className="font-bold text-lg text-indigo-900 mb-2 flex items-center gap-2">
                   <GitPullRequest size={18} /> 發起 Pull Request
                 </h4>
                 <p className="text-slate-700 mb-3 text-sm">現在你已經把分支推上去了，最後一步就是告訴專案維護者（老師）請他把你的作業合併進主線。</p>
                 
                 <div className="grid md:grid-cols-2 gap-4 mt-4">
                   <div className="bg-white p-4 border border-slate-200 rounded-lg">
                     <h5 className="font-bold text-slate-800 mb-2 text-sm flex items-center gap-2">🎯 方法一：透過瀏覽器 (推薦新手)</h5>
                     <ol className="list-decimal pl-4 space-y-2 text-sm text-slate-600">
                       <li>打開 GitHub 專案頁面。</li>
                       <li>你會看到一個黃色的提示框說 "feat/your-name had recent pushes..."。</li>
                       <li>點擊綠色的 <strong>Compare & pull request</strong> 按鈕。</li>
                     </ol>
                   </div>
                   
                   <div className="bg-white p-4 border border-slate-200 rounded-lg">
                     <h5 className="font-bold text-slate-800 mb-2 text-sm flex items-center gap-2">💻 方法二：使用 gh CLI (極速)</h5>
                     <div className="bg-slate-50 border border-slate-200 rounded p-2 mb-2 text-xs text-slate-600">
                       <div className="font-bold mb-1">先確認 gh 已連線：</div>
                       <div className="font-mono bg-slate-900 text-green-400 rounded p-1 px-2">$ gh auth status</div>
                       <div className="mt-1">看到 <code className="bg-slate-100 px-0.5 rounded">Logged in as 你的帳號</code> 才能繼續。<br/>
                       如果沒有，先執行 <code className="bg-slate-100 px-0.5 rounded">gh auth login</code> 重新連線。</div>
                     </div>
                     <p className="text-sm text-slate-600 mb-2">確認連線後，直接在終端機輸入：</p>
                     <div className="bg-slate-900 rounded p-2 font-mono text-[11px] text-green-400">
                       $ gh pr create --title "交作業：your-name" --body "完成了實戰演練"
                     </div>
                     <p className="text-xs text-slate-500 mt-2">按下 Enter，幾秒鐘內 PR 就建好了，終端機會回傳該 PR 的網址給你！</p>
                   </div>
                 </div>
                 
                 <div className="mt-4 flex items-center justify-center">
                   <div className="animate-pulse bg-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-indigo-200">
                     🎉 大功告成！等待維護者 Approve 你的 PR 吧！
                   </div>
                 </div>

                 <div className="mt-6 bg-white border border-slate-200 rounded-xl p-5">
                   <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                     <CheckCircle size={16} className="text-green-500" /> PR 送出後會發生什麼？
                   </h5>
                   <div className="space-y-3 text-sm">
                     <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                       <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                       <div>
                         <div className="font-bold text-green-800">維護者 Approve &amp; Merge ✅</div>
                         <p className="text-green-700 text-xs mt-1">
                           代表維護者認同並接納你的貢獻——你的創作正式成為這個專案的一部分了！🎉<br/>
                           你會收到 GitHub 通知信。回到本地後，記得執行 <code className="bg-green-100 px-1 rounded">git pull</code>，把最新的 main 同步回你的電腦。
                         </p>
                       </div>
                     </div>
                     <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                       <span className="text-amber-600 text-base leading-none mt-0.5">💬</span>
                       <div>
                         <div className="font-bold text-amber-800">維護者 Request Changes（要求修改）</div>
                         <p className="text-amber-700 text-xs mt-1">
                           代表他看了、有想法、希望你調整某些地方。不是拒絕！<br/>
                           在本地修改後，重新 <code className="bg-amber-100 px-1 rounded">git add .</code> → <code className="bg-amber-100 px-1 rounded">git commit</code> → <code className="bg-amber-100 px-1 rounded">git push</code>，PR 頁面會自動更新。
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
