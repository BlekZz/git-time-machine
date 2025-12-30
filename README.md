# Git Time Machine

一個用來教學 Git、前端基本操作、跨裝置協作的互動專案。

實習生可透過本專案練習：

* git clone / pull / push
* npm install / npm run dev
* 在 localhost 上開啟網頁並互動
* 按講義完成指定修改並提交 PR 或直接 push
* 學習版本控制與多人協作的基本操作

---

## 1. 環境需求（Requirements）

請確認你的設備已安裝：

1. **Node.js 18+ 或 20+**

   建議下載 LTS 版本：[https://nodejs.org](https://nodejs.org)

**Git**

下載：[https://git-scm.com](https://git-scm.com)

1. 推薦工具：
   * VSCode（含 Git Graph / GitLens 等插件）
   * Chrome 或任何現代瀏覽器

---

## 2. 第一次使用（Setup）

第一次在你的電腦開啟專案時，請依序執行：

### 2.1 下載專案（只有第一次需要）

<pre class="overflow-visible! px-0!" data-start="627" data-end="695"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git </span><span>clone</span><span> https://github.com/BlekZz/git-time-machine.git
</span></span></code></div></div></pre>

或你在 Windows 上也可以使用：

<pre class="overflow-visible! px-0!" data-start="718" data-end="763"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>gh repo </span><span>clone</span><span> BlekZz/git-time-machine
</span></span></code></div></div></pre>

進入專案資料夾：

<pre class="overflow-visible! px-0!" data-start="775" data-end="806"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> git-time-machine
</span></span></code></div></div></pre>

---

### 2.2 安裝套件（只有第一次需要）

<pre class="overflow-visible! px-0!" data-start="836" data-end="859"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

這會安裝 Vite、React、TailwindCSS 等所有必要依賴。

---

## 3. 啟動專案（Run Locally）

每次想啟動本地開發伺服器時：

<pre class="overflow-visible! px-0!" data-start="945" data-end="968"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

執行後會看到類似：

<pre class="overflow-visible! px-0!" data-start="981" data-end="1018"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>Local: http:</span><span>//localhost:5173/</span><span>
</span></span></code></div></div></pre>

用瀏覽器打開此網址即可開始互動教學。

---

## 4. 實習生 Git 練習流程

以下為每台電腦、每位實習生每日進來要做的基本操作。

### 4.1 取得最新版本（每天開始前做）

<pre class="overflow-visible! px-0!" data-start="1116" data-end="1136"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git pull
</span></span></code></div></div></pre>

### 4.2 進行指定任務（修改程式碼）

在 VSCode 中修改 `src/` 裡面的內容即可。

---

## 5. 提交你的修改（Commit & Push）

完成任務後，請使用：

<pre class="overflow-visible! px-0!" data-start="1237" data-end="1309"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git add .
git commit -m </span><span>"Describe what you changed"</span><span>
git push
</span></span></code></div></div></pre>

若是多人協作，你也可以使用分支：

<pre class="overflow-visible! px-0!" data-start="1329" data-end="1421"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git checkout -b feature/your-name-task
git push -u origin feature/your-name-task
</span></span></code></div></div></pre>

再到 GitHub 開 PR。

---

## 6. 常見問題（FAQ）

### Q1：`npm install` 失敗怎麼辦？

可能原因：

* Node 版本太舊（請用 Node 18+）
* Windows 權限問題（請用 Powershell 或 VSCode Terminal）

### Q2：`npm run dev` 執行後沒有畫面？

請確認：

* 瀏覽器是否打開 `http://localhost:5173/`
* Terminal 是否被防火牆或公司網路限制

### Q3：`git push` 顯示沒有權限？

請確認你已：

* 登入 GitHub（使用 git credential）
* 或使用 SSH key
* 或是你 fork 的專案，需要 PR 才能合併

---

## 7. 專案結構（Project Structure）

<pre class="overflow-visible! px-0!" data-start="1812" data-end="2151"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>git-time-machine/
│
├── src/                  </span><span># 前端主要程式碼</span><span>
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── </span><span>public</span><span>/               </span><span># 靜態資源</span><span>
│
├── package.json          </span><span># 專案設定 / Scripts / Dependencies</span><span>
├── vite.config.js        </span><span># Vite 設定</span><span>
├── tailwind.config.js    </span><span># Tailwind 設定</span><span>
├── postcss.config.js
└── README.md             </span><span># 本文件</span><span>
</span></span></code></div></div></pre>

---

## 8. 教學者用（你的角度）

若你是教學者（Blake）使用本 repo 作為訓練教材，可用以下方式管理實習生流程：

### 8.1 教學指令組合（投影片／講義可直接用）

* 第一次下載：

  `git clone`
* 每天更新：

  `git pull`
* 修改程式碼：

  VSCode
* 本地執行：

  `npm run dev`
* 查看結果：

  [http://localhost:5173]()

### 8.2 如何快速重置專案

若實習生弄壞環境，可執行：

<pre class="overflow-visible! px-0!" data-start="2411" data-end="2460"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>git reset --hard
git pull
npm install
</span></span></code></div></div></pre>

（會回到最新乾淨版本）

---

## 9. License

MIT
