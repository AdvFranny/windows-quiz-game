// 測驗問題數據
const quizData = [
    {
        question: "您的設備目前運行什麼版本的 Windows？",
        options: [
            "Windows 7",
            "Windows 8.1", 
            "Windows 10 Pro / Home",
            "Windows 10 IoT Enterprise LTSC 2016 / 2019",
            "Windows 11",
            "不確定"
        ],
        info: "",
        suggestions: [
            "⚠️ 緊急升級建議：Windows 7 已停止支援，存在嚴重安全風險！建議立即升級到 Windows 10 LTSC 或 Windows 11。",
            "⚠️ 升級建議：Windows 8.1 支援已結束，建議儘快升級到 Windows 10 LTSC 或 Windows 11 以確保安全性。",
            "✅ 良好選擇：但請注意 Windows 10 將在 2025 年 10 月停止支援，建議規劃升級到 Windows 11 或考慮 LTSC 版本。",
            "✅ 優秀選擇：您已使用企業級 LTSC 版本，請持續安裝安全更新以維護系統安全。",
            "✅ 最新版本：您使用的是最新的 Windows 11，請保持系統更新以確保最佳安全性。",
            "❓ 建議檢查：請盡快確認您的 Windows 版本，以評估是否需要升級以確保系統安全。"
        ]
    },
    {
        question: "您的設備是否定期連接到網際網路或企業網路？",
        options: [
            "是，全天候 24/7",
            "偶爾連接",
            "否，完全隔離"
        ],
        info: "為什麼重要：連接網路的舊系統如果沒有更新，風險很高。",
        suggestions: [
            "⚠️ 高風險警告：持續連網的設備如使用舊版 Windows，面臨極高安全風險！請立即升級作業系統。",
            "⚠️ 中等風險：偶爾連網仍有安全風險，建議升級到支援的 Windows 版本並啟用自動更新。",
            "✅ 風險較低：隔離環境相對安全，但仍建議升級以獲得長期支援和穩定性。"
        ]
    },
    {
        question: "您的設備是否運行不應被作業系統更新中斷的固定用途應用程式？",
        options: [
            "是（例如：POS 系統、工廠 HMI、醫療設備）",
            "否，它們是通用 PC",
            "不確定"
        ],
        info: "為什麼重要：LTSC 非常適合穩定、長壽命、單一功能的設備。",
        suggestions: [
            "💡 LTSC 建議：固定用途設備建議使用 Windows 10 IoT Enterprise LTSC，提供 10 年支援且無功能更新干擾。",
            "💡 彈性選擇：通用 PC 可選擇 Windows 11 或 Windows 10 LTSC，依據穩定性需求決定。",
            "❓ 需要評估：建議先確認設備用途，再選擇最適合的 Windows 版本。"
        ]
    },
    {
        question: "您上次更新或重新安裝這些設備的作業系統是什麼時候？",
        options: [
            "過去一年內",
            "1-3 年前",
            "超過 3 年前",
            "我不管理更新"
        ],
        info: "為什麼重要：長時間間隔表示系統過時或更新疲勞——LTSC 是一個解決方案。",
        suggestions: [
            "✅ 維護良好：定期更新是好習慣，建議繼續保持並考慮升級到最新支援版本。",
            "⚠️ 建議檢查：1-3 年前的系統可能需要更新，建議評估是否升級到新版本。",
            "⚠️ 緊急處理：超過 3 年未更新存在重大安全風險！強烈建議立即升級作業系統。",
            "⚠️ 風險管理：缺乏更新管理會導致安全漏洞，建議建立更新制度或選擇 LTSC 版本。"
        ]
    },
    {
        question: "您是否有即將到來的合規、認證或 IT 稽核要求（例如：ISO、醫療、政府）？",
        options: [
            "是，12 個月內",
            "是，但不緊急",
            "否"
        ],
        info: "為什麼重要：LTSC 有助於確保穩定性和更新控制，以準備稽核。",
        suggestions: [
            "⏰ 緊急準備：12 個月內的稽核需要穩定的系統環境，建議立即規劃升級到 Windows 10 LTSC。",
            "📋 提前準備：雖不緊急但建議提早規劃，選擇穩定的 LTSC 版本有利於通過稽核。",
            "✅ 彈性選擇：沒有合規壓力可依據需求選擇，但仍建議使用受支援的 Windows 版本。"
        ]
    },
    {
        question: "您是否會受益於 10 年的支援、零功能更新和完全控制修補程式時間？",
        options: [
            "是，這正是我們需要的",
            "也許，告訴我更多",
            "不太需要"
        ],
        info: "",
        suggestions: [
            "🎯 完美匹配：LTSC 正是為您的需求設計！建議選擇 Windows 10 IoT Enterprise LTSC 獲得 10 年穩定支援。",
            "💡 了解更多：LTSC 提供長期穩定、無功能更新干擾的環境，非常適合關鍵業務系統。",
            "✅ 標準版本：可選擇 Windows 11 或標準 Windows 10，享受最新功能和定期更新。"
        ]
    },
    {
        question: "您的設備目前有任何安全軟體保護嗎？",
        options: [
            "有",
            "沒有"
        ],
        info: "為什麼重要：作業系統升級配合專業安全軟體，提供全方位的設備保護。",
        suggestions: [
            "🛡️ 安全加強：研華提供 McAfee/Acronis 優惠經銷價格，讓您的設備獲得企業級安全保護升級！",
            "⚠️ 安全風險：沒有安全軟體的設備面臨重大風險！請盡速聯繫研華專人為您推薦 McAfee/Acronis 專業方案。"
        ]
    }
];

