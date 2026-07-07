/* =========================================================
   역사로 탐구하는 현대세계
   MODERN WORLD OPERATIONS COMMAND
   script.js
   ========================================================= */


/* =========================================================
   01. 학과 데이터베이스
   - 이미지 파일명 규칙: images/학과명.png
   - 예: 간호학과 → images/간호학과.png
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
  { name: "자유전공학과", keywords: ["자유전공학과", "자유전공학부", "자율전공학부", "자유전공", "자율전공", "무전공", "융합전공", "진로탐색"] },
  { name: "경찰행정학과", keywords: ["경찰행정학과", "경찰행정", "경찰", "수사", "범죄", "치안", "형사", "공공안전", "경찰공무원"] },
  { name: "군사학과", keywords: ["군사학과", "군사", "군인", "장교", "국방", "안보", "전략", "전쟁", "군대", "ROTC"] },
  { name: "총포공학과", keywords: ["총포공학과", "총포", "무기", "화기", "탄도", "방위산업", "국방기술", "무기공학", "군수"] },
  { name: "스마트팜학과", keywords: ["스마트팜학과", "스마트팜", "농업", "농업기술", "ICT농업", "농생명", "식물", "작물", "미래농업"] },
  { name: "소방행정학과", keywords: ["소방행정학과", "소방행정", "소방", "소방관", "재난", "재난관리", "화재", "구조", "안전", "119"] },
  { name: "법학과", keywords: ["법학과", "법학", "법", "변호사", "검사", "판사", "재판", "헌법", "형법", "민법", "인권"] },
  { name: "데이터사이언스학과", keywords: ["데이터사이언스학과", "데이터사이언스", "데이터", "빅데이터", "데이터분석", "통계", "AI", "인공지능", "머신러닝"] },
  { name: "정보보안학과", keywords: ["정보보안학과", "정보보안", "보안", "사이버보안", "해킹", "화이트해커", "암호", "네트워크", "개인정보", "사이버전"] },
  { name: "게임학과", keywords: ["게임학과", "게임", "게임개발", "게임기획", "게임디자인", "게임그래픽", "프로그래밍", "콘텐츠", "e스포츠"] },
  { name: "의공학과", keywords: ["의공학과", "의공학", "의료공학", "생체공학", "의료기기", "바이오메디컬", "재활공학", "인공장기", "헬스케어"] },
  { name: "작업치료학과", keywords: ["작업치료학과", "작업치료", "작업치료사", "재활", "재활치료", "신체재활", "인지재활", "일상생활훈련", "보건"] },
  { name: "언어치료학과", keywords: ["언어치료학과", "언어치료", "언어재활", "언어재활사", "의사소통", "말더듬", "발음", "청각", "아동언어", "재활"] },
  { name: "치기공학과", keywords: ["치기공학과", "치기공", "치과기공", "치과기공사", "보철", "임플란트", "치아", "구강", "치의학"] },
  { name: "보건행정학과", keywords: ["보건행정학과", "보건행정", "보건", "의료행정", "병원행정", "건강보험", "의료정책", "공공보건", "보건의료"] },
  { name: "원자력공학과", keywords: ["원자력공학과", "원자력", "원전", "핵에너지", "방사선", "핵분열", "에너지", "발전소", "방사능", "핵"] },
  { name: "해양학과", keywords: ["해양학과", "해양", "바다", "해양과학", "해양환경", "해류", "기후", "해양생물", "해양자원", "해양오염"] },
  { name: "조경학과", keywords: ["조경학과", "조경", "공원", "정원", "도시녹지", "경관", "생태", "환경설계", "도시계획", "산림"] },
  { name: "농업경제학과", keywords: ["농업경제학과", "농업경제", "농업", "경제", "식량", "식량안보", "농산물", "농촌", "농업정책", "농식품"] },
  { name: "아동학과", keywords: ["아동학과", "아동", "아동복지", "아동발달", "보육", "유아", "가족", "아동심리", "아동상담", "아동권리"] },
  { name: "청소년학과", keywords: ["청소년학과", "청소년", "청소년지도", "청소년상담", "청소년복지", "상담", "학교폭력", "진로상담", "청소년문화"] }
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
  return `majors/${majorName}.png`;
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
        <div class="faq-title-line">
          <h2>🎖 역탐현 FAQ : 작전 변수 고려</h2>

          <button class="faq-toggle-button" onclick="toggleFAQSection()">
            FAQ 접기
          </button>
        </div>

        <p>
          수강 신청 전 생길 수 있는 질문을 정리했습니다.
          궁금한 질문을 선택하여 확인하십시오.
        </p>
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

let touchStartDistance = 0;
let touchStartScale = 1;
let touchStartCenterX = 0;
let touchStartCenterY = 0;
let touchLastX = 0;
let touchLastY = 0;

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

  touchStartDistance = 0;
  touchStartScale = 1;
  touchStartCenterX = 0;
  touchStartCenterY = 0;
  touchLastX = 0;
  touchLastY = 0;
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

  /* 태블릿: 한 손가락 드래그 / 두 손가락 확대축소 */
  stage.addEventListener("touchstart", handlePopupTouchStart, { passive: false });
  stage.addEventListener("touchmove", handlePopupTouchMove, { passive: false });
  stage.addEventListener("touchend", handlePopupTouchEnd, { passive: false });
  stage.addEventListener("touchcancel", handlePopupTouchEnd, { passive: false });
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

function getTouchDistance(touch1, touch2) {
  const dx = touch2.clientX - touch1.clientX;
  const dy = touch2.clientY - touch1.clientY;

  return Math.hypot(dx, dy);
}

