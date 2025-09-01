// 퀴즈 문제 데이터
const quizData = [
    {
        question: "현재 사용 중인 Windows 버전은 무엇입니까?",
        options: [
            "Windows 7",
            "Windows 8.1", 
            "Windows 10 Pro / Home",
            "Windows 10 IoT Enterprise LTSC 2016 / 2019",
            "Windows 11",
            "잘 모르겠습니다"
        ],
        info: "",
        suggestions: [
            "⚠️ 긴급 업그레이드 권장: Windows 7은 이미 지원이 중단되어 심각한 보안 위험이 있습니다! Windows 10 LTSC 또는 Windows 11로 즉시 업그레이드하시기 바랍니다.",
            "⚠️ 업그레이드 권장: Windows 8.1 지원이 종료되었습니다. 보안을 위해 Windows 10 LTSC 또는 Windows 11로 가능한 한 빨리 업그레이드하시기 바랍니다.",
            "✅ 좋은 선택: 하지만 Windows 10은 2025년 10월에 지원이 중단됩니다. Windows 11로의 업그레이드를 계획하거나 LTSC 버전을 고려해보세요.",
            "✅ 훌륭한 선택: 이미 기업급 LTSC 버전을 사용하고 계십니다. 시스템 보안을 위해 보안 업데이트를 지속적으로 설치해 주세요.",
            "✅ 최신 버전: 최신 Windows 11을 사용하고 계십니다. 최적의 보안을 위해 시스템 업데이트를 유지해 주세요.",
            "❓ 확인 권장: 가능한 한 빨리 Windows 버전을 확인하여 시스템 보안을 위한 업그레이드 필요성을 평가해 주세요."
        ]
    },
    {
        question: "장치가 인터넷이나 기업 네트워크에 정기적으로 연결되나요?",
        options: [
            "예, 24시간 내내",
            "가끔씩 연결",
            "아니요, 완전히 격리됨"
        ],
        info: "중요한 이유: 업데이트되지 않는 네트워크 연결 구형 시스템은 매우 높은 위험을 가집니다.",
        suggestions: [
            "⚠️ 고위험 경고: 지속적으로 네트워크에 연결된 장치가 구형 Windows를 사용한다면 극도로 높은 보안 위험에 직면합니다! 즉시 운영체제를 업그레이드해 주세요.",
            "⚠️ 중간 위험: 가끔 연결되어도 보안 위험이 있습니다. 지원되는 Windows 버전으로 업그레이드하고 자동 업데이트를 활성화하시기 바랍니다.",
            "✅ 위험도 낮음: 격리된 환경은 상대적으로 안전하지만, 장기 지원과 안정성을 위해 업그레이드를 권장합니다."
        ]
    },
    {
        question: "장치에서 운영체제 업데이트로 중단되면 안 되는 고정 목적 애플리케이션을 실행하고 있나요?",
        options: [
            "예 (예: POS 시스템, 공장 HMI, 의료 장비)",
            "아니요, 일반 목적 PC입니다",
            "잘 모르겠습니다"
        ],
        info: "중요한 이유: LTSC는 안정적이고 수명이 긴 단일 기능 장치에 매우 적합합니다.",
        suggestions: [
            "💡 LTSC 권장: 고정 목적 장치에는 Windows 10 IoT Enterprise LTSC를 권장합니다. 10년 지원과 기능 업데이트 중단 없이 제공됩니다.",
            "💡 유연한 선택: 일반 목적 PC는 안정성 요구사항에 따라 Windows 11 또는 Windows 10 LTSC를 선택할 수 있습니다.",
            "❓ 평가 필요: 먼저 장치 용도를 확인한 후 가장 적합한 Windows 버전을 선택하시기 바랍니다."
        ]
    },
    {
        question: "이러한 장치에서 운영체제를 마지막으로 업데이트하거나 재설치한 시기는 언제입니까?",
        options: [
            "지난 1년 이내",
            "1-3년 전",
            "3년 이상 전",
            "업데이트를 관리하지 않습니다"
        ],
        info: "중요한 이유: 긴 간격은 시스템이 구식이거나 업데이트 피로를 나타냅니다 — LTSC가 해결책입니다.",
        suggestions: [
            "✅ 잘 관리됨: 정기 업데이트는 좋은 습관입니다. 계속 유지하시고 최신 지원 버전으로의 업그레이드를 고려해 보세요.",
            "⚠️ 확인 권장: 1-3년 전 시스템은 업데이트가 필요할 수 있습니다. 새 버전으로의 업그레이드를 평가해 보시기 바랍니다.",
            "⚠️ 긴급 처리: 3년 이상 업데이트하지 않으면 심각한 보안 위험이 있습니다! 즉시 운영체제 업그레이드를 강력히 권장합니다.",
            "⚠️ 위험 관리: 업데이트 관리 부족은 보안 취약점을 초래합니다. 업데이트 시스템을 구축하거나 LTSC 버전을 선택하시기 바랍니다."
        ]
    },
    {
        question: "다가오는 규정 준수, 인증 또는 IT 감사 요구사항이 있나요? (예: ISO, 의료, 정부)",
        options: [
            "예, 12개월 이내",
            "예, 하지만 긴급하지 않음",
            "아니요"
        ],
        info: "중요한 이유: LTSC는 감사 준비를 위한 안정성과 업데이트 제어를 보장하는 데 도움이 됩니다.",
        suggestions: [
            "⏰ 긴급 준비: 12개월 이내 감사에는 안정적인 시스템 환경이 필요합니다. Windows 10 LTSC로의 업그레이드를 즉시 계획하시기 바랍니다.",
            "📋 사전 준비: 긴급하지 않지만 미리 계획하시기 바랍니다. 안정적인 LTSC 버전 선택이 감사 통과에 유리합니다.",
            "✅ 유연한 선택: 규정 준수 압박이 없으면 필요에 따라 선택할 수 있지만, 여전히 지원되는 Windows 버전 사용을 권장합니다."
        ]
    },
    {
        question: "10년 지원, 기능 업데이트 없음, 패치 타이밍 완전 제어의 혜택을 받으시겠습니까?",
        options: [
            "예, 바로 그것이 우리가 필요한 것입니다",
            "아마도, 더 자세히 알려주세요",
            "별로 필요하지 않습니다"
        ],
        info: "",
        suggestions: [
            "🎯 완벽한 매치: LTSC가 바로 당신의 요구사항을 위해 설계되었습니다! Windows 10 IoT Enterprise LTSC를 선택하여 10년 안정적인 지원을 받으시기 바랍니다.",
            "💡 더 알아보기: LTSC는 장기 안정성, 기능 업데이트 중단 없는 환경을 제공하며 중요한 비즈니스 시스템에 매우 적합합니다.",
            "✅ 표준 버전: Windows 11 또는 표준 Windows 10을 선택하여 최신 기능과 정기 업데이트를 즐기세요."
        ]
    },
    {
        question: "현재 장치에 보안 소프트웨어 보호가 있나요?",
        options: [
            "있습니다",
            "없습니다"
        ],
        info: "중요한 이유: 운영체제 업그레이드와 전문 보안 소프트웨어를 결합하면 장치의 전방위 보호를 제공합니다.",
        suggestions: [
            "🛡️ 보안 강화: Advantech는 McAfee/Acronis 우대 판매 가격을 제공하여 장치가 기업급 보안 보호 업그레이드를 받을 수 있도록 합니다!",
            "⚠️ 보안 위험: 보안 소프트웨어가 없는 장치는 심각한 위험에 직면합니다! 가능한 한 빨리 Advantech 전문가에게 연락하여 McAfee/Acronis 전문 솔루션을 추천받으세요."
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

// 문제 표시
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
    
    // 권장사항 컨테이너 추가
    html += `<div id="suggestion-container" class="suggestion-container" style="display: none;"></div>`;
    
    html += `</div>`;
    
    questionContainer.innerHTML = html;
    currentQuestionSpan.textContent = index + 1;
    
    // 이미 답변이 있으면 해당 권장사항 표시
    if (answers[index] !== null) {
        showInstantSuggestion(answers[index]);
    }
    
    // 진행률 업데이트
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
    
    // 실시간 권장사항 표시
    showInstantSuggestion(optionIndex);
    
    updateNavigation();
}

// 즉시 제안 표시
function showInstantSuggestion(optionIndex) {
    const questionData = quizData[currentQuestion];
    if (questionData.suggestions && questionData.suggestions[optionIndex]) {
        const suggestionContainer = document.getElementById('suggestion-container');
        suggestionContainer.innerHTML = `
            <div class="instant-suggestion">
                <h4>💡 즉시 제안</h4>
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

// 결과 표시
function showResults() {
    isQuizCompleted = true;
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const resultsContent = document.getElementById('results-content');
    let html = '';
    
    // 답변 분석 및 권장사항 생성
    const analysis = analyzeAnswers();
    
    html += `
        <div class="recommendation">
            <h3>권장 방안</h3>
            <p>${analysis.recommendation}</p>
        </div>
    `;
    
    // Advantech 서비스 버튼 추가
    html += `
        <div class="service-buttons">
            <h3>전문 서비스 및 지원</h3>
            <div class="button-group">
                <a href="https://iotmart.advantech.co.kr/OS/%EC%82%B0%EC%97%85%EC%9A%A9-IoT/dhtml-3963.htm?utm_source=IoTMart&utm_medium=promotion&utm_campaign=AOL_25Q3_OS" 
                   target="_blank" 
                   class="service-btn btn-primary-service">
                    <span class="btn-icon">🛒</span>
                    Advantech 소프트웨어 판매 서비스 홈페이지
                </a>
                <a href="https://www.advantech.com/ko-kr/form/db9c9008-9ae0-4c97-a2ca-37523e64b4f9?callback=3287608e-993d-4cdf-9be1-9e22200f6cea&utm_source=eStore&utm_medium=link&utm_campaign=AOL_IoT_Software_eStore" 
                   target="_blank" 
                   class="service-btn btn-secondary-service">
                    <span class="btn-icon">🤝</span>
                    Advantech 전문가와 업그레이드 단계 상담하기
                </a>
            </div>
        </div>
    `;
    
    // 모든 질문과 답변 표시
    html += '<div class="answers-summary"><h3>답변 요약:</h3>';
    quizData.forEach((question, index) => {
        const selectedOption = question.options[answers[index]];
        html += `
            <div class="result-item">
                <h4>질문 ${index + 1}: ${question.question}</h4>
                <p><strong>귀하의 답변:</strong> ${selectedOption}</p>
            </div>
        `;
    });
    html += '</div>';
    
    resultsContent.innerHTML = html;
}

// 답변 분석
function analyzeAnswers() {
    const windowsVersion = answers[0];
    const networkConnection = answers[1];
    const fixedPurpose = answers[2];
    const lastUpdate = answers[3];
    const compliance = answers[4];
    const ltscBenefit = answers[5];
    const securitySoftware = answers[6];
    
    let recommendation = '';
    
    // 답변에 따른 권장사항 생성
    if (windowsVersion === 0 || windowsVersion === 1) { // Windows 7 또는 8.1
        recommendation = '강력한 업그레이드 권장: 지원이 중단된 Windows 버전을 사용하고 계시며 보안 위험이 있습니다. 지속적인 보안 업데이트와 지원을 받기 위해 Windows 10 LTSC 또는 Windows 11로 업그레이드하시기 바랍니다.';
    } else if (windowsVersion === 3) { // Windows 10 IoT Enterprise LTSC
        recommendation = '좋은 선택: 이미 LTSC 버전을 사용하고 계시며, 이는 산업용 및 전용 장비에 이상적인 선택입니다. 정기적으로 보안 업데이트를 설치하시기 바랍니다.';
    } else if (fixedPurpose === 0 && ltscBenefit === 0) { // 고정 목적 애플리케이션이며 LTSC 필요
        recommendation = 'Windows 10 IoT Enterprise LTSC 사용 권장: 장치에서 고정 목적 애플리케이션을 실행하고 있습니다. LTSC 버전은 10년 지원, 기능 업데이트 중단 없음, 업데이트 타이밍 완전 제어를 제공합니다.';
    } else if (networkConnection === 2 && compliance === 0) { // 격리된 네트워크이며 규정 준수 요구사항 있음
        recommendation = 'Windows 10 LTSC 고려: 격리된 환경이면서 규정 준수 요구사항이 있는 시스템의 경우, LTSC는 안정적인 플랫폼과 예측 가능한 업데이트 주기를 제공하여 감사 통과에 도움이 됩니다.';
    } else if (lastUpdate === 2 || lastUpdate === 3) { // 오랫동안 업데이트하지 않음
        recommendation = 'LTSC 평가 권장: 오랫동안 업데이트하지 않은 것은 시스템이 구식이거나 업데이트 피로를 나타낼 수 있습니다. LTSC는 더 적지만 더 안정적인 업데이트를 제공하여 귀하의 환경에 더 적합할 수 있습니다.';
    } else {
        recommendation = '평가 권장사항: 귀하의 답변에 따르면 표준 Windows 10/11 버전이 귀하의 요구사항에 적합할 수 있습니다. 하지만 더 안정적인 환경과 더 적은 기능 업데이트가 필요하다면 LTSC 버전을 고려해 보시기 바랍니다.';
    }
    
    // 보안 소프트웨어 권장사항 추가
    if (securitySoftware === 1) { // 보안 소프트웨어 없음
        recommendation += '\n\n🛡️ 보안 강화 권장사항: 장치에 보안 소프트웨어 보호가 부족합니다. 운영체제 업그레이드와 함께 전문 McAfee 또는 Acronis 보안 솔루션을 배포하여 전방위 보호를 확보하시기 바랍니다.';
    } else if (securitySoftware === 0) { // 보안 소프트웨어 있음
        recommendation += '\n\n✅ 좋은 보안 의식: 이미 보안 소프트웨어 보호를 하고 계십니다. Advantech는 McAfee/Acronis 기업급 솔루션의 우대 판매 가격을 제공하여 보안 보호 수준을 더욱 향상시킬 수 있습니다.';
    }
    
    return { recommendation };
}

// 퀴즈 다시 시작
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