// 應用程式狀態
let currentQuestion = 0;
let answers = [];
let isQuizCompleted = false;

// DOM 元素
const questionContainer = document.getElementById('question-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results-container');
const quizContainer = document.querySelector('.quiz-container');
const restartBtn = document.getElementById('restart-btn');

// 初始化測驗
function initQuiz() {
    totalQuestionsSpan.textContent = quizData.length;
    answers = new Array(quizData.length).fill(null);
    showQuestion(0);
    updateNavigation();
}

// 顯示問題
function showQuestion(index) {
    const questionData = quizData[index];
    
    let html = `
        <div class="question">
            <h3>${questionData.question}</h3>
            <div class="options">
    `;
    
    questionData.options.forEach((option, optionIndex) => {
        const isSelected = answers[index] === optionIndex;
        html += `
            <div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${optionIndex})">
                <input type="radio" 
                       id="option-${optionIndex}" 
                       name="question-${index}" 
                       value="${optionIndex}"
                       ${isSelected ? 'checked' : ''}>
                <label for="option-${optionIndex}">${option}</label>
            </div>
        `;
    });
    
    html += `</div>`;
    
    if (questionData.info) {
        html += `<div class="question-info">${questionData.info}</div>`;
    }
    
    // 添加建議容器
    html += `<div id="suggestion-container" class="suggestion-container" style="display: none;"></div>`;
    
    html += `</div>`;
    
    questionContainer.innerHTML = html;
    currentQuestionSpan.textContent = index + 1;
    
    // 如果已有答案，顯示對應建議
    if (answers[index] !== null) {
        showInstantSuggestion(answers[index]);
    }
    
    // 更新進度條
    const progressPercentage = ((index + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// 選擇選項
function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    
    // 更新視覺狀態
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.toggle('selected', index === optionIndex);
        const radio = option.querySelector('input[type="radio"]');
        radio.checked = index === optionIndex;
    });
    
    // 顯示即時建議
    showInstantSuggestion(optionIndex);
    
    updateNavigation();
}

// 顯示即時建議
function showInstantSuggestion(optionIndex) {
    const questionData = quizData[currentQuestion];
    if (questionData.suggestions && questionData.suggestions[optionIndex]) {
        const suggestionContainer = document.getElementById('suggestion-container');
        suggestionContainer.innerHTML = `
            <div class="instant-suggestion">
                <h4>💡 即時建議</h4>
                <p>${questionData.suggestions[optionIndex]}</p>
            </div>
        `;
        suggestionContainer.style.display = 'block';
    }
}

// 更新導航按鈕
function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    
    const isLastQuestion = currentQuestion === quizData.length - 1;
    const hasAnswer = answers[currentQuestion] !== null;
    
    if (isLastQuestion) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = hasAnswer ? 'inline-block' : 'none';
    } else {
        nextBtn.style.display = 'inline-block';
        nextBtn.disabled = !hasAnswer;
        submitBtn.style.display = 'none';
    }
}

// 上一題
function goToPrevious() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateNavigation();
    }
}

// 下一題
function goToNext() {
    if (currentQuestion < quizData.length - 1 && answers[currentQuestion] !== null) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateNavigation();
    }
}

// 提交測驗
function submitQuiz() {
    if (answers.every(answer => answer !== null)) {
        showResults();
    }
}

