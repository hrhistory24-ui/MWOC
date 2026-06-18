/* =========================================================
   역사로 탐구하는 현대세계
   MODERN WORLD OPERATIONS COMMAND
   script.js
   ========================================================= */


/* =========================================================
   01. 학과 데이터베이스
   - 이미지 파일명 규칙: images/학과명.jpg
   - 예: 간호학과 → images/간호학과.jpg
   ========================================================= */

const majors = [
  { name: "국어국문학과", keywords: ["국어국문학과", "국문과", "국어", "문학", "한국문학", "문예창작"] },
  { name: "중어중문학과", keywords: ["중어중문학과", "중국학과", "중국어", "중국", "중문과", "중국문화"] },
  { name: "유럽언어학과", keywords: ["유럽언어학과", "독일어", "프랑스어", "스페인어", "러시아어", "유럽", "EU"] },
  { name: "영어영문학과", keywords: ["영어영문학과", "영문과", "영어", "영문학", "영미문학", "통번역"] },
  { name: "일어일문학과", keywords: ["일어일문학과", "일본학과", "일본어", "일본문화", "일본문학", "일본"] },
  { name: "언어학과", keywords: ["언어학과", "언어", "언어정보", "언어인지", "자연어처리", "AI", "번역", "통역"] },
  { name: "철학과", keywords: ["철학과", "철학", "윤리", "논리학", "동양철학", "서양철학", "사상"] },
  { name: "사학과", keywords: ["사학과", "역사학과", "역사", "한국사", "세계사", "고고학", "박물관", "아카이브"] },
  { name: "종교학과", keywords: ["종교학과", "신학과", "종교", "신학", "기독교", "불교", "유교"] },
  { name: "문헌정보학과", keywords: ["문헌정보학과", "도서관학과", "기록관리학과", "문헌", "정보", "도서관", "사서", "아카이브"] },

  { name: "경제학과", keywords: ["경제학과", "경제", "경제학", "금융", "주식", "환율", "물가", "시장", "무역"] },
  { name: "경영학과", keywords: ["경영학과", "경영", "기업", "마케팅", "회계", "재무", "창업", "CEO", "브랜드"] },
  { name: "미디어커뮤니케이션학과", keywords: ["미디어커뮤니케이션학과", "신문방송학과", "미디어", "언론", "방송", "기자", "PD", "콘텐츠"] },
  { name: "광고홍보학과", keywords: ["광고홍보학과", "광고", "홍보", "브랜딩", "마케팅", "카피라이터", "PR"] },
  { name: "심리학과", keywords: ["심리학과", "심리", "상담", "PTSD", "트라우마", "인지과학", "정신건강"] },
  { name: "문화콘텐츠학과", keywords: ["문화콘텐츠학과", "문화콘텐츠", "문화산업", "콘텐츠", "스토리텔링", "웹툰", "게임", "영화"] },
  { name: "사회학과", keywords: ["사회학과", "사회", "사회문제", "도시", "계층", "불평등", "문화", "인구"] },
  { name: "사회복지학과", keywords: ["사회복지학과", "사회복지", "복지", "사회복지사", "아동복지", "노인복지", "상담"] },
  { name: "정치외교학과", keywords: ["정치외교학과", "정치", "외교", "국제정치", "국제관계", "UN", "안보", "냉전"] },
  { name: "행정학과", keywords: ["행정학과", "행정", "공공정책", "정책", "공무원", "정부", "지방자치", "경찰", "소방"] },
  { name: "국제학과", keywords: ["국제학과", "국제", "국제관계", "국제경영", "국제무역", "세계화", "외교", "글로벌"] },
  { name: "회계학과", keywords: ["회계학과", "회계", "세무", "세금", "회계사", "CPA", "재무회계", "감사"] },
  { name: "무역학과", keywords: ["무역학과", "무역", "통상", "수출", "수입", "관세", "FTA", "국제물류"] },
  { name: "지리학과", keywords: ["지리학과", "지리", "GIS", "위치정보", "지도", "도시계획", "기후", "환경"] },
  { name: "관광학과", keywords: ["관광학과", "관광", "호텔", "여행", "항공", "컨벤션", "MICE", "관광산업"] },

  { name: "교육학과", keywords: ["교육학과", "교육", "교사", "교육행정", "교육정책", "교육심리", "교육과정", "학교"] },
  { name: "국어교육과", keywords: ["국어교육과", "국어", "국어교사", "국어교육", "문학교육", "국어임용"] },
  { name: "영어교육과", keywords: ["영어교육과", "영어", "영어교사", "영어교육", "영어임용", "외국어교육"] },
  { name: "수학교육과", keywords: ["수학교육과", "수학", "수학교사", "수학교육", "수학임용", "통계"] },
  { name: "사회교육과", keywords: ["사회교육과", "사회", "사회교사", "사회교육", "정치", "경제", "법"] },
  { name: "역사교육과", keywords: ["역사교육과", "사학과", "역사학과", "역사", "한국사", "세계사", "고고학", "박물관", "아카이브"] },
  { name: "과학교육과", keywords: ["과학교육과", "과학", "과학교사", "과학교육", "물리", "화학", "생명과학", "지구과학"] },
  { name: "기술·가정교육과", keywords: ["기술·가정교육과", "기술가정교육과", "기술", "가정", "기술교사", "가정교사"] },
  { name: "컴퓨터교육과", keywords: ["컴퓨터교육과", "컴퓨터", "코딩", "프로그래밍", "정보교사", "정보교육", "AI", "소프트웨어"] },
  { name: "체육교육과", keywords: ["체육교육과", "체육", "체육교사", "스포츠", "운동", "스포츠교육"] },
  { name: "유아교육과", keywords: ["유아교육과", "유아", "유치원", "유치원교사", "보육", "아동발달"] },
  { name: "초등교육과", keywords: ["초등교육과", "초등교육", "초등교사", "초등학교", "교대", "교육"] },
  { name: "특수교육과", keywords: ["특수교육과", "특수교육", "특수교사", "장애학생", "통합교육", "특수학교"] },

  { name: "수학과", keywords: ["수학과", "수학", "통계", "데이터사이언스", "암호", "확률", "미적분", "선형대수"] },
  { name: "물리학과", keywords: ["물리학과", "물리", "천문학", "우주", "양자역학", "상대성이론", "반도체", "핵물리"] },
  { name: "생명과학과", keywords: ["생명과학과", "생물학과", "생명과학", "생물", "유전학", "DNA", "세포", "바이오"] },
  { name: "화학과", keywords: ["화학과", "화학", "생화학", "유기화학", "무기화학", "나노", "에너지소재"] },
  { name: "지구환경과학과", keywords: ["지구환경과학과", "지구과학", "기후", "기후변화", "환경", "해양", "지질", "기상"] },
  { name: "통계학과", keywords: ["통계학과", "통계", "데이터", "데이터분석", "빅데이터", "확률", "머신러닝", "인공지능"] },
  { name: "식품영양학과", keywords: ["식품영양학과", "식품", "영양", "영양사", "건강", "식품안전", "급식"] },
  { name: "의류학과", keywords: ["의류학과", "의류", "패션", "의상", "패션디자인", "섬유", "스타일리스트"] },
  { name: "동물자원학과", keywords: ["동물자원학과", "동물", "축산", "동물생명", "가축", "반려동물", "동물복지"] },
  { name: "산림과학과", keywords: ["산림과학과", "산림", "조경", "생태", "환경", "탄소중립", "산림자원"] },

  { name: "반도체공학과", keywords: ["반도체공학과", "반도체", "디스플레이", "반도체설계", "칩", "메모리", "파운드리"] },
  { name: "컴퓨터공학과", keywords: ["컴퓨터공학과", "컴퓨터", "코딩", "프로그래밍", "알고리즘", "소프트웨어", "AI", "데이터", "보안"] },
  { name: "소프트웨어학과", keywords: ["소프트웨어학과", "소프트웨어", "프로그래밍", "앱개발", "웹개발", "게임개발", "AI"] },
  { name: "인공지능학과", keywords: ["인공지능학과", "인공지능", "AI", "머신러닝", "딥러닝", "생성형AI", "ChatGPT", "LLM"] },
  { name: "전자전기공학과", keywords: ["전자전기공학과", "전자", "전기", "반도체", "회로", "전력", "배터리", "통신"] },
  { name: "화학생명공학과", keywords: ["화학생명공학과", "화학공학", "생명공학", "바이오", "화공", "배터리", "촉매", "신소재"] },
  { name: "기계공학과", keywords: ["기계공학과", "기계", "자동차", "설계", "열역학", "유체역학", "CAD", "로봇"] },
  { name: "로봇공학과", keywords: ["로봇공학과", "로봇", "메카트로닉스", "자율주행", "인공지능", "제어공학", "드론"] },
  { name: "스마트모빌리티학과", keywords: ["스마트모빌리티학과", "모빌리티", "자동차", "전기차", "자율주행", "배터리", "드론"] },
  { name: "건축공학과", keywords: ["건축공학과", "건축공학", "건설", "구조공학", "토목", "시공", "방재", "스마트시티"] },
  { name: "건축학과", keywords: ["건축학과", "건축", "건축설계", "건축디자인", "공간디자인", "인테리어", "건축가"] },
  { name: "산업경영공학과", keywords: ["산업경영공학과", "산업공학", "경영공학", "최적화", "물류", "공급망", "생산관리", "SCM"] },
  { name: "도시공학과", keywords: ["도시공학과", "도시공학", "도시계획", "도시개발", "조경", "스마트시티", "교통계획"] },
  { name: "생명공학과", keywords: ["생명공학과", "생명공학", "바이오", "유전자", "유전자편집", "DNA", "줄기세포"] },
  { name: "신소재공학과", keywords: ["신소재공학과", "신소재", "재료공학", "나노", "반도체", "배터리", "금속", "소재"] },
  { name: "에너지자원공학과", keywords: ["에너지자원공학과", "에너지", "자원", "석유", "천연가스", "신재생에너지", "수소에너지"] },
  { name: "정보통신학과", keywords: ["정보통신학과", "정보통신", "ICT", "IT", "통신", "네트워크", "5G", "IoT"] },
  { name: "조선해양공학과", keywords: ["조선해양공학과", "조선", "해양", "선박", "함선", "잠수함", "해양플랜트"] },
  { name: "건설환경공학과", keywords: ["건설환경공학과", "건설", "토목", "교량", "터널", "도로", "인프라", "플랜트"] },
  { name: "환경공학과", keywords: ["환경공학과", "환경", "기후변화", "탄소중립", "대기오염", "수질오염", "폐기물", "ESG"] },
  { name: "항공우주공학과", keywords: ["항공우주공학과", "항공우주", "우주", "항공", "로켓", "인공위성", "NASA", "우주탐사"] },

  { name: "의학과", keywords: ["의학과", "의예과", "의대", "의사", "의학", "응급의학", "감염병", "백신", "병원"] },
  { name: "치의학과", keywords: ["치의학과", "치의예과", "치대", "치과", "치과의사", "구강", "치아", "교정"] },
  { name: "한의학과", keywords: ["한의학과", "한의대", "한의사", "한의학", "한방", "침술", "한약", "동양의학"] },
  { name: "약학과", keywords: ["약학과", "약대", "약사", "약학", "제약", "의약품", "신약개발", "약물"] },
  { name: "수의학과", keywords: ["수의학과", "수의대", "수의사", "수의학", "동물병원", "반려동물", "동물복지"] },
  { name: "간호학과", keywords: ["간호학과", "간호", "간호사", "임상간호", "중환자실", "응급실", "수술실", "병원", "보건"] },
  { name: "물리치료학과", keywords: ["물리치료학과", "물리치료", "물리치료사", "재활", "재활치료", "운동치료", "스포츠재활"] },
  { name: "치위생학과", keywords: ["치위생학과", "치위생", "치과위생사", "구강보건", "치과", "치아", "스케일링"] },
  { name: "임상병리학과", keywords: ["임상병리학과", "임상병리", "임상병리사", "의학검사", "혈액검사", "유전자검사", "진단검사"] },
  { name: "방사선학과", keywords: ["방사선학과", "방사선", "방사선사", "영상의학", "MRI", "CT", "X선", "의료영상"] },
  { name: "응급구조학과", keywords: ["응급구조학과", "응급구조", "응급구조사", "응급의료", "응급처치", "119", "CPR"] },
  { name: "안경광학과", keywords: ["안경광학과", "안경사", "검안", "시력", "시력교정", "콘택트렌즈", "안경", "광학"] },

  { name: "디자인학과", keywords: ["디자인학과", "디자인", "산업디자인", "시각디자인", "패션디자인", "브랜딩", "UX", "UI"] },
  { name: "애니메이션학과", keywords: ["애니메이션학과", "애니메이션", "만화", "웹툰", "캐릭터디자인", "2D애니메이션", "3D애니메이션"] },
  { name: "영상학과", keywords: ["영상학과", "영상", "영화", "촬영", "영상편집", "다큐멘터리", "유튜브", "PD"] },
  { name: "체육학과", keywords: ["체육학과", "체육", "스포츠", "운동", "생활체육", "스포츠지도", "운동선수"] },
  { name: "스포츠과학과", keywords: ["스포츠과학과", "스포츠과학", "스포츠의학", "운동생리학", "스포츠재활", "트레이너"] },
  { name: "미술학과", keywords: ["미술학과", "미술", "회화", "동양화", "서양화", "조소", "현대미술", "예술"] },
  { name: "연극영화학과", keywords: ["연극영화학과", "연극", "영화", "연기", "배우", "공연", "뮤지컬", "연출"] },
  { name: "음악학과", keywords: ["음악학과", "음악", "작곡", "성악", "피아노", "관현악", "클래식", "연주"] },
  { name: "실용음악과", keywords: ["실용음악과", "실용음악", "KPOP", "K-POP", "아이돌", "보컬", "싱어송라이터", "프로듀서"] },
  { name: "자유전공학과", keywords: ["자유전공학과", "자유전공학부", "자율전공학부", "자유전공", "자율전공", "무전공", "융합전공", "진로탐색"] }
];


