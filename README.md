# Git Time Machine 🚀

一個互動式 Git 教學網頁應用，透過視覺化模擬讓初學者從零開始理解版本控制。

## 🌐 不想安裝任何東西？

> **線上版即將推出** — 部署完成後，你可以直接在瀏覽器裡學習，不需要安裝任何軟體。

---

> ⚠️ **【完全零基礎的新手請注意】** ⚠️
>
> 如果你是完全沒有接觸過寫程式、終端機（Terminal）或 Git 的小白，請**務必先閱讀** [👶 零基礎新手安裝與準備指南](./Beginner-Setup-Guide.md)！
> 它會手把手教你安裝必備軟體，並在最後直接帶你啟動這個教學網頁。**完成指南後，你就可以直接開始學習，不需要回來看這份 README 的安裝步驟。**

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
- **Node.js** 20+
- **Git** 
- **VSCode** 搭配 Git Graph / GitLens 插件

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

## 🚀 快速開始 (老手專區)

> 💡 **零基礎新手請注意**：請直接前往 [👶 零基礎新手安裝與準備指南](./Beginner-Setup-Guide.md)，那裡有專為你寫的詳細圖文教學！

### 1. 下載本專案

```bash
git clone https://github.com/BlekZz/git-time-machine.git
cd git-time-machine
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

接著打開瀏覽器，前往 `http://localhost:5173/` 即可開始使用。

---

## ❓ 常見問題

| 問題 | 解決方法 |
|------|----------|
| `npm install` 失敗 | 確認 Node.js 版本 ≥ 20（在終端機輸入 `node -v` 確認），使用 PowerShell 或 VSCode Terminal |
| `npm run dev` 無畫面 | 確認瀏覽器已開啟 `http://localhost:5173/` |
| `git push` 沒權限 | 確認已登入 GitHub（透過 `gh auth login`、git credential 或 SSH key） |

---

## 🔧 教學者快速重置

若實習生環境損壞：

```bash
git reset --hard
git pull
npm install
```

> ⚠️ **警告**：`git reset --hard` 會將所有未儲存的本地修改清空。如果有重要的修改還沒有 commit，請先備份！

---

## 📄 License

MIT
