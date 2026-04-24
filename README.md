# Git Time Machine 🚀

一個互動式 Git 教學網頁應用，透過視覺化模擬讓初學者從零開始理解版本控制。

> ⚠️ **【完全零基礎的新手請注意】** ⚠️
>
> 如果你是完全沒有接觸過寫程式、終端機（Terminal）或 Git 的小白，請**務必先閱讀** [👶 零基礎新手安裝與準備指南](./Beginner-Setup-Guide.md)！
> 它會教你如何打開終端機，並一步一步在 Windows/Mac 上安裝必備軟體。請完成那份指南後，再回來繼續往下看。

## ✨ 功能特色

### 📖 五大互動章節

| 章節 | 內容 | 互動方式 |
|------|------|----------|
| **1. 觀念與區別** | Git vs GitHub、安裝指南、身份設定、Cheatsheet | 靜態圖解 |
| **2. 建立與連結** | `git init` / `git remote add` / `git clone` | 分步按鈕 + 視覺動畫 + 模擬終端 |
| **3. Add, Commit & Ignore** | 三區域概念、檔案狀態管理、`.gitignore` | 個別檔案 Add + 模擬終端 |
| **4. Push 與 Pull** | 同步流程、Fetch vs Pull、Push Rejected 處理 | Timeline 視覺化 + 模擬終端 |
| **5. 團隊協作** | Merge vs Rebase、PR 流程、衝突解決指南 | 動態圖表 + 程式碼 Diff |
| **6. 實戰演練** | 新增個人筆記、建立分支、發起 Pull Request、Owner 合併 | Hands-on PR 實戰指南 |

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

## 🚀 快速開始 (適合已經裝好 Node.js 與 Git 的人)

### 1. 下載本專案

打開你的終端機 (Terminal / PowerShell)，輸入：

```bash
git clone https://github.com/BlekZz/git-time-machine.git
cd git-time-machine
```

### 2. 安裝依賴 (下載魔法工具包)

```bash
npm install
```

> **提示**：若出現 npm vulnerability 警告，不用理會，或是執行 `npm audit fix` 即可。

### 3. 啟動開發伺服器 (讓網頁跑起來)

```bash
npm run dev
```

接著，打開你的瀏覽器，輸入網址 `http://localhost:5173/` 就可以開始互動學習啦！

---

## 📁 專案結構

```
git-time-machine/
├── src/
│   ├── App.jsx          # 主要應用程式（含全部 5 個章節元件）
│   ├── main.jsx         # React 入口
│   └── index.css        # 全域樣式（Tailwind）
├── public/              # 靜態資源
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 👨‍💻 實習生操作指南

### 每日流程

```bash
# 1. 取得最新版本
git pull

# 2. 啟動本地伺服器
npm run dev

# 3. 完成修改後提交
git add .
git commit -m "feat: 完成指定任務"
git push
```

### 分支協作（進階）

```bash
git checkout -b feature/your-name-task
# ... 修改程式碼 ...
git push -u origin feature/your-name-task
# 到 GitHub 開 Pull Request
```

---

## ❓ 常見問題

| 問題 | 解決方法 |
|------|----------|
| `npm install` 失敗 | 確認 Node.js 版本 ≥ 18，使用 PowerShell 或 VSCode Terminal |
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