/* =========================================================
   02. 공통 유틸리티
   ========================================================= */

function getElement(id) {
  return document.getElementById(id);
}

function setHTML(id, html) {
  const element = getElement(id);
  if (!element) return;
  element.innerHTML = html;
}

function getMajorImageFileName(majorName) {
  return `majors/${majorName}.jpg`;
}

function getPlanAImageFileName(fileName) {
  return `plan-a/${fileName}`;
}


/* =========================================================
   03. 메인 브리핑 출력
   ========================================================= */

function showBriefing() {
  setHTML("briefing", `
    <hr>

    <section class="briefing-section">
      <h2>📜 작전 브리핑</h2>

      <p>단결! 안녕하십니까, 사령관님.</p>

      <p>
        1945년 8월 15일. 제2차 세계대전은 끝났지만,
        현대세계는 이제 막 시작되었습니다.
      </p>

      <p>
        전쟁은 인문학, 자연과학, 수학·공학, 사회과학,
        예체능 등 다양한 분야의 급격한 발전을 이끌어냈습니다.
      </p>

      <p>
        그러나 우리는 아직도 많은 질문에 답하지 못하고 있습니다.
      </p>

      <div class="question-list">
        <p>💻 컴퓨터는 왜 전쟁에서 탄생했을까?</p>
        <p>🌍 UN은 왜 만들어졌을까?</p>
        <p>☢ 원자력은 축복일까, 재앙일까?</p>
      </div>

      <p>
        이에 작전사령부는 각 학문의 역사적 뿌리를 탐구하는
        <strong>DISCIPLINE × HISTORY</strong> 작전을 최우선 과제로 지정하였습니다.
      </p>

      <p>
        작전 개시 시간은 지금입니다.
      </p>
    </section>

    <hr>

    <section class="briefing-section plan-a-section">
    <h3>⚔ Plan A - OPERATION: DISCIPLINE × HISTORY</h3>

    <div class="plan-a-layout">
        <aside class="plan-a-menu" aria-label="Plan A 작전 분야 선택">
        <button class="plan-a-menu-button is-active" onclick="showHumanities(this)">
            📚 인문학 × 역사 융합 작전
        </button>

        <button class="plan-a-menu-button" onclick="showSocial(this)">
            🏛 사회과학 × 역사 융합 작전
        </button>

        <button class="plan-a-menu-button" onclick="showScience(this)">
            🧪 자연과학 × 역사 융합 작전
        </button>

        <button class="plan-a-menu-button" onclick="showEngineering(this)">
            ⚙ 수학·공학 × 역사 융합 작전
        </button>

        <button class="plan-a-menu-button" onclick="showMedical(this)">
            🚑 의학 × 역사 융합 작전
        </button>

        <button class="plan-a-menu-button" onclick="showArts(this)">
            🎨 예체능 × 역사 융합 작전
        </button>

        <button class="plan-a-menu-button" onclick="showHistory(this)">
            📜 역사 심화 탐구 작전
        </button>
        </aside>

        <div id="planAResult" class="plan-a-result">
        <div class="operation-panel placeholder-panel">
            <h2>📚 인문학 × 역사 융합 작전</h2>
            <p>
            좌측의 작전 분야를 선택하면 이곳에 세부 탐구 카드가 표시됩니다.
            </p>
        </div>
        </div>
    </div>
    </section>

    <hr>

    <section class="briefing-section">
      <h3>🎓 Plan B - OPERATION: Dept. & Div. × HISTORY</h3>

      <p>
        Plan B는 희망 학과를 검색하면 해당 학과와 역사 탐구의 연관성,
        추천 융합 탐구 주제를 확인할 수 있는 진로 분석 작전입니다.
      </p>

      <p class="status-line">📊 현재 90개 학과 데이터베이스 구축 완료</p>

      <button onclick="showMajorSearch()">🎓 Plan B 작전 시작</button>

      <div id="planBResult" class="result-panel"></div>
    </section>

    <hr>

    <section class="briefing-section faq-section" id="faqSection">
    <div class="faq-header-row">
        <div>
        <h2>🎖 역탐현 FAQ : 작전 변수 고려</h2>

        <p>
            수강 신청 전 생길 수 있는 질문을 정리했습니다.
            궁금한 질문을 선택하여 확인하십시오.
        </p>
        </div>

        <button class="faq-toggle-button" onclick="toggleFAQSection()">
        FAQ 접기
        </button>
    </div>

    <div id="faqBody">
        ${createFAQButtons()}
    </div>
    </section>
    <hr>

    <section class="briefing-section">
      <h2>🎖 AI 참모 호출</h2>

      <p>
        FAQ에서도 원하는 답을 찾지 못했다면,
        AI 참모에게 과목 선택, 진로 탐색, 탐구 주제에 대해 질문할 수 있습니다.
      </p>

      <button onclick="copyPrompt()">📋 역탐현 AI 참모 프롬프트 복사</button>
      <button onclick="openAIAdvisor()">🎖 AI 참모 호출</button>

      <p class="small-note">
        ※ 사용 순서 : ① 프롬프트 복사 → ② AI 참모 호출 → ③ ChatGPT에 붙여넣기
      </p>
    </section>
  `);

    setTimeout(() => {
    const firstButton = document.querySelector(".plan-a-menu-button");
    showHumanities(firstButton);

    scrollToBriefingFast();
    }, 80);
}


