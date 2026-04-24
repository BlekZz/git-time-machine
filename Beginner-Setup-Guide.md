# 👶 Git Time Machine - 零基礎新手安裝與準備指南

> ⚠️ **注意**：如果你完全沒有接觸過寫程式，或是不知道什麼是終端機（Terminal）、Git、Node.js，請**務必先完成這份指南的步驟**，再去看 `README.md`！

這份指南將會一步步教你把電腦準備好，就像是在玩遊戲前，我們需要先安裝遊戲主機和手把一樣。

---

## 步驟一：打開「終端機」（輸入黑客指令的地方）

寫程式的時候，我們經常需要透過「終端機」（Terminal）來對電腦下達指令，而不是用滑鼠點擊。

### 🪟 Windows 用戶
1. 按下鍵盤上的 `Windows 標誌鍵`（或是點擊螢幕左下角的開始按鈕）。
2. 在搜尋框中輸入 `powershell`。
3. 看到「Windows PowerShell」後，點擊開啟。
4. 你會看到一個藍底或黑底的視窗，這就是你的終端機！

### 🍎 Mac OS 用戶
1. 按下鍵盤上的 `Command (⌘)` + `空白鍵 (Space)` 開啟 Spotlight 搜尋。
2. 輸入 `Terminal` 或 `終端機`。
3. 按下 `Enter`，你會看到一個白底或黑底的視窗，這就是你的終端機！

---

## 步驟二：安裝必備軟體

我們需要安裝三個主要工具：**Node.js**（讓網頁跑起來的引擎）、**Git**（幫我們記錄檔案版本的工具）和 **VSCode**（寫程式用的編輯器）。

### 1. 下載並安裝 VSCode (Visual Studio Code)
這是一款免費且超強大的打字機（文字編輯器），全球的工程師都在用。
- 前往官網下載：[https://code.visualstudio.com/](https://code.visualstudio.com/)
- 點擊大大的 Download 按鈕，下載後直接一直按「下一步」安裝到好。

### 2. 下載並安裝 Node.js
這是讓我們的互動網頁能在你電腦上運作的必備軟體。
- 前往官網下載：[https://nodejs.org/](https://nodejs.org/)
- 選擇標有 **LTS (長期維護版)** 的按鈕下載。
- 下載後打開安裝檔，一路按「Next / 繼續 / 同意」直到安裝完成。

### 3. 下載並安裝 Git
這是版本控制的核心軟體。

**🪟 Windows 用戶：**
- 前往 Git 官網：[https://git-scm.com/download/win](https://git-scm.com/download/win)
- 點擊 "Click here to download" 或選擇 "64-bit Git for Windows Setup"。
- 下載後打開，**在安裝過程中一直按「Next」就好**，不需要修改任何預設選項。

**🍎 Mac OS 用戶：**
Mac 推薦使用 `Homebrew` 來安裝，這是一個非常方便的 Mac 軟體管理工具。
1. 打開剛剛教你開的「終端機」。
2. 複製以下指令貼上並按 `Enter`（這會安裝 Homebrew）：
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   *(如果它要你輸入密碼，請輸入你的 Mac 開機密碼。輸入時螢幕不會顯示字是正常的，輸入完按 Enter)*
3. 安裝完 Homebrew 後，再次複製以下指令貼上並按 `Enter`：
   ```bash
   brew install git
   ```
*(如果你不想用 Homebrew，也可以直接到 [Git 官網](https://git-scm.com/download/mac) 下載安裝檔，但使用 Homebrew 會讓未來更新更簡單！)*

---

## 步驟三：確認安裝成功

打開你的「終端機」（Windows PowerShell 或是 Mac Terminal），輸入以下兩行指令（一次輸入一行並按 Enter）：

```bash
node -v
git -v
```

如果你看到類似 `v18.16.0` 和 `git version 2.39.2` 這樣的數字，就代表你安裝成功了！🎉

---

## 步驟四：安裝 VSCode 必備外掛 (Extensions)

打開你剛剛安裝的 VSCode，點擊左側邊欄的**四個方塊圖示**（這叫做 Extensions/延伸模組）。
在搜尋框中搜尋並安裝以下兩個外掛：
1. **Git Graph**：可以讓你用視覺化的方式看到 Git 的時間線。（搜尋 `Git Graph`，點擊 Install）
2. **GitLens**：超強大的 Git 輔助工具。（搜尋 `GitLens`，點擊 Install）

---

## 🎉 準備完成！接下來呢？

恭喜你！你的電腦已經完全準備好了。
現在，請你打開 VSCode。
1. 點擊頂部選單的 `Terminal` -> `New Terminal` (終端機 -> 新增終端機)。
2. VSCode 下方會跑出一個終端機面板。
3. 現在你可以回到 `README.md`，從 **「🚀 快速開始」** 的第一步 `git clone ...` 開始照著做囉！

> 💡 **小撇步**：這個 Markdown 檔案可以透過 VSCode 的 Markdown PDF 外掛匯出成 PDF，方便你發送給學生！
