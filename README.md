# Windows OS 測驗遊戲

一個互動式的網頁測驗遊戲，幫助評估 Windows 作業系統需求和建議適合的解決方案。

## 專案簡介

這個測驗遊戲包含 6 個關於 Windows 作業系統版本、網路連接、應用程式需求和合規要求的問題。根據使用者的回答，系統會提供個人化的建議，特別是關於是否適合使用 Windows 10 IoT Enterprise LTSC。

## 功能特色

- ✅ 6 個多選題問題
- ✅ 互動式用戶界面
- ✅ 進度條顯示
- ✅ 響應式設計，支援手機和桌面
- ✅ 基於回答的智能建議系統
- ✅ 鍵盤導航支援
- ✅ 答案摘要和建議展示

## 測驗問題內容

1. **Windows 版本檢查** - 識別當前使用的 Windows 版本
2. **網路連接狀況** - 評估網路安全風險
3. **應用程式類型** - 判斷是否適合 LTSC 版本
4. **更新歷史** - 了解維護模式
5. **合規要求** - 評估稽核準備需求
6. **LTSC 需求** - 直接詢問對長期支援的需求

## 技術規格

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **樣式**: CSS Grid, Flexbox, 響應式設計
- **兼容性**: 現代瀏覽器 (Chrome, Firefox, Safari, Edge)
- **無依賴**: 純原生 JavaScript，無需框架

## 檔案結構

```
KR_quiz_OS/
├── index.html          # 主要 HTML 檔案
├── styles.css          # CSS 樣式檔案
├── script.js           # JavaScript 邏輯檔案
├── README.md           # 專案說明文件
└── .github/
    └── copilot-instructions.md  # Copilot 指令檔案
```

## 如何使用

1. 開啟 `index.html` 檔案在網頁瀏覽器中
2. 逐一回答 7 個問題
3. 使用「上一題」和「下一題」按鈕導航
4. 每個問題選擇後會顯示即時建議
5. 完成所有問題後點擊「查看結果」
6. 查看個人化建議和回答摘要
7. 可點擊「重新開始」重新進行測驗

## 🌐 部署到網路

### 快速部署選項
- **Netlify** (推薦新手): 拖拉上傳，立即上線
- **GitHub Pages**: 免費、穩定、支援自訂域名
- **Vercel**: 超快速度、優秀 CDN
- **Firebase Hosting**: Google 提供、可靠穩定

詳細部署步驟請參考 [`DEPLOYMENT.md`](DEPLOYMENT.md) 檔案。

## 鍵盤快捷鍵

- `←` (左箭頭): 上一題
- `→` (右箭頭): 下一題  
- `Enter`: 提交測驗（在最後一題）

## 建議邏輯

系統會根據以下邏輯提供建議：

- **舊版 Windows (7/8.1)**: 強烈建議升級
- **已使用 LTSC**: 確認良好選擇
- **固定用途應用程式**: 建議使用 LTSC
- **隔離環境 + 合規要求**: 考慮 LTSC
- **長期未更新**: 評估 LTSC 的適用性
- **安全軟體狀況**: 推薦 McAfee/Acronis 方案
- **其他情況**: 提供平衡建議

## 開發和部署

### 本地開發
1. 直接開啟 `index.html` 檔案即可
2. 或使用本地伺服器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js (如果安裝了 http-server)
   npx http-server
   ```

### 部署
可部署到任何靜態網站託管服務：
- GitHub Pages
- Netlify
- Vercel
- Azure Static Web Apps

## 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權

此專案為教育和評估用途。

## 版本歷史

- v1.0.0 - 初始版本，包含完整的測驗功能