/* =========================================================
   04. Plan A 카드 버튼
   ========================================================= */

function setActivePlanAButton(clickedButton) {
  const buttons = document.querySelectorAll(".plan-a-menu-button");

  buttons.forEach(button => {
    button.classList.remove("is-active");
  });

  if (clickedButton) {
    clickedButton.classList.add("is-active");
  }
}

function renderCardButtons(title, cards, clickedButton) {
  setActivePlanAButton(clickedButton);

  const buttons = cards.map(card => `
    <button class="plan-a-card-button" onclick="showCard('${getPlanAImageFileName(card.image)}')">
      ${card.label}
    </button>
  `).join("");

  setHTML("planAResult", `
    <section class="operation-panel plan-a-detail-panel">
      <h2>${title}</h2>

      <div class="plan-a-card-list">
        ${buttons}
      </div>
    </section>
  `);
}

function showHumanities(button) {
  renderCardButtons("📚 인문학 × 역사 융합 작전", [
    { label: "📖 전체주의는 어떻게 사람들을 설득했을까?", image: "propaganda_card.jpg" },
    { label: "📚 조지 오웰의 『1984』는 왜 지금도 읽힐까?", image: "1984_card.jpg" },
    { label: "✍ 전쟁 문학은 무엇을 기록하는가? - 『서부전선 이상 없다』", image: "literature_card.jpg" },
    { label: "⚖ 인간은 왜 인권을 고민하게 되었을까? - 대서양 헌장", image: "diplomacy_card.jpg" },
    { label: "🗣 전쟁은 새로운 단어를 어떻게 만들었을까?", image: "language_card.jpg" }
  ], button);
}