function getTouchCenter(touch1, touch2) {
  return {
    x: (touch1.clientX + touch2.clientX) / 2,
    y: (touch1.clientY + touch2.clientY) / 2
  };
}

function handlePopupTouchStart(event) {
  if (!getElement("popupImage")) return;

  if (event.touches.length === 1) {
    event.preventDefault();

    const touch = event.touches[0];

    touchLastX = touch.clientX;
    touchLastY = touch.clientY;

    popupLastTranslateX = popupTranslateX;
    popupLastTranslateY = popupTranslateY;
  }

  if (event.touches.length === 2) {
    event.preventDefault();

    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const center = getTouchCenter(touch1, touch2);

    touchStartDistance = getTouchDistance(touch1, touch2);
    touchStartScale = popupZoomScale;
    touchStartCenterX = center.x;
    touchStartCenterY = center.y;

    popupLastTranslateX = popupTranslateX;
    popupLastTranslateY = popupTranslateY;
  }
}

function handlePopupTouchMove(event) {
  if (!getElement("popupImage")) return;

  if (event.touches.length === 1) {
    event.preventDefault();

    if (popupZoomScale <= 1.02) return;

    const touch = event.touches[0];

    const moveX = touch.clientX - touchLastX;
    const moveY = touch.clientY - touchLastY;

    popupTranslateX += moveX;
    popupTranslateY += moveY;

    touchLastX = touch.clientX;
    touchLastY = touch.clientY;

    updatePopupImageTransform();
  }

  if (event.touches.length === 2) {
    event.preventDefault();

    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const center = getTouchCenter(touch1, touch2);

    const currentDistance = getTouchDistance(touch1, touch2);

    if (touchStartDistance === 0) return;

    const scaleRatio = currentDistance / touchStartDistance;

    popupZoomScale = touchStartScale * scaleRatio;
    popupZoomScale = Math.max(
      popupZoomMin,
      Math.min(popupZoomMax, popupZoomScale)
    );

    const centerMoveX = center.x - touchStartCenterX;
    const centerMoveY = center.y - touchStartCenterY;

    popupTranslateX = popupLastTranslateX + centerMoveX;
    popupTranslateY = popupLastTranslateY + centerMoveY;

    if (popupZoomScale <= 1.02) {
      popupZoomScale = 1;
      popupTranslateX = 0;
      popupTranslateY = 0;
    }

    updatePopupImageTransform();
  }
}

function handlePopupTouchEnd(event) {
  if (event.touches.length === 0) {
    touchStartDistance = 0;
    touchStartScale = popupZoomScale;
    touchStartCenterX = 0;
    touchStartCenterY = 0;
  }

  if (event.touches.length === 1) {
    const touch = event.touches[0];

    touchLastX = touch.clientX;
    touchLastY = touch.clientY;
  }
}


/* =========================================================
   07. FAQ
   ========================================================= */

