# Git Time Machine 🚀

一個互動式 Git 教學網頁應用，透過視覺化模擬讓初學者從零開始理解版本控制。

## 🌐 不想安裝任何東西？

> **線上版即將推出** — 部署完成後，你可以直接在瀏覽器裡學習，不需要安裝任何軟體。

---

> ⚠️ **【完全零基礎的新手請注意】** ⚠️
>
> 如果你是完全沒有接觸過寫程式、終端機（Terminal）或 Git 的小白，請**務必先閱讀** [👶 零基礎新手安裝與準備指南](./Beginner-Setup-Guide.md)！
> 它會教你如何打開終端機，並一步一步在 Windows/Mac 上安裝必備軟體。請完成那份指南後，再回來繼續往下看。

---

## 🚀 學會 Git + GitHub，你就能夠……

> **不同背景的你，都能找到學這門課的理由：**

### ✍️ 給文組生 / 完全零基礎的你
- 把你的小說草稿、部落格文章、設計稿的每個版本都保存下來，再也不怕「改了之後後悔」
- 和同學線上共同編輯一份報告，告別「最終版」「最終最終版」「真的最終版」的循環
- 讓面試官看到你認真維護的 GitHub 主頁，比任何履歷都更有說服力
- 具備參與任何開源專案、跨部門協作的基礎技能

### 📊 給會用 Python / Excel 的數據分析新手
- 把你的 Jupyter Notebook、清洗腳本放上 GitHub，告別只存在自己電腦的「孤島作品」
- 和工程師同事用同一套工作流程協作，從此說「單機世界」再見，正式進入 MMO 合作模式
- 追蹤每次調整模型參數、特徵工程的版本，不再找不回「上週那個跑得最好的模型」
- 當工程師說「把你的 code 丟到 repo 來」，你直接秒懂並完成

---



### 📖 八大互動章節

| 章節 | 內容 | 互動方式 |
|------|------|----------|
| **1. 觀念與準備** | Git/GitHub/GitLab 比較表、Local 端身份設定、Git 時間線圖 | 靜態圖解 + 比較表 |
| **2. 流程總覽** | 情境 A (從零開始) 與 情境 B (參與現有專案) 路線差異 | 視覺化流程圖 |
| **3. 情境 A** | `git init` -> `add/commit` -> `remote add` -> `push` | 分步按鈕 + 動畫連線 + 模擬終端 |
| **4. 情境 B** | `git clone` -> `cd` -> `status` -> `add/commit` -> `push` | 分步按鈕 + 動畫連線 + 模擬終端 |
| **5. 分支跳躍** | 建立分支、切換分支、`checkout -b` | 平行宇宙狀態圖 + 模擬終端 |
| **6. 同步與衝突** | Push/Pull 差異、防呆模擬、衝突(Conflict)解決、Merge vs Rebase | 雙向 Timeline + 衝突解碼 + 程式碼 Diff |
| **7. 團隊與 PR** | PR 觀念解析 (版本迭代 vs 分支合併)、GitHub CLI 發起教學 | PR 一生流程圖 |
| **8. 實戰演練** | 新增個人筆記、建立分支、發起 Pull Request | Hands-on PR 實戰指南 + 驗證機制 |

### 🎨 設計亮點
- 全寬模擬終端機，真實還原指令操作體驗
- 即時視覺回饋（動畫、狀態變化、連線效果）
- 響應式設計，支援桌面與平板
- 繁體中文介面

---

## 🛠 環境需求

請確保你已經根據 [零基礎新手安裝與準備指南](./Beginner-Setup-Guide.md) 安裝好以下軟體：
- **Node.js** 18+ 
- **Git** 
- **VSCode** 搭配 Git Graph / GitLens 插件

---

## 🚀 快速開始

> 💡 **零基礎的同學**：如果你還沒裝好 Node.js 和 Git，請先閱讀 [👶 零基礎新手安裝與準備指南](./Beginner-Setup-Guide.md)。那份指南的最後會直接帶你完成以下步驟，不用再回來這裡。

### 1. 下載本專案

打開你的終端機 (Terminal / PowerShell)，輸入：

```bash
git clone https://github.com/BlekZz/git-time-machine.git
cd git-time-machine
```

> **✅ 驗證**：如果你在終端機看到類似 `Receiving objects: 100%` 的字樣，且沒有報錯，代表下載完畢！

### 2. 安裝依賴 (下載魔法工具包)

```bash
npm install
```

> **⏳ 等待與驗證**：這一步會從網路下載工具，畫面會跑很多文字，屬於正常現象。
>
> - 黃色 `npm warn deprecated` → 正常，忽略
> - `found X vulnerabilities` → 正常，忽略
> - 最後出現 `added X packages` → ✅ 安裝成功
> - 紅色 `ERR!` → 真正的錯誤，截圖給老師

### 3. 啟動開發伺服器 (讓網頁跑起來)

```bash
npm run dev
```

> **✅ 驗證**：如果你在終端機看到 `VITE vX.X.X  ready in X ms` 並且有一行綠色的字寫著 `➜  Local:   http://localhost:5173/`，代表已經啟動成功！接著，打開你的瀏覽器，輸入網址 `http://localhost:5173/` 就可以開始互動學習啦！

---

## 📁 專案結構

```text
git-time-machine/
├── src/
│   ├── components/      # 各個互動章節的獨立元件 (Chapter 1 ~ 8)
│   ├── App.jsx          # 主要應用程式（匯整所有章節）
│   ├── main.jsx         # React 入口
│   └── index.css        # 全域樣式（Tailwind）
├── public/              # 靜態資源
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## ❓ 常見問題

| 問題 | 解決方法 |
|------|----------|
| `npm install` 失敗 | 確認 Node.js 版本 ≥ 20（在終端機輸入 `node -v` 確認），使用 PowerShell 或 VSCode Terminal |
| `npm run dev` 無畫面 | 確認瀏覽器已開啟 `http://localhost:5173/` |
| `git push` 沒權限 | 確認已登入 GitHub（git credential 或 SSH key） |

---

## 🔧 教學者快速重置

若實習生環境損壞：

```bash
git reset --hard
git pull
npm install
```

---

## 📄 License

MIT