// 顯示結果
function showResults() {
    isQuizCompleted = true;
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const resultsContent = document.getElementById('results-content');
    let html = '';
    
    // 分析回答並生成建議
    const analysis = analyzeAnswers();
    
    html += `
        <div class="recommendation">
            <h3>建議方案</h3>
            <p>${analysis.recommendation}</p>
        </div>
    `;
    
    // 新增研華服務按鈕
    html += `
        <div class="service-buttons">
            <h3>專業服務與支援</h3>
            <div class="button-group">
                <a href="https://iotmart.advantech.co.kr/OS/%EC%82%B0%EC%97%85%EC%9A%A9-IoT/dhtml-3963.htm?utm_source=IoTMart&utm_medium=promotion&utm_campaign=AOL_25Q3_OS" 
                   target="_blank" 
                   class="service-btn btn-primary-service">
                    <span class="btn-icon">🛒</span>
                    研華軟體經銷服務主頁
                </a>
                <a href="https://www.advantech.com/ko-kr/form/db9c9008-9ae0-4c97-a2ca-37523e64b4f9?callback=3287608e-993d-4cdf-9be1-9e22200f6cea&utm_source=eStore&utm_medium=link&utm_campaign=AOL_IoT_Software_eStore" 
                   target="_blank" 
                   class="service-btn btn-secondary-service">
                    <span class="btn-icon">🤝</span>
                    我要聯繫研華專人諮詢升級步驟
                </a>
            </div>
        </div>
    `;
    
    // 顯示所有問題和回答
    html += '<div class="answers-summary"><h3>您的回答摘要：</h3>';
    quizData.forEach((question, index) => {
        const selectedOption = question.options[answers[index]];
        html += `
            <div class="result-item">
                <h4>問題 ${index + 1}: ${question.question}</h4>
                <p><strong>您的回答：</strong>${selectedOption}</p>
            </div>
        `;
    });
    html += '</div>';
    
    resultsContent.innerHTML = html;
}

// 分析答案
function analyzeAnswers() {
    const windowsVersion = answers[0];
    const networkConnection = answers[1];
    const fixedPurpose = answers[2];
    const lastUpdate = answers[3];
    const compliance = answers[4];
    const ltscBenefit = answers[5];
    const securitySoftware = answers[6];
    
    let recommendation = '';
    
    // 基於回答生成建議
    if (windowsVersion === 0 || windowsVersion === 1) { // Windows 7 或 8.1
        recommendation = '強烈建議升級：您正在使用已不受支援的 Windows 版本，存在安全風險。建議升級到 Windows 10 LTSC 或 Windows 11，以獲得持續的安全更新和支援。';
    } else if (windowsVersion === 3) { // Windows 10 IoT Enterprise LTSC
        recommendation = '良好選擇：您已經在使用 LTSC 版本，這是工業和專用設備的理想選擇。請確保定期安裝安全更新。';
    } else if (fixedPurpose === 0 && ltscBenefit === 0) { // 固定用途應用程式且需要 LTSC
        recommendation = '建議使用 Windows 10 IoT Enterprise LTSC：您的設備運行固定用途應用程式，LTSC 版本提供 10 年支援、無功能更新干擾，且允許您完全控制更新時程。';
    } else if (networkConnection === 2 && compliance === 0) { // 隔離網路且有合規要求
        recommendation = '考慮 Windows 10 LTSC：對於隔離環境且有合規要求的系統，LTSC 提供穩定的平台和可預測的更新週期，有助於通過稽核。';
    } else if (lastUpdate === 2 || lastUpdate === 3) { // 長時間未更新
        recommendation = '建議評估 LTSC：長時間未更新可能表示更新疲勞或兼容性顧慮。LTSC 提供更少但更穩定的更新，可能更適合您的環境。';
    } else {
        recommendation = '評估建議：根據您的回答，標準的 Windows 10/11 版本可能適合您的需求。但如果您需要更穩定的環境和更少的功能更新，可以考慮 LTSC 版本。';
    }
    
    // 加入安全軟體建議
    if (securitySoftware === 1) { // 沒有安全軟體
        recommendation += '\n\n🛡️ 安全加強建議：您的設備缺乏安全軟體保護，建議配合作業系統升級，同時部署專業的 McAfee 或 Acronis 安全方案，確保全方位防護。';
    } else if (securitySoftware === 0) { // 有安全軟體
        recommendation += '\n\n✅ 安全意識良好：您已有安全軟體保護，研華可提供 McAfee/Acronis 企業級方案的優惠經銷價格，進一步提升安全防護等級。';
    }
    
    return { recommendation };
}

// 重新開始測驗
function restartQuiz() {
    currentQuestion = 0;
    answers = new Array(quizData.length).fill(null);
    isQuizCompleted = false;
    
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    showQuestion(0);
    updateNavigation();
}

// 事件監聽器
prevBtn.addEventListener('click', goToPrevious);
nextBtn.addEventListener('click', goToNext);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);

// 鍵盤導航
document.addEventListener('keydown', function(event) {
    if (isQuizCompleted) return;
    
    if (event.key === 'ArrowLeft' && !prevBtn.disabled) {
        goToPrevious();
    } else if (event.key === 'ArrowRight' && !nextBtn.disabled) {
        goToNext();
    } else if (event.key === 'Enter' && submitBtn.style.display !== 'none') {
        submitQuiz();
    }
});

// 初始化應用程式
document.addEventListener('DOMContentLoaded', initQuiz);
