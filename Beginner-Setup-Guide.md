# 👶 Git Time Machine - 零基礎新手安裝與準備指南

> ⚠️ **注意**：如果你完全沒有接觸過寫程式，或是不知道什麼是終端機（Terminal）、Git、Node.js，請**務必先完成這份指南的步驟**，再去看 `README.md`！

這份指南將會一步步教你把電腦準備好，就像是在玩遊戲前，我們需要先安裝遊戲主機、手把並註冊帳號一樣。

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

### 4. 下載並安裝 GitHub CLI (gh) 🌟 必學！
這是 GitHub 官方出的超強工具，可以讓你不用打開瀏覽器，直接在電腦裡發 Pull Request！
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

## 🎉 準備完成！前往下一步

恭喜你！你的電腦已經完全準備好了。
現在，請點擊以下連結回到 README 文件，並從**「🚀 快速開始」**照著步驟把教學專案跑起來！

👉 **[點我回到 README 快速開始](./README.md#🚀-快速開始-適合已經裝好-nodejs-與-git-的人)**