function showSocial(button) {
  renderCardButtons("🏛 사회과학 × 역사 융합 작전", [
    { label: "🌍 국제연합(UN)은 왜 만들어졌을까?", image: "un_card.jpg" },
    { label: "📰 자본주의와 공산주의는 섞일 수 있을까?", image: "ideology_card.jpg" },
    { label: "💵 달러는 어떻게 세계의 돈이 되었을까?", image: "economy_card.jpg" },
    { label: "🧠 평범한 사람도 악한 행동에 가담할 수 있는가? - 악의 평범성", image: "eichmann_card.jpg" },
    { label: "🗺 국경은 누가 정하는 것일까? - 전쟁이 만든 지도", image: "map_card.jpg" },
    { label: "⚖ 전쟁 범죄는 누가 판단할 수 있을까?", image: "law_card.jpg" }
  ], button);
}

function showScience(button) {
  renderCardButtons("🧪 자연과학 × 역사 융합 작전", [
    { label: "☢ 핵분열은 어떻게 발견되었을까?", image: "nuclear_card.jpg" },
    { label: "💊 페니실린은 어떻게 생명을 구했을까?", image: "penicillin_card.jpg" },
    { label: "🧵 나일론은 왜 전쟁의 필수품이 되었을까?", image: "nylon_card.jpg" },
    { label: "🧪 과학 발전은 윤리보다 중요할까?", image: "body_card.jpg" },
    { label: "🌦 전쟁 중에 기상예측 기술은 왜 발전했을까?", image: "weather_card.jpg" }
  ], button);
}

function showEngineering(button) {
  renderCardButtons("⚙ 수학·공학 × 역사 융합 작전", [
    { label: "💻 컴퓨터는 왜 전쟁 중에 탄생했을까?", image: "computer_card.jpg" },
    { label: "🔐 암호는 세상을 바꿀 수 있을까?", image: "enigma_card.jpg" },
    { label: "📡 레이더는 전쟁을 어떻게 바꾸었을까?", image: "radar_card.jpg" },
    { label: "🚀 V-2 로켓은 무엇을 남겼을까?", image: "rocket_card.jpg" },
    { label: "🦿 전쟁은 의수·의족 기술을 어떻게 발전시켰을까?", image: "medical_card.jpg" },
    { label: "🤖 무인무기는 언제부터 시작되었을까? - 골리아트", image: "goliath_card.jpg" }
  ], button);
}