const faqs = [
  {
    id: "faq1",
    question: "Q1. 「역사로 탐구하는 현대세계」 과목은 도대체 무엇을 하는 과목인가요?",
    answer: "<p>이 질문은 정말 자연스럽습니다. 과목 이름만 보면 역사 과목인지, 시사 과목인지, 사회문제 탐구 과목인지 한눈에 잘 들어오지 않을 수 있습니다. 「역사로 탐구하는 현대세계」는 단순히 현대사 사건을 순서대로 외우는 과목이 아니라, 지금 내가 선택하고자 하는 진로가 어떤 역사적 과정을 거쳐 만들어졌는지 탐구하는 과목입니다.</p><p>예를 들어 우리는 스마트폰으로 전 세계 뉴스를 보고, 해외 브랜드를 소비하고, 전쟁과 난민 문제를 실시간으로 접하고, AI와 기후위기 이야기를 매일 듣습니다. 그런데 이런 현상은 갑자기 생긴 것이 아닙니다. 제1·2차 세계대전, 냉전, 탈식민화, 산업화, 세계화, 과학기술 경쟁, 인권 운동, 대중문화의 확산 같은 현대사의 흐름이 쌓이면서 지금의 세계가 만들어졌습니다.</p><p>이 과목에서는 그런 연결을 다룹니다. 냉전은 단순히 미국과 소련의 대립이 아니라 우주개발, 핵무기, 컴퓨터, 인터넷, GPS, 감시 기술과 연결됩니다. 세계화는 단순히 무역이 늘어난 현상이 아니라 다국적 기업, 노동 문제, 문화 산업, K-콘텐츠의 확산, 국가 간 불평등과도 연결됩니다. 전쟁 이후 국제보건 체계와 인권 의식이 어떻게 발전했는지도 탐구할 수 있습니다.</p><p>그래서 이 과목의 핵심 질문은 하나로 정리할 수 있습니다. ‘지금의 세계는 왜 이렇게 되었을까?’입니다. 사건 이름을 많이 아는 것보다, 사건의 배경과 결과를 현대 사회 문제와 연결해 설명하는 힘이 중요합니다.</p><p>다만 정해진 내용을 빠르게 암기하고 문제 풀이 중심으로 공부하는 과목을 기대한다면 조금 낯설 수 있습니다. 대신 현대 사회의 여러 문제를 역사적 배경 속에서 이해하고, 자신의 진로와 연결해 탐구해 보고 싶은 학생에게는 꽤 강점이 있는 과목입니다. 나는 지금 내가 살아가는 세계의 뿌리를 알고 싶은 학생인가요?</p>"
  },
  {
    id: "faq2",
    question: "Q2. 이 과목, 세특 쓰기에 좋은가요?",
    answer: "<p>현실적으로 아주 중요한 질문입니다. 선택과목을 고를 때 학생부에 어떻게 드러날 수 있는지 고민하는 것은 자연스럽습니다. 「역사로 탐구하는 현대세계」는 세특을 쓰기에 좋은 가능성이 있는 과목입니다. 다만 과목을 선택했다는 사실만으로 세특이 자동으로 좋아지는 과목은 아닙니다.</p><p>이 과목의 강점은 학생이 자신의 관심 분야와 현대사의 큰 흐름을 연결해 탐구 질문을 만들기 좋다는 점입니다. 예를 들어 의학·보건 계열 학생은 전후 감염병 관리, 국제보건기구, 백신 보급, 난민과 공중보건 문제를 탐구할 수 있습니다. 공학·인공지능 계열 학생은 냉전 시기 우주개발, 군사기술의 민간 전환, 컴퓨터 네트워크, 인터넷, GPS, 감시 기술과 윤리 문제를 연결해 볼 수 있습니다.</p><p>경제·경영, 정치외교, 미디어, 사회복지, 교육, 인문 계열 학생에게도 연결 지점이 많습니다. 석유파동과 금융위기, 세계화와 다국적 기업, 탈식민화와 국제 갈등, 인권 선언과 난민 문제, 냉전 선전과 대중문화, K-콘텐츠의 세계화 같은 주제는 단순한 역사 지식이 아니라 현대 사회를 분석하는 탐구 주제로 발전시킬 수 있습니다.</p><p>세특에서 의미 있게 보이려면 단순히 ‘현대사에 관심을 보였다’는 수준에서 끝나면 안 됩니다. 좋은 기록은 보통 학생이 어떤 질문을 세웠는지, 어떤 자료를 읽고 해석했는지, 서로 다른 관점을 어떻게 비교했는지, 자신의 진로와 어떤 방식으로 연결했는지에서 만들어집니다. 예를 들어 ‘냉전이 과학기술 발전에 영향을 주었다’보다 ‘냉전기 국가 경쟁이 우주개발과 위치정보기술의 발전을 촉진했지만, 동시에 군사화와 감시 기술의 윤리 문제를 남겼다’처럼 설명할 수 있을 때 탐구 과정이 더 선명해집니다.</p><p>따라서 이 과목은 세특에 활용할 여지가 큰 편이지만, 보고서·발표·자료 해석 활동에 어느 정도 참여하려는 태도가 필요합니다. 세특만을 목적으로 편하게 선택하기보다는, 내가 현대 사회의 문제를 내 진로와 연결해 질문으로 만들어 볼 수 있는지 생각해 보는 것이 좋습니다.</p>"
  },
  {
    id: "faq3",
    question: "Q3. 학생부 종합 전형을 준비하는 이공계 학생한테도 득이 되는 과목일까요?",
    answer: "<p>그렇게 고민하는 것은 당연합니다. 이공계 학생 입장에서는 물리, 화학, 생명과학, 지구과학, 수학, 정보 관련 과목이 더 직접적으로 중요해 보일 수 있습니다. 그래서 역사 관련 융합 선택 과목이 내 진로에 실제로 도움이 될지 의문이 들 수 있습니다.</p><p>「역사로 탐구하는 현대세계」가 이공계 학생에게 의미 있는 이유는 과학기술을 단순한 발명품의 역사로 보지 않고, 그것이 어떤 시대적 필요와 국제 질서 속에서 발전했는지 탐구할 수 있기 때문입니다. 예를 들어 냉전은 우주개발, 핵기술, 컴퓨터, 인터넷, GPS, 인공위성, 군사기술의 민간 전환과 깊이 연결됩니다. 과학기술은 실험실 안에서만 발전한 것이 아니라 전쟁, 국가 경쟁, 산업화, 자원 문제, 안보 논리와 함께 움직였습니다.</p><p>의학·보건 계열 학생이라면 전후 감염병 관리, 국제보건기구, 백신 보급, 난민과 공중보건, 전쟁과 의료 윤리, 생명권 문제를 탐구할 수 있습니다. 공학 계열 학생이라면 원자력, 에너지 기술, 도시 인프라, 산업화와 환경오염 문제를 다룰 수 있습니다. 인공지능·컴퓨터 계열 학생이라면 암호 해독, 계산기술, 데이터 처리, 인터넷의 형성, 감시 기술과 개인정보 윤리 문제를 현대사의 흐름 속에서 연결해 볼 수 있습니다.</p><p>다만 이 과목이 이공계 전공 역량을 직접 증명해 주는 과목이라고 과장할 수는 없습니다. 수학적 문제 해결력이나 과학 개념 이해 자체는 관련 교과에서 더 분명하게 드러납니다. 대신 이 과목은 내가 관심 있는 과학기술이 사회에 어떤 영향을 주었고, 어떤 역사적 배경 속에서 등장했으며, 앞으로 어떤 윤리적 질문을 남기는지 설명하는 데 강점이 있습니다.</p><p>학생부 종합 전형을 준비하는 이공계 학생이라면 ‘기술을 잘 아는 학생’에서 한 걸음 더 나아가 ‘기술이 사회를 어떻게 바꾸는지 이해하는 학생’으로 자신을 보여 줄 수 있습니다. 나는 내 진로를 공식과 실험 결과만이 아니라, 사회적 책임과 역사적 맥락 속에서도 설명하고 싶은 학생인가요?</p>"
  },
  {
    id: "faq4",
    question: "Q4. 문과 학생에게는 어떤 도움이 되나요?",
    answer: "<p>문과 학생이라면 이 과목과의 연결 지점이 비교적 넓습니다. 다만 ‘역사니까 문과에 당연히 도움 된다’ 정도로만 이해하면 이 과목의 특징이 잘 드러나지 않습니다. 「역사로 탐구하는 현대세계」는 단순히 과거 사건을 아는 과목이 아니라, 현대 사회의 구조와 쟁점을 역사적 배경 속에서 읽어 내는 과목입니다.</p><p>예를 들어 정치외교나 국제학에 관심이 있다면 냉전, 탈식민화, 국제기구, 중동 분쟁, 난민, 인권 문제를 탐구할 수 있습니다. 경제·경영 분야라면 석유파동, 세계화, 금융위기, 다국적 기업, 무역 갈등, 노동 문제를 다룰 수 있습니다. 사회복지·교육 분야라면 복지국가, 인권 선언, 전쟁고아, 청소년 문화, 교육 기회의 확대 같은 주제와 연결할 수 있습니다.</p><p>미디어·문화콘텐츠·예술 계열 학생에게도 의미가 있습니다. 전후 대중문화, 텔레비전과 영화의 확산, 냉전 선전, 청소년 문화, 소비사회, K-콘텐츠의 세계화는 모두 현대사의 흐름 속에서 이해할 수 있는 주제입니다. 문학이나 언어 계열 학생이라면 전쟁 문학, 탈식민 문학, 독재와 저항, 문화 기억, 언어와 정체성 문제를 탐구할 수도 있습니다.</p><p>이 과목의 장점은 문과 진로에서 자주 요구되는 ‘맥락을 읽는 힘’을 기를 수 있다는 점입니다. 하나의 사건을 단편적으로 보는 것이 아니라, 원인과 결과를 파악하고, 서로 다른 관점을 비교하며, 자료를 근거로 자신의 해석을 제시하는 연습을 할 수 있습니다. 이런 과정은 사회과학, 인문학, 교육, 미디어 계열 탐구와 잘 맞습니다.</p><p>다만 문과 학생이라고 해서 무조건 편한 과목은 아닙니다. 사건의 흐름을 넓게 연결해야 하고, 자료를 읽고 자신의 생각을 정리하는 활동이 필요할 수 있습니다. 내가 단순 암기보다 사회 현상의 배경과 구조를 이해하는 데 흥미가 있다면, 이 과목은 문과 진로를 더 구체적으로 설명하는 데 도움이 될 수 있습니다.</p>"
  },
  {
    id: "faq5",
    question: "Q5. 저는 진로가 잡혀있지 않습니다. 이 과목을 수강해야 할 이유가 있을까요?",
    answer: "<p>진로가 아직 뚜렷하지 않다면 오히려 이런 질문이 더 중요합니다. 선택과목을 고를 때 ‘내 진로와 연결되는가?’를 따지는 것은 자연스럽지만, 모든 학생이 고등학교 시기에 확실한 진로를 정해 놓고 과목을 선택하는 것은 아닙니다. 아직 진로가 잡혀 있지 않다고 해서 이 과목이 의미 없는 것은 아닙니다.</p><p>「역사로 탐구하는 현대세계」는 특정 학과 하나에만 맞춰진 과목이라기보다, 현대 사회를 여러 방향에서 살펴보며 자신의 관심사를 발견하기 좋은 과목입니다. 전쟁과 평화, 국제 갈등, 과학기술, 인권, 환경, 경제 위기, 대중문화, 미디어, 세계화 같은 주제를 다루다 보면 내가 어떤 문제에 더 끌리는지 자연스럽게 드러날 수 있습니다. 어떤 학생은 난민과 인권 문제에서 사회복지나 국제학에 관심을 발견하고, 어떤 학생은 냉전과 우주개발을 보며 공학이나 과학기술 정책에 흥미를 느낄 수 있습니다.</p><p>이 과목의 장점은 ‘진로를 이미 정한 학생’만을 위한 것이 아니라는 점입니다. 오히려 아직 진로가 불분명한 학생에게는 다양한 주제를 역사적 배경과 함께 접하면서 자신의 관심 분야를 시험해 보는 기회가 될 수 있습니다. 예를 들어 석유파동을 배우며 경제와 에너지 문제에 관심이 생길 수도 있고, K-콘텐츠의 세계화를 탐구하며 미디어·문화산업 분야를 생각해 볼 수도 있습니다.</p><p>물론 진로가 없다고 해서 아무 부담 없이 듣기만 하면 되는 과목은 아닙니다. 보고서나 발표, 자료 해석 활동에서 ‘내가 무엇을 궁금해하는가’를 스스로 찾아야 할 수 있습니다. 하지만 바로 그 과정이 진로 탐색이 될 수 있습니다. 정해진 진로에 맞춰 답을 쓰는 것이 아니라, 여러 현대사 주제 속에서 내가 반응하는 문제를 찾아가는 방식입니다.</p><p>따라서 아직 진로가 잡혀 있지 않은 학생에게 이 과목은 ‘진로를 증명하는 과목’이라기보다 ‘진로를 찾아보는 과목’에 가깝습니다. 나는 의학, 공학, 경제, 정치, 미디어, 복지, 교육, 환경, 문화 중에서 어떤 현대 사회 문제에 더 오래 생각이 머무는 학생인가요?</p>"
  },
  {
    id: "faq6",
    question: "Q6. 역사 지식이 부족해도 수강할 수 있나요? 암기를 많이 해야 하나요?",
    answer: "<p>이 걱정은 정말 많이 할 수 있습니다. 과목 이름에 ‘역사’가 들어가면 학생들은 먼저 연도, 인물, 사건 이름을 많이 외워야 한다고 생각하기 쉽습니다. 하지만 「역사로 탐구하는 현대세계」는 역사 지식을 많이 가진 학생만을 위한 과목이 아닙니다.</p><p>이 과목은 교과서 내용을 처음부터 끝까지 암기하는 방식보다, 자신이 관심 있는 현대 사회의 주제를 고르고 그 주제의 역사적 배경을 탐구하는 활동이 중심이 됩니다. 예를 들어 의학에 관심 있는 학생은 감염병과 국제보건의 역사를, 공학에 관심 있는 학생은 냉전과 우주개발의 역사를, 미디어에 관심 있는 학생은 대중문화와 K-콘텐츠 세계화의 역사를 탐구할 수 있습니다.</p><p>물론 역사적 배경을 전혀 다루지 않는 것은 아닙니다. 제2차 세계대전, 냉전, 탈식민화, 산업화, 세계화 같은 큰 흐름은 수업 속에서 자연스럽게 만나게 됩니다. 다만 중요한 것은 ‘몇 년도에 무슨 일이 일어났는가’를 많이 외우는 것이 아니라, ‘그 사건이 왜 일어났고, 오늘날 어떤 문제와 연결되는가’를 이해하는 것입니다.</p><p>그래서 이 과목에서는 암기력보다 탐구 역량이 더 중요합니다. 내가 자신 있는 주제를 정하고, 관련 자료를 찾아보고, 역사적 배경을 정리한 뒤, 현재의 문제와 연결해 설명하는 능력이 핵심입니다. 역사 지식이 부족하더라도 질문을 만들고 자료를 읽으려는 태도가 있다면 충분히 따라갈 수 있습니다.</p><p>다만 아무 주제나 고른 뒤 인터넷 자료를 그대로 정리하는 방식으로는 좋은 탐구가 되기 어렵습니다. 내가 선택한 주제에 대해 ‘이 문제는 언제부터 중요해졌을까?’, ‘어떤 역사적 사건이 영향을 주었을까?’, ‘지금의 사회 문제와 어떻게 이어질까?’를 묻는 자세가 필요합니다. 나는 외우는 역사보다, 내가 관심 있는 주제의 뿌리를 찾아가는 역사에 더 흥미를 느끼나요?</p>"
  },
  {
    id: "faq7",
    question: "Q7. 수행평가는 어떤 방식으로 진행되나요?",
    answer: "<p>수행평가 방식은 학교별 평가계획에 따라 달라질 수 있습니다. 다만 「역사로 탐구하는 현대세계」의 수행평가는 단순히 교과서 내용을 외워서 확인하는 방식보다는, 자신이 관심 있는 주제나 진로와 관련된 현대사의 배경을 탐구하는 활동으로 진행될 가능성이 높습니다.</p><p>예를 들어 과학·공학 계열에 관심 있는 학생이라면 맨해튼 프로젝트와 핵분열 연구를 통해 과학기술 발전이 전쟁, 국가 경쟁, 윤리 문제와 어떻게 연결되는지 탐구할 수 있습니다. 화학에 관심 있는 학생이라면 나일론과 치클론B를 함께 살펴보며, 같은 화학 지식이 생활을 바꾸는 산업 기술이 되기도 하고 전쟁과 학살에 동원되는 위험한 기술이 되기도 한다는 점을 탐구할 수 있습니다.</p><p>이처럼 수행평가는 ‘역사 사건 하나를 조사해 오기’에서 끝나는 활동이 아닙니다. 중요한 것은 내가 선택한 주제가 어떤 역사적 배경에서 등장했는지, 당시 사회에 어떤 영향을 주었는지, 오늘날 내 진로 분야와 어떤 질문으로 이어지는지를 설명하는 것입니다. 의학·보건, 인공지능, 경제·경영, 정치외교, 미디어, 교육, 사회복지 등 다양한 진로와 연결해 탐구 주제를 만들 수 있습니다.</p><p>또한 진로와 연계한 역사책 독서 탐구가 진행될 수 있습니다. 예를 들어 전쟁과 과학기술, 감염병과 국제보건, 세계화와 경제 질서, 대중문화와 냉전, 인권과 민주주의 같은 주제를 다룬 책을 읽고, 단순 독후감이 아니라 책의 핵심 문제의식과 현대사의 흐름을 연결해 정리하는 방식입니다.</p><p>수행평가에서 중요한 것은 완벽한 정답을 찾는 것이 아니라, 좋은 질문을 세우고 자료를 근거로 자신의 해석을 만들어 가는 과정입니다. 나는 내가 관심 있는 진로 분야를 역사 속에서 한 번 깊게 파고들어 볼 준비가 되어 있나요?</p>"
  },
  {
    id: "faq8",
    question: "Q8. 성적은 어떻게 산출되나요? 융합 선택 과목은 일반 선택 과목과 다르게 산출된다고 들었습니다.",
    answer: "<p>성적 산출 방식은 선택과목을 고를 때 꼭 확인해야 할 부분입니다. 특히 ‘융합 선택 과목’이라는 말이 낯설기 때문에, 일반 선택 과목처럼 등급 경쟁을 하는지 걱정하는 학생도 많을 수 있습니다.</p><p>「역사로 탐구하는 현대세계」는 사회 교과군 융합 선택 과목으로, 성취도 평가가 이루어지는 과목입니다. 쉽게 말하면 일반 선택 과목처럼 1등급부터 9등급까지 석차등급이 기재되는 방식이 아니라, 학습 목표에 어느 정도 도달했는지를 A·B·C·D·E의 성취도로 나타내는 방식입니다.</p><p>따라서 이 과목은 ‘내가 몇 등인가’보다 ‘내가 어느 수준의 성취에 도달했는가’가 더 중요하게 드러납니다. 학기말에는 원점수, 과목평균, 성취도, 성취도별 분포비율, 수강자수 등이 기재될 수 있으며, 석차등급은 기재되지 않습니다. 그래서 등급 경쟁에 대한 부담은 일반 선택 과목보다 상대적으로 적은 편입니다.</p><p>다만 성적 부담이 전혀 없다는 뜻은 아닙니다. 지필평가, 수행평가, 보고서, 발표, 독서 탐구, 자료 분석 활동의 반영 여부와 비율은 학교별 평가계획과 학업성적관리규정에 따라 달라질 수 있습니다. 따라서 실제 평가 방식은 반드시 해당 학교의 평가계획을 확인하는 것이 좋습니다.</p><p>정리하면, 「역사로 탐구하는 현대세계」는 치열한 석차 경쟁보다 자신의 탐구 과정과 성취 수준을 보여 주기 좋은 과목에 가깝습니다. 나는 등급 경쟁의 부담을 줄이면서도, 현대 사회와 진로를 연결한 탐구 역량을 보여 주고 싶은 학생인가요?</p>"
  },
  {
    id: "faq9",
    question: "Q9. 현대사를 배우는 과목인가요, 시사를 배우는 과목인가요?",
    answer: "<p>과목 이름에 ‘현대세계’가 들어가다 보니 뉴스를 공부하는 과목인지, 현대사를 배우는 과목인지 헷갈릴 수 있습니다. 「역사로 탐구하는 현대세계」는 단순한 시사 상식 과목도 아니고, 현대사 사건을 순서대로 외우는 과목만도 아닙니다.</p><p>이 과목은 현대사를 바탕으로 오늘날의 세계를 이해하는 과목에 가깝습니다. 예를 들어 지금의 국제 갈등, 난민 문제, 에너지 위기, 인권 문제, 기후위기, 세계화, 대중문화, AI와 감시 기술 같은 주제는 모두 현재의 문제처럼 보입니다. 하지만 그 배경에는 제2차 세계대전 이후의 국제 질서, 냉전, 탈식민화, 산업화, 자원 경쟁, 과학기술 발전, 인권 의식의 변화가 놓여 있습니다.</p><p>따라서 수업에서 시사적인 주제가 등장할 수는 있습니다. 다만 뉴스를 보고 자신의 느낌을 말하는 수준에서 끝나지는 않습니다. 중요한 것은 ‘요즘 이런 일이 있다’가 아니라, ‘이 문제가 왜 생겼고, 어떤 역사적 흐름 속에서 이해해야 하며, 오늘날 어떤 의미를 갖는가’를 따져 보는 것입니다.</p><p>예를 들어 중동 분쟁을 다룬다면 최근 뉴스만 보는 것이 아니라 제국주의, 제1차 세계대전 이후의 국제 질서, 냉전, 석유 자원, 종교와 민족 문제까지 함께 살펴볼 수 있습니다. AI와 감시 기술을 다룬다면 단순히 최신 기술을 소개하는 것이 아니라 전쟁, 암호 해독, 컴퓨터 발전, 냉전기 정보 경쟁, 개인정보와 인권 문제까지 연결해 볼 수 있습니다.</p><p>정리하면, 이 과목은 ‘현재를 이해하기 위해 현대사를 탐구하는 과목’입니다. 나는 뉴스를 단순히 소비하는 데서 그치지 않고, 그 뉴스 뒤에 있는 역사적 배경까지 알고 싶은 학생인가요?</p>"
  },
  {
    id: "faq10",
    question: "Q12. 이 과목이 의학·공학·인공지능 같은 진로와도 연결되나요?",
    answer: "<p>충분히 연결됩니다. 다만 이 과목이 의학 지식, 공학 공식, 프로그래밍 능력을 직접 가르치는 과목은 아닙니다. 「역사로 탐구하는 현대세계」는 의학·공학·인공지능 같은 분야가 어떤 역사적 배경 속에서 발전했고, 그 기술이 사회에 어떤 영향을 남겼는지를 탐구하는 과목에 가깝습니다.</p><p>예를 들어 의학·보건 분야에서는 전쟁 이후 감염병 관리, 국제보건기구의 역할, 백신 보급, 난민과 공중보건, 전쟁과 의료 윤리, 생명권 문제를 탐구할 수 있습니다. 질병은 단순히 병원 안의 문제가 아니라 전쟁, 빈곤, 국제 이동, 국가의 보건 정책, 인권 문제와 연결되어 왔습니다.</p><p>공학 분야에서는 냉전과 우주개발, 군사기술의 민간 전환, GPS, 원자력, 에너지 기술, 도시 인프라, 산업화와 환경오염 문제를 다룰 수 있습니다. 맨해튼 프로젝트와 핵분열 연구처럼 과학기술이 인류의 지식을 확장하는 동시에 전쟁과 윤리 문제를 낳은 사례도 탐구할 수 있습니다.</p><p>인공지능·컴퓨터 분야도 현대사와 깊이 연결됩니다. 암호 해독, 계산기술, 컴퓨터 네트워크, 인터넷, 데이터 처리, 국가 간 기술 경쟁, 감시 기술과 개인정보 문제는 모두 현대 세계의 역사 속에서 등장한 주제입니다. 따라서 이 과목은 ‘기술을 잘 다루는 사람’에서 한 걸음 더 나아가, ‘기술이 왜 등장했고 사회를 어떻게 바꾸었는지 설명할 수 있는 사람’으로 자신을 보여 주는 데 도움이 될 수 있습니다.</p><p>정리하면, 이 과목은 이공계 진로를 직접 대체하는 과목이 아니라 이공계 진로의 사회적·역사적 맥락을 넓혀 주는 과목입니다. 나는 내가 관심 있는 기술이나 의학이 세상과 어떤 관계를 맺어 왔는지 설명해 보고 싶은 학생인가요?</p>"
  },
  {
    id: "faq11",
    question: "Q13. 경제·경영·국제정치 분야에 관심 있는 학생에게는 어떤 의미가 있나요?",
    answer: "<p>경제·경영·국제정치에 관심 있는 학생에게 이 과목은 연결 지점이 매우 많은 편입니다. 현대 세계의 경제 질서와 국제정치는 갑자기 만들어진 것이 아니라, 전쟁, 냉전, 탈식민화, 산업화, 세계화, 자원 경쟁, 국제기구의 형성 속에서 변화해 왔기 때문입니다.</p><p>경제·경영 분야에서는 석유파동, 세계화, 금융위기, 다국적 기업, 무역 갈등, 노동 문제, 산업 구조 변화를 탐구할 수 있습니다. 예를 들어 석유파동은 단순한 기름값 상승 사건이 아니라 중동 정세, 자원 무기화, 물가 상승, 산업 구조 변화, 에너지 정책의 전환과 연결됩니다. 세계화 역시 무역 확대라는 장점만이 아니라 생산기지 이전, 노동 조건, 소비문화, 국가 간 불평등이라는 문제를 함께 남겼습니다.</p><p>국제정치 분야에서는 냉전, 탈식민화, 중동 분쟁, 국제기구, 난민, 인권, 전쟁과 평화 구축 문제를 다룰 수 있습니다. 국제사회가 왜 어떤 분쟁에는 개입하고 어떤 문제에는 소극적인지, 인권과 주권은 어디에서 충돌하는지, 강대국의 이해관계가 국제 질서에 어떤 영향을 주는지 역사적 사례를 통해 생각해 볼 수 있습니다.</p><p>이 과목의 장점은 경제와 국제정치를 숫자나 뉴스만으로 보지 않게 해 준다는 점입니다. 환율, 유가, 무역 갈등, 난민, 전쟁, 국제기구 같은 주제 뒤에는 항상 역사적 배경과 권력 관계가 있습니다. 그 맥락을 이해하면 단순히 ‘현재 무슨 일이 일어났는가’가 아니라 ‘왜 이런 구조가 반복되는가’를 설명할 수 있습니다.</p><p>다만 경제 이론이나 국제정치 이론을 깊게 배우는 과목은 아닙니다. 대신 현실의 경제·정치 문제를 역사적 흐름 속에서 해석하는 힘을 기르는 데 강점이 있습니다. 나는 뉴스 속 경제·국제 문제를 그날의 사건이 아니라 긴 역사적 흐름 속에서 이해해 보고 싶은 학생인가요?</p>"
  },
  {
    id: "faq12",
    question: "Q14. 문화콘텐츠·미디어·예술 쪽 진로와도 연결할 수 있나요?",
    answer: "<p>충분히 연결할 수 있습니다. 문화콘텐츠, 미디어, 예술은 겉으로 보기에는 역사 과목과 거리가 있어 보일 수 있지만, 사실 현대 대중문화는 전쟁 이후 세계 질서, 미디어 기술, 소비사회, 청소년 문화, 세계화의 흐름 속에서 발전해 왔습니다.</p><p>예를 들어 제2차 세계대전 이후 텔레비전, 라디오, 영화, 음반 산업이 확산되면서 대중문화는 전 세계적으로 빠르게 퍼졌습니다. 냉전 시기에는 영화, 음악, 포스터, 방송이 단순한 오락을 넘어 이념 경쟁과 선전의 도구로 활용되기도 했습니다. 미디어는 현실을 보여 주는 창이면서 동시에 현실을 해석하고 설득하는 힘을 가진 도구였습니다.</p><p>문화콘텐츠 분야에서는 청소년 문화, 소비사회, 팝 음악, 영화 산업, 애니메이션, 게임, K-콘텐츠의 세계화를 탐구할 수 있습니다. K-콘텐츠도 갑자기 인기를 얻은 현상으로만 보기보다, 산업화, 민주화, 미디어 기술 발전, 인터넷 플랫폼, 세계화, 국가 이미지 전략과 연결해 살펴볼 수 있습니다.</p><p>예술 진로와도 연결됩니다. 전쟁 문학, 탈식민 문학, 독재와 저항 예술, 포스터와 선전 미술, 대중음악과 사회운동, 사진과 전쟁 보도처럼 예술은 시대의 상처와 욕망을 기록해 왔습니다. 이 과목에서는 작품을 단순히 감상하는 데서 그치지 않고, 그 작품이 어떤 역사적 상황에서 나왔고 사람들에게 어떤 메시지를 전달했는지 탐구할 수 있습니다.</p><p>다만 이 과목은 실기나 창작 기술을 직접 배우는 과목은 아닙니다. 대신 콘텐츠와 미디어가 사회를 어떻게 반영하고, 때로는 사회를 어떻게 움직였는지 이해하는 데 도움이 됩니다. 나는 내가 좋아하는 콘텐츠가 어떤 시대적 배경과 세계사의 흐름 속에서 만들어졌는지 탐구해 보고 싶은 학생인가요?</p>"
  },
  {
    id: "faq15",
    question: "Q15. 다른 사회 과목이나 과학 과목 대신 선택해도 괜찮을까요?",
    answer: "<p>이 질문은 과목 선택에서 매우 현실적인 고민입니다. 시간표와 선택과목 수는 제한되어 있기 때문에, 「역사로 탐구하는 현대세계」를 선택한다는 것은 다른 사회 과목이나 과학 과목 중 하나를 선택하지 않는다는 뜻이 될 수 있습니다. 그래서 단순히 ‘재미있어 보인다’만으로 결정하기보다는 자신의 진로, 학습 성향, 학교의 과목 개설 상황을 함께 고려하는 것이 좋습니다.</p><p>먼저 사회 과목과 비교해 보면, 이 과목은 특정 사회 개념을 체계적으로 배우는 과목이라기보다 현대 사회의 여러 문제를 역사적 배경 속에서 연결해 보는 과목에 가깝습니다. 예를 들어 국제정치, 경제 위기, 인권, 환경, 세계화, 대중문화 같은 주제를 다룰 수 있지만, 정치와 법, 경제, 사회·문화처럼 한 분야의 개념을 집중적으로 배우는 방식과는 다릅니다. 따라서 특정 사회 과목의 개념 학습이 꼭 필요한 학생이라면 그 과목을 우선 고려하는 것이 좋습니다.</p><p>과학 과목과 비교해도 마찬가지입니다. 「역사로 탐구하는 현대세계」에서는 맨해튼 프로젝트, 원자력, 우주개발, 감염병, 인공지능, 환경 문제처럼 과학기술과 연결된 주제를 다룰 수 있습니다. 하지만 물리, 화학, 생명과학, 지구과학처럼 과학 개념과 문제 해결력을 직접 깊게 배우는 과목은 아닙니다. 이공계 진학을 준비하는 학생이라면 필요한 과학 과목을 충분히 확보한 뒤, 자신의 과학기술 관심사를 사회적·역사적 맥락으로 확장하고 싶을 때 이 과목을 선택하는 것이 더 적절합니다.</p><p>이 과목의 강점은 여러 분야를 연결하는 데 있습니다. 예를 들어 핵분열은 과학 개념이지만 맨해튼 프로젝트를 통해 전쟁, 국가 경쟁, 윤리 문제와 연결됩니다. 나일론은 화학과 산업 기술의 성과이지만, 같은 시대의 화학 기술은 치클론B처럼 전쟁범죄와 학살의 도구로도 사용되었습니다. 이 과목은 이렇게 기술, 사회, 정치, 윤리, 문화를 한꺼번에 묶어 ‘지금의 세계가 왜 이렇게 되었는가’를 묻는 과목입니다.</p><p>정리하면, 다른 사회 과목이나 과학 과목을 완전히 대체하는 과목이라기보다는, 그 과목들에서 배운 내용을 현대사의 맥락 속에서 확장해 주는 과목에 가깝습니다. 나는 특정 개념을 깊게 파고드는 과목이 필요한가요, 아니면 여러 분야를 연결해 현대세계를 해석하는 과목이 필요한가요?</p>"
  },
  {
    id: "faq16",
    question: "Q16. 어떤 학생에게 적합한 과목일까요?",
    answer: "<p>「역사로 탐구하는 현대세계」는 모든 학생에게 무조건 맞는 과목이라고 말하기는 어렵습니다. 하지만 특정한 성향의 학생에게는 꽤 강한 장점을 가진 과목입니다. 특히 단순히 사건을 외우는 역사보다, 지금의 사회 문제와 자신의 관심 분야를 연결해 보고 싶은 학생에게 잘 맞습니다.</p><p>이 과목은 ‘왜 지금 세계는 이렇게 움직일까?’라는 질문을 자주 하는 학생에게 적합합니다. 전쟁과 난민, 기후위기, 감염병, 인공지능, 감시 기술, 국제 갈등, 세계화, K-콘텐츠, 대중문화 같은 주제에 관심이 있다면 수업에서 다룰 수 있는 탐구의 폭이 넓습니다. 진로가 의학·보건, 공학, 인공지능, 경제·경영, 정치외교, 미디어, 문화콘텐츠, 사회복지, 교육, 인문학 어느 쪽이든 연결 지점을 찾을 수 있습니다.</p><p>또한 자신의 진로가 아직 뚜렷하지 않은 학생에게도 의미가 있을 수 있습니다. 이 과목은 하나의 정해진 진로로 몰아가는 과목이 아니라, 다양한 현대사 주제를 접하면서 내가 어떤 문제에 관심을 보이는지 확인할 수 있는 과목입니다. 어떤 학생은 감염병과 국제보건을 보며 보건 분야에 관심을 가질 수 있고, 어떤 학생은 냉전과 우주개발을 보며 과학기술 정책이나 공학에 흥미를 느낄 수 있습니다.</p><p>반대로 부담을 느낄 수 있는 학생도 있습니다. 정답이 명확한 문제를 빠르게 풀고 암기하는 방식만 선호하는 학생, 자료를 읽고 자신의 생각을 정리하는 활동이 매우 부담스러운 학생, 발표나 보고서 활동을 최대한 피하고 싶은 학생에게는 다소 낯설 수 있습니다. 이 과목은 암기량이 많은 과목은 아니지만, 질문을 만들고 자료를 해석하고 자신의 관점을 정리하는 과정은 필요합니다.</p><p>정리하면, 이 과목은 역사 지식이 많은 학생보다 ‘현대 사회를 역사적으로 이해해 보고 싶은 학생’에게 더 적합합니다. 내가 좋아하는 분야의 뿌리를 찾아보고, 지금의 세계를 조금 더 깊게 읽어 보고 싶다면 충분히 선택할 만한 과목입니다. 나는 단순히 답을 외우는 것보다, 내가 관심 있는 문제의 배경을 파고드는 데 흥미가 있나요?</p>"
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
  faqButton.textContent = "FAQ 열기";

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