# 👶 Git Time Machine - 零基礎新手安裝與準備指南

> ⚠️ **注意**：如果你完全沒有接觸過寫程式，或是不知道什麼是終端機（Terminal）、Git、Node.js，請**務必先完成這份指南的步驟**，再去看 `README.md`！

這份指南將會一步步教你把電腦準備好，就像是在玩遊戲前，我們需要先安裝遊戲主機、手把並註冊帳號一樣。

---

## ✅ 開始前確認 Checklist

> 在動手安裝任何東西之前，請先確認以下項目！

| 項目 | 說明 | 符合嗎？ |
|------|------|------|
| 🖥️ 你有一台電腦 | Windows 10+ 或 macOS 10.15+，需要能安裝軟體 | ☐ |
| 🌐 連上了網路 | 安裝軟體時需要下載，建議有穩定的 Wi-Fi | ☐ |
| 📞 能單獨操作這台電腦 | 需要有管理員權限來安裝軟體 | ☐ |
| ⏰ 預計耗時 | 整個指南大約30～60分鐘，請找時間完整完成，不要中斷 | ☐ |

---

## 步驟一：註冊 GitHub 帳號

GitHub 是全球最大的工程師社群與程式碼代管平台，未來的作業都會上傳到這裡。
1. 前往 GitHub 官網：[https://github.com/](https://github.com/)
2. 點擊右上角的 **Sign up** 註冊一個免費帳號。
3. 記好你的帳號名稱與密碼，我們稍後會用到。

---

## 步驟二：安裝必備軟體

⚠️ **請注意：在下載以下軟體時，請務必認明並選擇符合你電腦作業系統（Windows 或 Mac OS）的版本！**

### 1. 下載並安裝 VSCode (Visual Studio Code)
這是一款免費且超強大的打字機（文字編輯器），全球的工程師都在用。
**為什麼一定要安裝？** 因為對於初學者來說，只看終端機的純文字會像瞎子摸象。我們需要 VSCode 配合視覺化外掛（Git Graph）來「看到」Git 的時間線。
- 前往官網下載：[https://code.visualstudio.com/](https://code.visualstudio.com/)
- 點擊下載按鈕，下載後直接一直按「下一步」安裝到好。

### 2. 下載並安裝 Node.js
這是讓我們的互動教學網頁能在你電腦上運作的必備引擎。
- 前往官網下載：[https://nodejs.org/](https://nodejs.org/)
- 選擇標有 **LTS (長期維護版)** 的按鈕下載。
- 下載後打開安裝檔，一路按「Next / 繼續 / 同意」直到安裝完成。

### 3. 下載並安裝 Git
這是版本控制的核心軟體。
- 前往 Git 官網下載：[https://git-scm.com/downloads](https://git-scm.com/downloads)
- 根據你的系統下載對應安裝檔（Windows / macOS）。
- 下載後打開，**在安裝過程中一直按「Next」就好**，不需要修改任何預設選項。

### 4. 下載並安裝 GitHub CLI (gh)
這是 GitHub 官方出的指令工具。現在你可能還不知道它是幹嘛的，但在最後一個章節「發起你的第一個 PR」時，它會讓整個流程快很多。先裝好備用！
- **🪟 Windows 用戶**：可以到 [GitHub CLI Releases](https://github.com/cli/cli/releases) 頁面下載 `gh_X.X.X_windows_amd64.msi` 安裝檔，並點擊安裝。
- **🍎 Mac OS 用戶**：可以到 [GitHub CLI Releases](https://github.com/cli/cli/releases) 頁面下載 `gh_X.X.X_macOS_amd64.pkg` (Intel晶片) 或 `arm64.pkg` (M1/M2晶片) 安裝檔，並點擊安裝。

---

## 步驟三：打開「終端機」（輸入黑客指令的地方）

軟體都安裝完畢後，我們需要透過「終端機」（Terminal）來確認它們有沒有好好工作。打開終端機有三種常見的方式，**請選擇一種使用即可**：

1. **💡 推薦：使用 VSCode 內建終端機**
   - 打開剛剛裝好的 VSCode。
   - 點擊最上方選單的 `Terminal` -> `New Terminal` (終端機 -> 新增終端機)。
   - 視窗下方就會跑出終端機面板。
2. **🪟 Windows 搜尋 PowerShell**
   - 按下鍵盤上的 `Windows 標誌鍵`。
   - 搜尋框輸入 `powershell`，點擊「Windows PowerShell」開啟藍色視窗。
3. **🍎 Mac 搜尋 Terminal**
   - 按下 `Command (⌘)` + `空白鍵 (Space)` 開啟 Spotlight 搜尋。
   - 輸入 `Terminal` 或 `終端機` 並按 Enter，開啟白色/黑色視窗。

---

## 步驟四：確認安裝與串接 GitHub 帳號

在你的終端機中，一次輸入一行以下指令並按 Enter。如果看到類似的版本號碼，代表安裝成功：

```bash
# 檢查 Node
node -v    
# 如果成功，會顯示 v18.x.x 等字樣

# 檢查 Git
git -v     
# 如果成功，會顯示 git version 2.x.x

# 檢查 gh cli
gh --version
# 如果成功，會顯示 gh version 2.x.x
```

### 🔑 將 gh cli 與你的帳號串接
這步非常重要！輸入以下指令讓電腦登入你的 GitHub 帳號：
```bash
gh auth login
```
接下來終端機會問你幾個問題，請用鍵盤的 `上下方向鍵` 選擇，並按 `Enter` 確認：
1. What account do you want to log into? 選擇 **GitHub.com**
2. What is your preferred protocol for Git operations? 選擇 **HTTPS**
3. Authenticate Git with your GitHub credentials? 選擇 **Yes**
4. How would you like to authenticate? 選擇 **Login with a web browser**
5. 接著它會給你一串 8 碼的驗證碼（One-time code），並按 Enter 打開瀏覽器。
6. 在瀏覽器中貼上那 8 碼，並點擊 Authorize 授權。
7. 回到終端機，看到 `Logged in as 你的帳號` 就代表成功串接囉！

---

## 步驟五：安裝 VSCode 必備外掛

打開你的 VSCode，點擊左側邊欄的**四個方塊圖示**（這叫做 Extensions/延伸模組）。
搜尋並安裝以下外掛，讓我們在寫程式時不會瞎子摸象：
1. **Git Graph**：讓你用視覺化的方式看到 Git 的時間線。
2. **GitLens**：超強大的 Git 輔助工具。

---

---

## 🎉 步驟六：把教學網頁跑起來！

恭喜你！軟體都裝好了。現在，我們要把這個教學網頁真正「啟動」在你的電腦上。
請打開 VSCode 內建終端機（`Terminal` → `New Terminal`），然後依序輸入以下四行指令。

> ⚠️ **每輸入一行，請按一次 Enter，等畫面停止跑動後，再輸入下一行。**

---

### 第一行：下載教材到你的電腦

```bash
git clone https://github.com/BlekZz/git-time-machine.git
```

✅ **成功長這樣**：你會看到 `Receiving objects: 100%`，最後沒有紅色文字。

---

### 第二行：進入剛下載的資料夾（這步非常容易被忘記！）

```bash
cd git-time-machine
```

✅ **成功長這樣**：終端機的提示字元裡會出現 `git-time-machine` 字樣，例如 `~/git-time-machine $`。

> 💡 **`cd` 是什麼？** `cd` = Change Directory（切換資料夾）。就像你在 Finder / 檔案總管裡雙擊進入一個資料夾，只是用打字的方式。**如果你跳過這步，後面所有指令都會失敗。**

---

### 第三行：下載工具包（這步會跑比較久）

```bash
npm install
```

⏳ **這步正常現象說明（請仔細閱讀）**：

| 你看到的畫面 | 代表什麼 | 該怎麼做 |
|---|---|---|
| 一堆文字滾動，感覺跑不完 | 正在從網路下載工具，正常 | 耐心等待 |
| 黃色的 `npm warn deprecated` | 版本過舊警告，完全不影響使用 | 忽略 |
| `found X vulnerabilities` | 安全性提示，不影響教學 | 忽略 |
| 最後出現 `added X packages` | 🎉 安裝成功！ | 繼續下一步 |
| 紅色的 `ERR!` 或 `error` | 真正的錯誤 | 截圖給老師 |

---

### 第四行：啟動教學網頁！

```bash
npm run dev
```

✅ **成功長這樣**：你會看到：
```
VITE v7.x.x  ready in X ms

➜  Local:   http://localhost:5173/
```

看到這個畫面後，打開你的瀏覽器（Chrome / Edge / Safari），在網址列輸入：

```
http://localhost:5173/
```

按下 Enter，教學網頁就會出現了！🎉

---

> 🛑 **關閉教學網頁的方法**：回到終端機，按下鍵盤上的 `Ctrl + C`（Mac 也是 Ctrl，不是 Command），網頁就會停止運作。下次要再開，重新執行 `npm run dev` 即可。

---

## 🎉 全部完成後 Checklist

> 恭喜你完成了所有步驟！在單打歡呼之前，用下面的清單确認一下你的準備狀態：

| 項目 | 如何驗證成功 | 完成了嗎？ |
|------|------|------|
| GitHub 帳號註冊 | 能登入 github.com 看到主頁 | ☐ |
| Node.js 安裝 | `node -v` 顯示 v18+ 以上版本號 | ☐ |
| Git 安裝 | `git -v` 顯示 git version 2.x.x | ☐ |
| GitHub CLI (gh) 安裝 | `gh --version` 顯示版本號 | ☐ |
| gh 帳號連線 | `gh auth status` 顯示 Logged in as 你的帳號 | ☐ |
| VSCode 安裝 | 能正常開啟 VSCode | ☐ |
| Git Graph 外掛安裝 | 在 VSCode 左側列能看到 Git Graph 圖示 | ☐ |
| GitLens 外掛安裝 | 在 VSCode 左側列能看到 GitLens 功能 | ☐ |
| 教學網頁啟動 | 眀覽器開啟 `http://localhost:5173/` 能看到教學頁面 | ☐ |

> 💡 **如果有任何一項打不了勾，就回到對應的步驟重做一次。前面準備得越完整，後面的章節就會越順。**

---

## ❓ 常見問題

| 問題 | 解決方法 |
|------|----------|
| `npm install` 失敗 | 確認 Node.js 版本 ≥ 18（在終端機輸入 `node -v` 確認），使用 PowerShell 或 VSCode Terminal |
| `npm run dev` 無畫面 | 確認瀀覽器已開啟 `http://localhost:5173/` |
| `git push` 沒權限 | 確認已登入 GitHub（在終端機執行 `gh auth login`） |
| `gh auth login` 失敗 | 確認已安裝 GitHub CLI (`gh --version`)，並將瀀覽器允許彈出視窗進行授權 |
| 看到紅色的 `ERR!` | 截圖發給老師，不要假設它不重要 |

---

## 🔧 環境損壞時的重置方法

如果你的教學環境出問題（例如不小心對 `learner-commits` 資料夾做了錯誤操作），可以执行以下指令重置：

```bash
git reset --hard
git pull
npm install
```

> ⚠️ **警告**：`git reset --hard` 會將所有未儲存的本地修改清空。如果你有重要的修改還沒有 commit，請先備份！