function showMedical(button) {
  renderCardButtons("🚑 의학 × 역사 융합 작전", [
    { label: "🧠 PTSD는 어떻게 발견되었을까?", image: "ptsd_card.jpg" },
    { label: "❤️ 외상외과는 왜 전쟁터에서 발전했을까?", image: "surgery_card.jpg" },
    { label: "☢ X선은 어떻게 제3의 눈이 되었을까?", image: "xray_card.jpg" },
    { label: "⛑ 전쟁터에서 의사는 어떻게 생명을 살렸을까?", image: "medic_card.jpg" },
    { label: "🦠 왜 독감은 전쟁보다 더 많은 사람을 죽였을까? - 스페인 독감과 세계대전", image: "virus_card.jpg" }
  ], button);
}

function showArts(button) {
  renderCardButtons("🎨 예체능 × 역사 융합 작전", [
    { label: "🎨 피카소는 왜 게르니카를 그렸을까?", image: "guernica_card.jpg" },
    { label: "🎵 전쟁 이후 대중음악(POP)은 어떻게 발전했을까?", image: "music_card.jpg" },
    { label: "🎬 영화는 전쟁에 어떻게 동원되었을까? - 디즈니의 프로파간다", image: "movie_card.jpg" },
    { label: "📷 사진은 역사를 기록할 수 있을까? - 로버트 카파", image: "photo_card.jpg" },
    { label: "🏅 올림픽은 정말 평화의 축제일까? - 1936년 베를린 올림픽", image: "olympic_card.jpg" }
  ], button);
}

function showHistory(button) {
  renderCardButtons("📜 역사 심화 탐구 작전", [
    { label: "🧔 전쟁은 독재자 한 명에 의해서 일어나는 것일까? - 민족주의와 인종주의", image: "hitler_card.jpg" },
    { label: "⚔ 히틀러는 왜 소련을 공격했을까? - 바르바로사 작전", image: "barbarossa_card.jpg" },
    { label: "⚔ 일본군은 왜 죽음을 명예로 여겼을까? - 가미카제와 군국주의", image: "japan_card.jpg" },
    { label: "🕯 기억은 어떻게 역사가 되는가? - 홀로코스트와 난징대학살", image: "memory_card.jpg" },
    { label: "📚 우리는 세계대전을 어떻게 가르쳐야 할까? - 선악의 딜레마", image: "education_card.jpg" },
    { label: "🌏 인류는 왜 기후변화를 막지 못했을까? - 전후 경제성장과 탄소의 시대", image: "climate_card.jpg" }
  ], button);
}


/* =========================================================
   05. Plan B 학과 검색
   ========================================================= */

function showMajorSearch() {
  setHTML("planBResult", `
    <section class="operation-panel">
      <h2>🎓 학과 정보 조회</h2>

      <p>
        희망하는 학과명 또는 관심 키워드를 입력하십시오.
      </p>

      <div class="search-guide">
        <strong>검색 예시</strong><br><br>
        AI → 인공지능학과, 컴퓨터공학과<br>
        우주 → 물리학과, 항공우주공학과<br>
        반도체 → 반도체공학과, 신소재공학과, 전자전기공학과<br>
        PTSD → 심리학과<br>
        박물관 → 사학과<br>
        응급실 → 의학과, 간호학과, 응급구조학과
      </div>

      <input
        type="text"
        id="majorInput"
        onkeyup="searchMajor()"
        placeholder="예) 간호학과, AI, 반도체, 응급실"
        class="major-search-input"
      >

      <div id="searchResults" class="search-results"></div>
    </section>
  `);

collapseFAQSection();

setTimeout(() => {
  scrollToElementFast("planBResult", 20);
}, 80);
}

function searchMajor() {
  const input = getElement("majorInput");
  const searchResults = getElement("searchResults");

  if (!input || !searchResults) return;

  const keyword = input.value.trim().toLowerCase();

  if (keyword === "") {
    searchResults.innerHTML = "";
    return;
  }

  const matchedMajors = majors.filter(major => {
    return major.keywords.some(word =>
      word.toLowerCase().includes(keyword)
    );
  });

  if (matchedMajors.length === 0) {
    searchResults.innerHTML = `
      <div class="empty-result">
        🔍 검색 결과가 없습니다.<br><br>
        다른 학과명 또는 관심 키워드를 입력해보십시오.
      </div>
    `;
    return;
  }

  searchResults.innerHTML = matchedMajors.map(major => `
    <button onclick="showCard('${getMajorImageFileName(major.name)}')">
      ${major.name}
    </button>
  `).join("");
}


/* =========================================================
   06. 이미지 팝업
   - 휠 확대/축소
   - 확대 상태에서 드래그 이동
   - 카드 바깥 클릭 시 닫기
   - 팝업 중 홈페이지 스크롤 잠금
   ========================================================= */

let popupZoomScale = 1;
let isPopupDragging = false;
let popupStartX = 0;
let popupStartY = 0;
let popupTranslateX = 0;
let popupTranslateY = 0;
let popupLastTranslateX = 0;
let popupLastTranslateY = 0;

const popupZoomMin = 0.7;
const popupZoomMax = 3.2;
const popupZoomStep = 0.12;

function showCard(imageName) {
  const popup = getElement("popup");
  const popupContent = getElement("popupContent");

  if (!popup || !popupContent) return;

  resetPopupImageState();

  popup.style.display = "block";
  popup.setAttribute("aria-hidden", "false");

  document.body.classList.add("popup-open");

  popupContent.innerHTML = `
    <div class="popup-image-stage" id="popupImageStage">
      <img
        src="images/${imageName}"
        alt="역탐현 그림카드"
        class="popup-image"
        id="popupImage"
        draggable="false"
        onerror="
          this.outerHTML = '<div class=&quot;image-error&quot;>이미지를 찾을 수 없습니다.<br><br>확인 경로:<br><strong>images/${imageName}</strong></div>';
        "
      >
    </div>
  `;

  bindPopupImageEvents();
  updatePopupImageTransform();
}

