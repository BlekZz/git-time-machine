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

      {/* Part 2: Step-by-Step Hands-on */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Badge color="blue">任務步驟</Badge>
          <h3 className="text-xl font-bold text-slate-800">請跟著以下步驟，一步步在你的電腦上執行：</h3>
        </div>

        {/* 實戰示意圖 */}
        <Card className="bg-slate-800 mb-8 border-slate-700 overflow-x-auto">
          <div className="min-w-[600px] h-48 relative flex items-center justify-center">
            {/* Main branch line */}
            <div className="absolute top-1/4 left-10 right-10 h-1.5 bg-indigo-500/50 rounded-full"></div>
            <div className="absolute left-4 top-1/4 -translate-y-1/2 text-xs font-bold text-indigo-300">main 主線</div>
            <div className="absolute left-20 top-1/4 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-800"></div>
            
            {/* Learner branch line */}
            <div className="absolute top-[75%] left-32 right-32 h-1.5 bg-green-500/30 rounded-full border border-dashed border-green-500/50"></div>
            
            {/* Step 1 & 2: Branch out */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 80 25% C 100 25%, 110 75%, 140 75%" fill="none" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="3" strokeDasharray="4" />
            </svg>
            <div className="absolute left-[140px] top-[75%] -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 ring-4 ring-slate-800"></div>
            <div className="absolute left-[140px] top-[85%] -translate-x-1/2 text-[10px] text-green-400 font-mono">1 & 2. checkout -b</div>

            {/* Step 3: Iterations (Commits) */}
            <div className="absolute left-[240px] top-[75%] -translate-y-1/2 w-4 h-4 rounded-full bg-green-400 ring-4 ring-slate-800"></div>
            <div className="absolute left-[340px] top-[75%] -translate-y-1/2 w-4 h-4 rounded-full bg-green-400 ring-4 ring-slate-800"></div>
            <div className="absolute left-[290px] top-[85%] -translate-x-1/2 text-[10px] text-green-400 font-mono">3. 數次 add & commit</div>

            {/* Step 4: Push */}
            <div className="absolute left-[440px] top-[75%] -translate-y-1/2 w-4 h-4 rounded-full bg-green-400 ring-4 ring-slate-800 animate-pulse"></div>
            <div className="absolute left-[440px] top-[85%] -translate-x-1/2 text-[10px] text-green-400 font-mono">4. push</div>

            {/* Step 5: PR (Merge) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 440 75% C 470 75%, 480 25%, 520 25%" fill="none" stroke="rgba(168, 85, 247, 0.8)" strokeWidth="3" strokeDasharray="4" />
            </svg>
            <div className="absolute left-[520px] top-1/4 -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 ring-4 ring-slate-800 flex items-center justify-center">
               <GitPullRequest size={12} className="text-white" />
            </div>
            <div className="absolute left-[520px] top-[10%] -translate-x-1/2 text-[10px] text-purple-300 font-bold bg-purple-900/50 px-2 py-0.5 rounded">5. 發出 PR</div>
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
                 <p className="text-slate-600 mb-3 text-sm">用 VSCode 打開這個資料夾，在 <code>learner-commits</code> 目錄下新增一個檔案（例如 <code>blake.md</code>），裡面隨便寫幾句話打招呼。然後把它存檔進 Git。</p>
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
                       <li>檢查一下你要合併的對象（從 feat/your-name 合併到 main），寫下標題，點擊 <strong>Create pull request</strong>！</li>
                     </ol>
                   </div>
                   
                   <div className="bg-white p-4 border border-slate-200 rounded-lg">
                     <h5 className="font-bold text-slate-800 mb-2 text-sm flex items-center gap-2">💻 方法二：使用 gh CLI (極速)</h5>
                     <p className="text-sm text-slate-600 mb-2">如果你有安裝 GitHub CLI，直接在終端機輸入：</p>
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
               </div>
             </div>
          </Card>
        </div>
      </section>
    </div>
  );
};
