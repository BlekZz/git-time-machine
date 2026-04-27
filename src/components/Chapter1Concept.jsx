import React from 'react';
import { SectionTitle, Card, Badge } from './Shared';
import { GitGraph, Server, Monitor, Laptop, Cpu, CheckCircle, Key, Info, Folder, AlertCircle, HardDrive, Database, Cloud, Github, ArrowRight, Terminal, Users, Sparkles, BookOpen, TrendingUp } from 'lucide-react';

export const Chapter1Concept = () => (
  <div className="space-y-8 animate-fade-in">
    <SectionTitle title="1. 觀念與準備" subtitle="在開始你的時光機之旅前，我們先把裝備確認好" />

    {/* 學會後能做到的事 */}
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-white/20 rounded-lg">
          <Sparkles size={22} />
        </div>
        <h3 className="text-xl font-bold">學會 Git + GitHub，你就能夠……</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* TA 1: 文組生 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-yellow-300" />
            <span className="text-sm font-bold text-yellow-200">✍️ 給文組生 / 完全零基礎的你</span>
          </div>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>把你的小說、部落格草稿、設計稿的每個版本都保存下來，再也不怕「改了之後後悔」</li>
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>和同學線上共同編輯一份報告，不再需要傳「最終版」「最終最終版」「真的最終版」</li>
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>讓面試官看到你認真維護的 GitHub 主頁，這比任何履歷都有說服力</li>
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>參與任何開源專案、在業界做任何「跨部門協作」的基礎技能</li>
          </ul>
        </div>

        {/* TA 2: 數據分析菜鳥 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={16} className="text-cyan-300" />
            <span className="text-sm font-bold text-cyan-200">📊 給會用 Python / Excel 的數據分析新手</span>
          </div>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>把你的 Jupyter Notebook、Python 清洗腳本放上 GitHub，告別只存在自己電腦的「孤島作品」</li>
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>和工程師同事用同一套流程協作，從此說「單機世界」再見，正式進入 MMO 合作模式</li>
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>追蹤每次調整模型參數、特徵工程的版本，再也不會問「這個 model 上週跑的結果在哪？」</li>
            <li className="flex items-start gap-2"><span className="text-green-300 font-bold mt-0.5">✓</span>當工程師說「把你的 code 丟到 repo 來」，你直接秒懂並完成，不再需要尷尬地問「什麼是 repo？」</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 bg-white/10 rounded-lg px-4 py-3 text-sm text-white/80 flex items-start gap-2">
        <span className="text-yellow-300 text-base leading-none mt-0.5">💡</span>
        <span>這門課結束後，你就正式從「單機存檔玩家」升級為「多人線上協作工程師」。準備好了嗎？</span>
      </div>
    </div>
    
    {/* Jargon Dictionary */}
    <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
          <GitGraph size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-indigo-900">什麼是 Git？秒懂核心黑話字典</h3>
          <p className="text-sm text-indigo-700 mt-1">Git 是一個「版本控制系統」。不用怕名詞太高深，如果你有玩過單機遊戲，那你其實已經懂了！</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-3 rounded border border-indigo-100 shadow-sm">
          <div className="font-bold text-slate-800 mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Commit</div>
          <div className="text-indigo-600 font-bold text-sm mb-1">🎮 遊戲存檔點</div>
          <p className="text-xs text-slate-600">「打王前存個檔！」把目前的程式碼狀態拍下快照，未來搞砸了可以隨時讀檔回到這裡，不用再手動複製備份。</p>
        </div>
        <div className="bg-white p-3 rounded border border-indigo-100 shadow-sm">
          <div className="font-bold text-slate-800 mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Branch</div>
          <div className="text-indigo-600 font-bold text-sm mb-1">🌌 平行宇宙</div>
          <p className="text-xs text-slate-600">「開個新存檔欄位看不同結局。」複製主線去開發新功能，就算整個搞砸了，主線（main）依然完美無缺。</p>
        </div>
        <div className="bg-white p-3 rounded border border-indigo-100 shadow-sm">
          <div className="font-bold text-slate-800 mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Push / Pull</div>
          <div className="text-indigo-600 font-bold text-sm mb-1">☁️ 雲端同步</div>
          <p className="text-xs text-slate-600">「換台電腦繼續玩！」把你本地的存檔上傳 (Push) 到雲端伺服器，或是把雲端的最新存檔下載 (Pull) 回來。</p>
        </div>
        <div className="bg-white p-3 rounded border border-indigo-100 shadow-sm">
          <div className="font-bold text-slate-800 mb-1 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div> Merge / PR</div>
          <div className="text-indigo-600 font-bold text-sm mb-1">🔗 結局收束</div>
          <p className="text-xs text-slate-600">「全收集大團圓！」審核通過後，把平行宇宙 (Branch) 中開發好的新功能，正式融入完美的主線劇情中。</p>
        </div>
      </div>
    </Card>

    {/* Git / GitHub / GitLab Table */}
    <Card className="bg-slate-50 border-slate-200">
      <h3 className="text-md font-bold mb-4 flex items-center gap-2 text-slate-700">
        <Server size={18} /> 工具與平台比較表
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-500 uppercase bg-slate-200/50">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">名稱</th>
              <th className="px-4 py-3">本質</th>
              <th className="px-4 py-3">核心功能</th>
              <th className="px-4 py-3 rounded-tr-lg">適合誰 / 特色</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 bg-white">
              <td className="px-4 py-3 font-bold text-orange-600 flex items-center gap-2">
                <GitGraph size={16} /> Git
              </td>
              <td className="px-4 py-3">工具 (軟體)</td>
              <td className="px-4 py-3">在你的<strong>電腦本地端</strong>記錄檔案版本、管理分支</td>
              <td className="px-4 py-3">每個工程師的電腦都必須安裝。底層核心。</td>
            </tr>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <td className="px-4 py-3 font-bold text-slate-800 flex items-center gap-2">
                <Github size={16} /> GitHub
              </td>
              <td className="px-4 py-3">雲端平台 (微軟)</td>
              <td className="px-4 py-3">提供 Git 倉庫的遠端代管、開源社群、Pull Request</td>
              <td className="px-4 py-3">全球最大的開源社群。找開源專案、放個人作品集首選。</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-bold text-orange-500 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.65 14.39L12 22.13 1.35 14.39a2.12 2.12 0 0 1-.63-2.92l3-5.52a2 2 0 0 1 1.76-1.04h13.06a2 2 0 0 1 1.76 1.04l3 5.52a2.12 2.12 0 0 1-.65 2.92z"/></svg> GitLab
              </td>
              <td className="px-4 py-3">雲端平台 (或私有部署)</td>
              <td className="px-4 py-3">強大的 CI/CD (自動化部署)、專案管理、權限控制</td>
              <td className="px-4 py-3">很多<strong>企業內部</strong>愛用，因為可以架設在公司自己的伺服器上。</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 mt-4 bg-indigo-50 p-2 rounded">
        💡 <strong>簡單來說：</strong> Git 是影片剪輯軟體，GitHub / GitLab 就是 YouTube。你要先用剪輯軟體 (Git) 做好影片，然後再上傳到 YouTube (GitHub) 給別人看或共同合作。
      </p>
    </Card>

    {/* Setup Reminder */}
    <div className="bg-green-50 border border-green-200 rounded-lg p-5 flex gap-4 items-start">
      <CheckCircle className="text-green-600 mt-0.5 shrink-0" />
      <div>
        <h4 className="font-bold text-green-800 mb-1">你準備好了嗎？</h4>
        <p className="text-sm text-green-700">
          如果你還沒有安裝 Git, Node.js 或 VSCode，請立刻去查看專案根目錄的 <code className="bg-green-100 px-1 rounded">Beginner-Setup-Guide.md</code>。
          以下章節假設你已經安裝完畢，並且知道如何打開 Terminal（終端機）！
        </p>
      </div>
    </div>

    {/* --- 設置身份 --- */}
    <div>
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Key size={20} className="text-amber-500" /> Local 端身份設定
      </h3>
      <Card className="bg-slate-50">
        <p className="text-sm text-slate-600 mb-3">每次 Commit 都會記錄「是誰做的」。安裝完 Git 後，第一件事就是設定你的身份：</p>
        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-200 space-y-2">
          <div><span className="text-green-400">$</span> git config --global user.name <span className="text-amber-300">"Your Name"</span></div>
          <div><span className="text-green-400">$</span> git config --global user.email <span className="text-amber-300">"you@example.com"</span></div>
          <div className="border-t border-slate-700 pt-2 mt-2">
            <span className="text-slate-500"># 確認設定</span>
          </div>
          <div><span className="text-green-400">$</span> git config --list</div>
        </div>
        <div className="mt-3 grid sm:grid-cols-2 gap-3">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 flex items-start gap-2">
            <Info size={14} className="shrink-0 mt-0.5" />
            <span><strong>--global</strong> 代表全域設定，適用於你電腦上所有 Git 專案。</span>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-800 flex items-start gap-2">
            <Info size={14} className="shrink-0 mt-0.5" />
            <span>如果你未來要推上 GitHub，這裡的 <strong>email 需要和 GitHub 帳號一致</strong>，大頭貼才會正確顯示。</span>
          </div>
        </div>
      </Card>
    </div>

    {/* --- .git 資料夾警告 --- */}
    <div>
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Folder size={20} className="text-red-500" /> .git 資料夾 = 你的存檔本體
      </h3>
      <Card className="border-red-200 bg-red-50/30">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-4 text-sm text-red-800 flex items-start gap-2">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span><strong>刪除 <code>.git</code> = 刪除所有歷史紀錄！</strong>除非你已經 Push 到遠端，否則一切無法復原。</span>
            </div>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <HardDrive size={14} className="text-slate-400 mt-1 shrink-0" />
                <span>執行 <code>git init</code> 後，專案根目錄會產生隱藏的 <code>.git/</code> 資料夾</span>
              </li>
              <li className="flex items-start gap-2">
                <Database size={14} className="text-slate-400 mt-1 shrink-0" />
                <span>所有 Commit 歷史、Branch、Tag 都存在這裡面</span>
              </li>
              <li className="flex items-start gap-2">
                <Cloud size={14} className="text-slate-400 mt-1 shrink-0" />
                <span>只有<strong>已 Push 到 Remote</strong> 的記錄，才有異地備份</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                  <Laptop size={28} />
                </div>
                <div className="mt-1 bg-yellow-100 border-2 border-yellow-300 rounded px-2 py-0.5 text-[10px] font-bold text-yellow-700 flex items-center gap-1">
                  <Folder size={10} /> .git/
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ArrowRight size={20} className="text-green-500" />
                <span className="text-[10px] text-green-600 font-bold">git push</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-lg">
                  <Github size={28} />
                </div>
                <div className="mt-1 bg-green-100 border border-green-300 rounded px-2 py-0.5 text-[10px] font-bold text-green-700 flex items-center gap-1">
                  <CheckCircle size={10} /> 安全備份
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);