function resetPopupImageState() {
  popupZoomScale = 1;
  isPopupDragging = false;
  popupStartX = 0;
  popupStartY = 0;
  popupTranslateX = 0;
  popupTranslateY = 0;
  popupLastTranslateX = 0;
  popupLastTranslateY = 0;
}

function updatePopupImageTransform() {
  const image = getElement("popupImage");
  if (!image) return;

  image.style.transform = `
    translate(${popupTranslateX}px, ${popupTranslateY}px)
    scale(${popupZoomScale})
  `;

  if (popupZoomScale > 1.02) {
    image.classList.add("is-zoomed");
  } else {
    image.classList.remove("is-zoomed");
  }
}

function zoomPopupImage(delta) {
  const previousScale = popupZoomScale;

  popupZoomScale += delta;
  popupZoomScale = Math.max(
    popupZoomMin,
    Math.min(popupZoomMax, popupZoomScale)
  );

  if (popupZoomScale <= 1.02) {
    popupZoomScale = 1;
    popupTranslateX = 0;
    popupTranslateY = 0;
    popupLastTranslateX = 0;
    popupLastTranslateY = 0;
  } else if (previousScale === 1 && popupZoomScale > 1) {
    popupTranslateX = 0;
    popupTranslateY = 0;
    popupLastTranslateX = 0;
    popupLastTranslateY = 0;
  }

  updatePopupImageTransform();
}

function bindPopupImageEvents() {
  const image = getElement("popupImage");
  const stage = getElement("popupImageStage");

  if (!image || !stage) return;

  stage.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.deltaY < 0) {
        zoomPopupImage(popupZoomStep);
      } else {
        zoomPopupImage(-popupZoomStep);
      }
    },
    { passive: false }
  );

  image.addEventListener("mousedown", function (event) {
    if (popupZoomScale <= 1.02) return;

    event.preventDefault();
    event.stopPropagation();

    isPopupDragging = true;

    popupStartX = event.clientX;
    popupStartY = event.clientY;
    popupLastTranslateX = popupTranslateX;
    popupLastTranslateY = popupTranslateY;

    document.addEventListener("mousemove", dragPopupImage);
    document.addEventListener("mouseup", stopDragPopupImage);
  });
}

function dragPopupImage(event) {
  if (!isPopupDragging) return;

  const moveX = event.clientX - popupStartX;
  const moveY = event.clientY - popupStartY;

  popupTranslateX = popupLastTranslateX + moveX;
  popupTranslateY = popupLastTranslateY + moveY;

  updatePopupImageTransform();
}

function stopDragPopupImage() {
  isPopupDragging = false;

  document.removeEventListener("mousemove", dragPopupImage);
  document.removeEventListener("mouseup", stopDragPopupImage);
}

function closePopup() {
  const popup = getElement("popup");
  const popupContent = getElement("popupContent");

  if (!popup) return;

  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");

  document.body.classList.remove("popup-open");

  if (typeof resetPopupImageState === "function") {
    resetPopupImageState();
  }

  if (popupContent) {
    popupContent.innerHTML = "";
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const popup = getElement("popup");
  const popupPanel = document.querySelector(".popup-panel");

  if (!popup) return;

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });

  popup.addEventListener(
    "wheel",
    function (event) {
      if (popup.style.display !== "block") return;

      event.preventDefault();
      event.stopPropagation();
    },
    { passive: false }
  );

  if (popupPanel) {
    popupPanel.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
});


/* =========================================================
   07. FAQ
   ========================================================= */

