# 部署指南

## 🚀 快速部署到 Netlify (推薦新手)

### 步驟 1：準備檔案
確保您的專案包含以下檔案：
```
KR_quiz_OS/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── advantech-logo-notagl.png
    ├── 01_Microsoft_logo.png
    └── README.md
```

### 步驟 2：部署到 Netlify
1. 前往 [netlify.com](https://netlify.com)
2. 點擊 "Sign up" 註冊帳號
3. 登入後，在首頁找到 "Deploy your project"
4. 選擇 "Browse to upload" 
5. 將整個 `KR_quiz_OS` 資料夾拖拉到上傳區域
6. 等待部署完成（約30秒）
7. 獲得免費網址！

### 步驟 3：自訂網址 (可選)
1. 在 Netlify 儀表板點擊 "Site settings"
2. 點擊 "Change site name"
3. 輸入自訂名稱，例如：`kr-quiz-os`
4. 新網址變成：`https://kr-quiz-os.netlify.app`

## 🐙 GitHub Pages 部署

### 步驟 1：上傳到 GitHub
1. 到 [github.com](https://github.com) 建立帳號
2. 點擊 "New repository"
3. 儲存庫名稱：`KR_quiz_OS`
4. 設為 Public
5. 上傳所有檔案

### 步驟 2：啟用 GitHub Pages
1. 在儲存庫設定中找到 "Pages"
2. Source 選擇 "Deploy from a branch"
3. Branch 選擇 "main"
4. 資料夾選擇 "/ (root)"
5. 點擊 "Save"
6. 獲得網址：`https://username.github.io/KR_quiz_OS`

## ⚡ Vercel 部署

### 步驟 1：註冊 Vercel
1. 前往 [vercel.com](https://vercel.com)
2. 使用 GitHub 帳號登入

### 步驟 2：部署專案
1. 點擊 "New Project"
2. 連接 GitHub 儲存庫
3. 選擇 `KR_quiz_OS` 儲存庫
4. 點擊 "Deploy"
5. 獲得網址：`https://kr-quiz-os.vercel.app`

## 📝 部署前檢查清單

- [ ] 確保所有檔案都在專案資料夾中
- [ ] 檢查圖片檔案是否正確放置在 `images/` 資料夾
- [ ] 測試本地版本是否正常運作
- [ ] 確認檔案名稱沒有特殊字符或空格

## 🔧 常見問題

### Q: 圖片無法顯示怎麼辦？
A: 確保圖片檔案：
- 放在 `images/` 資料夾中
- 檔案名稱與程式碼中的完全一致
- 使用支援的格式 (PNG, JPG, SVG)

### Q: 網站顯示空白頁？
A: 檢查：
- `index.html` 是否在根目錄
- 瀏覽器開發者工具的錯誤訊息
- 檔案路徑是否正確

### Q: 如何更新網站內容？
A: 
- **Netlify**: 重新上傳檔案
- **GitHub Pages**: 推送新的 commits
- **Vercel**: 推送到 GitHub 會自動更新

## 🎉 部署成功後

部署成功後，您可以：
1. 分享網址給客戶和同事
2. 在社群媒體推廣
3. 加入商業名片或電子郵件簽名
4. 追蹤訪問統計 (Netlify 和 Vercel 都有提供)

---

**推薦新手使用 Netlify**，因為它最簡單且功能完整！