const faqs = [
  {
    id: "faq1",
    question: "Q1. 이 과목, 세특 쓰기에 좋은가요?",
    answer: "네. 역사 탐구와 현대사회는 학과별 융합 탐구가 가능하여 세특 기록에 활용하기 좋은 과목입니다."
  },
  {
    id: "faq2",
    question: "Q2. 이공계 학생도 역사 과목을 들어야 하나요?",
    answer: "물론입니다. 반도체, 인공지능, 원자력, 우주개발 등 현대 과학기술은 모두 역사적 사건과 연결되어 발전했습니다."
  },
  {
    id: "faq3",
    question: "Q3. 문과 학생에게는 어떤 도움이 되나요?",
    answer: "정치, 경제, 외교, 언어, 문화, 교육 등 다양한 분야를 역사적 맥락 속에서 이해할 수 있습니다."
  },
  {
    id: "faq4",
    question: "Q4. 역사 지식이 부족해도 수강할 수 있나요?",
    answer: "가능합니다. 필요한 역사적 배경은 수업 중 함께 다루므로 사전 지식이 많지 않아도 됩니다."
  },
  {
    id: "faq5",
    question: "Q5. 암기를 많이 해야 하나요?",
    answer: "단순 암기보다 사건의 원인과 결과를 분석하고 현대사회와 연결하는 탐구 활동이 중심입니다."
  },
  {
    id: "faq6",
    question: "Q6. 수행평가는 어떤 방식으로 진행되나요?",
    answer: "탐구 보고서, 발표, 자료 분석, 토론 등 다양한 형태로 진행될 수 있습니다."
  },
  {
    id: "faq7",
    question: "Q7. 발표를 잘 못해도 괜찮나요?",
    answer: "발표 능력보다 탐구 과정과 논리적인 사고가 더 중요합니다."
  },
  {
    id: "faq8",
    question: "Q8. 진로가 아직 정해지지 않았는데 들어도 될까요?",
    answer: "오히려 추천합니다. 다양한 학문 분야와 역사적 사례를 접하며 진로 탐색에 도움을 받을 수 있습니다."
  },
  {
    id: "faq9",
    question: "Q9. 대학 입시에 도움이 되나요?",
    answer: "탐구 활동, 세특, 학업역량, 전공적합성 등을 보여줄 수 있어 학생부 기록에 도움이 됩니다."
  },
  {
    id: "faq10",
    question: "Q10. 어떤 학생이 수강하면 좋을까요?",
    answer: "호기심이 많고 다양한 분야를 연결해서 생각하는 것을 좋아하는 학생에게 추천합니다."
  },
  {
    id: "faq11",
    question: "Q11. 역사와 현대사회의 차이는 무엇인가요?",
    answer: "과거 사건 자체를 배우는 데 그치지 않고 현재의 사회 문제와 연결해 해석하는 데 중점을 둡니다."
  },
  {
    id: "faq12",
    question: "Q12. 인공지능 시대에도 역사 공부가 중요할까요?",
    answer: "AI는 정보를 제공할 수 있지만 인간은 역사적 맥락을 이해하고 판단해야 합니다."
  },
  {
    id: "faq13",
    question: "Q13. 탐구 주제는 스스로 정해야 하나요?",
    answer: "기본 주제는 제공되지만 자신의 관심 분야를 반영하여 발전시킬 수 있습니다."
  },
  {
    id: "faq14",
    question: "Q14. 팀 활동이 많나요?",
    answer: "개인 탐구와 협력 탐구가 적절히 병행될 수 있습니다."
  },
  {
    id: "faq15",
    question: "Q15. 논술이나 면접에도 도움이 되나요?",
    answer: "사회 현상과 역사적 사례를 연결하는 경험은 논술과 면접에서 강점이 될 수 있습니다."
  },
  {
    id: "faq16",
    question: "Q16. 전쟁 이야기만 배우나요?",
    answer: "전쟁뿐 아니라 과학기술, 문화, 경제, 예술, 외교 등 다양한 주제를 다룹니다."
  },
  {
    id: "faq17",
    question: "Q17. 탐구 결과가 정답이어야 하나요?",
    answer: "정답보다 탐구 과정과 근거 있는 논리가 중요합니다."
  },
  {
    id: "faq18",
    question: "Q18. 가장 중요한 역량은 무엇인가요?",
    answer: "질문을 던지고 자료를 분석하며 자신의 생각을 정리하는 능력입니다."
  },
  {
    id: "faq19",
    question: "Q19. 추천하는 탐구 방법이 있나요?",
    answer: "관심 있는 진로와 역사적 사건을 연결하여 탐구하는 방법을 추천합니다."
  },
  {
    id: "faq20",
    question: "Q20. 이 과목의 최종 목표는 무엇인가요?",
    answer: "과거를 통해 현재를 이해하고 미래를 준비하는 시민으로 성장하는 것입니다."
  }
];

function createFAQButtons() {
  return `
    <div class="faq-grid">
      ${faqs.map(faq => `
        <div class="faq-item">
          <button class="faq-question-button" onclick="showFAQPopup('${faq.id}')">
            ${faq.question}
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

function showFAQPopup(id) {
  const faq = faqs.find(item => item.id === id);
  const popup = getElement("popup");
  const popupContent = getElement("popupContent");

  if (!faq || !popup || !popupContent) return;

  popup.style.display = "block";
  popup.setAttribute("aria-hidden", "false");

  document.body.classList.add("popup-open");

  popupContent.innerHTML = `
    <section class="faq-popup-card">
      <div class="faq-popup-label">FIELD QUESTION RESPONSE</div>
      <h2>${faq.question}</h2>
      <p>${faq.answer}</p>
    </section>
  `;
}

function collapseFAQSection() {
  const faqSection = document.getElementById("faqSection");
  const faqBody = document.getElementById("faqBody");
  const faqButton = document.querySelector(".faq-toggle-button");

  if (!faqSection || !faqBody || !faqButton) return;

  faqSection.classList.add("is-collapsed");
  faqBody.style.display = "none";
  faqButton.textContent = "FAQ 다시 보기";

  setTimeout(() => {
    scrollToElementFast("faqSection", 20);
  }, 80);
}

function expandFAQSection() {
  const faqSection = document.getElementById("faqSection");
  const faqBody = document.getElementById("faqBody");
  const faqButton = document.querySelector(".faq-toggle-button");

  if (!faqSection || !faqBody || !faqButton) return;

  faqSection.classList.remove("is-collapsed");
  faqBody.style.display = "block";
  faqButton.textContent = "FAQ 접기";

  setTimeout(() => {
    scrollToElementFast("faqSection", 20);
  }, 80);
}

function toggleFAQSection() {
  const faqBody = document.getElementById("faqBody");

  if (!faqBody) return;

  if (faqBody.style.display === "none") {
    expandFAQSection();
  } else {
    collapseFAQSection();
  }
}


/* =========================================================
   08. AI 참모
   ========================================================= */

function openAIAdvisor() {
  alert(
    "AI 참모와 연결합니다.\n\n" +
    "반드시 프롬프트를 붙여넣기(ctrl+v) 하고 질문하세요."
  );

  window.open("https://chatgpt.com", "_blank");
}

function copyPrompt() {
  const prompt = `당신은 「역사로 탐구하는 현대세계」를 담당하는 고등학교 교사이다.

당신의 목표는 학생을 무조건 설득하는 것이 아니라, 학생이 제기하는 의문과 반론을 진지하게 검토하고 스스로 판단할 수 있도록 돕는 것이다.

답변 시 다음 원칙을 따른다.

1. 학생의 질문을 무시하거나 반박하지 않는다.
2. "그럴 수도 있다", "충분히 그렇게 생각할 수 있다"와 같이 학생의 입장을 먼저 인정한다.
3. 역탐현의 장점만 말하지 말고, 어떤 학생에게는 다른 과목이 더 적합할 수도 있음을 인정한다.
4. 역사와 현대세계의 핵심 가치를 설명할 때는 실제 사례를 사용한다.
5. 특히 의학, 공학, 인공지능, 경제, 국제정치, 문화 분야가 역사와 어떻게 연결되는지 보여준다.
6. 단순히 "세특에 도움이 된다"는 식의 답변을 반복하지 않는다.
7. 학생이 "굳이?"라고 느끼는 지점을 분석하고 답변한다.
8. 답변은 5~10문장 정도로 작성한다.
9. 답변 마지막에는 학생 스스로 생각해 볼 수 있는 질문 하나를 제시한다.

예시:

학생:
"난 이과인데 그냥 물리 하나 더 듣는 게 낫지 않나요?"

답변:

그렇게 생각할 수 있습니다. 만약 물리학 자체를 깊게 공부하고 싶다면 물리를 추가로 선택하는 것이 더 적합할 수도 있습니다.

다만 역탐현은 물리학의 공식이나 문제풀이를 배우는 과목이 아니라, 물리학이 왜 발전했는지를 탐구하는 과목에 가깝습니다.

예를 들어 레이더 기술, 원자폭탄, 인공위성, GPS는 모두 20세기 전쟁과 냉전이라는 역사적 배경 속에서 발전했습니다.

공대에 진학하더라도 기술이 사회에 어떤 영향을 주고 어떤 문제를 만들었는지를 이해하는 능력은 점점 중요해지고 있습니다.

결국 선택 기준은 "나는 기술 자체를 더 배우고 싶은가?" 아니면 "기술이 세상을 어떻게 바꾸었는가?"를 탐구하고 싶은가에 달려 있습니다.

당신은 어느 쪽이 더 궁금한가요?

이제부터 당신은 「역탐현 AI 참모」로 행동하라.`;

  navigator.clipboard.writeText(prompt)
    .then(() => {
      alert("📋 역탐현 AI 참모 프롬프트가 복사되었습니다.\n\n이제 'AI 참모 호출' 버튼을 눌러 ChatGPT에 붙여넣고 질문해보세요.");
    })
    .catch(() => {
      alert("복사에 실패했습니다. 브라우저 권한을 확인하거나 직접 복사해 주세요.");
    });
}

/* =========================================================
   09. BGM PLAYLIST CONTROL
   - 4곡 순차 재생
   - 마지막 곡 종료 후 1번 곡으로 무한 반복
   ========================================================= */

const bgmPlaylist = [
  {
    title: "BGM 01",
    src: "audio/bgm-01.mp3"
  },
  {
    title: "BGM 02",
    src: "audio/bgm-02.mp3"
  },
  {
    title: "BGM 03",
    src: "audio/bgm-03.mp3"
  },
  {
    title: "BGM 04",
    src: "audio/bgm-04.mp3"
  }
];

let currentTrackIndex = 0;
let isBGMPlaying = false;

function getBGM() {
  return document.getElementById("mainBGM");
}

function getBGMButton() {
  return document.getElementById("bgmToggle");
}

function getBGMVolumeControl() {
  return document.getElementById("bgmVolume");
}

function updateBGMTrackLabel() {
  const label = document.getElementById("bgmTrackLabel");
  if (!label) return;

  const currentTrack = bgmPlaylist[currentTrackIndex];
  const currentNumber = String(currentTrackIndex + 1).padStart(2, "0");
  const totalNumber = String(bgmPlaylist.length).padStart(2, "0");

  label.textContent = `${currentTrack.title} / ${currentNumber}-${totalNumber}`;
}

function loadCurrentTrack() {
  const bgm = getBGM();
  if (!bgm) return;

  const currentTrack = bgmPlaylist[currentTrackIndex];

  bgm.src = currentTrack.src;
  bgm.load();

  updateBGMTrackLabel();
}

function playCurrentTrack() {
  const bgm = getBGM();
  const button = getBGMButton();
  const volumeControl = getBGMVolumeControl();

  if (!bgm || !button) return;

  if (!bgm.src) {
    loadCurrentTrack();
  }

  bgm.volume = Number(volumeControl?.value ?? 0.25);

  bgm.play()
    .then(() => {
      isBGMPlaying = true;
      button.textContent = "Ⅱ BGM OFF";
      button.classList.add("is-playing");
    })
    .catch(() => {
      alert("브라우저가 오디오 재생을 차단했습니다. 화면을 한 번 클릭한 뒤 다시 눌러주세요.");
    });
}

function pauseBGM() {
  const bgm = getBGM();
  const button = getBGMButton();

  if (!bgm || !button) return;

  bgm.pause();
  isBGMPlaying = false;
  button.textContent = "▶ BGM ON";
  button.classList.remove("is-playing");
}

function toggleBGM() {
  if (isBGMPlaying) {
    pauseBGM();
  } else {
    playCurrentTrack();
  }
}

function playNextTrack() {
  const wasPlaying = isBGMPlaying;

  currentTrackIndex = (currentTrackIndex + 1) % bgmPlaylist.length;
  loadCurrentTrack();

  if (wasPlaying) {
    playCurrentTrack();
  }
}

function playPreviousTrack() {
  const wasPlaying = isBGMPlaying;

  currentTrackIndex =
    (currentTrackIndex - 1 + bgmPlaylist.length) % bgmPlaylist.length;

  loadCurrentTrack();

  if (wasPlaying) {
    playCurrentTrack();
  }
}

function setBGMVolume(value) {
  const bgm = getBGM();
  if (!bgm) return;

  bgm.volume = Number(value);
}

document.addEventListener("DOMContentLoaded", function () {
  const bgm = getBGM();

  if (!bgm) return;

  loadCurrentTrack();

  bgm.addEventListener("ended", function () {
    currentTrackIndex = (currentTrackIndex + 1) % bgmPlaylist.length;
    loadCurrentTrack();
    playCurrentTrack();
  });
});

function scrollToBriefingFast() {
  const briefing = document.getElementById("briefing");
  if (!briefing) return;

  const targetY = briefing.getBoundingClientRect().top + window.scrollY - 20;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 800;
  let startTime = null;

  function animateScroll(currentTime) {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

function scrollToElementFast(elementId, offset = 20) {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const targetY = targetElement.getBoundingClientRect().top + window.scrollY - offset;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 900;
  let startTime = null;

  function animateScroll(currentTime) {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easedProgress = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}