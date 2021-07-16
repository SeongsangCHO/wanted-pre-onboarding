const leftMenuItems = [
  {
    id: 1,
    title: "탐색",
    kind: "explore",
    xsView: true,
  },
  {
    id: 2,
    title: "커리어 성장",
    kind: "career",
    xsView: true,
  },
  {
    id: 3,
    title: "직군별 연봉",
    kind: "salary",
    xsView: false,
  },
  {
    id: 4,
    title: "이력서",
    kind: "essay",
    xsView: false,
  },
  {
    id: 5,
    title: "매치업",
    kind: "matchUp",
    xsView: false,
  },
  {
    id: 6,
    title: "프리랜서",
    kind: "free",
    xsView: false,
  },
  {
    id: 7,
    title: "Ai 합격예측",
    kind: "aiExpect",
    xsView: false,
  },
];
const exploreItems = [
  {
    id: "1a",
    title: "영업",
    duties: [
      "기업영업",
      "외부영업",
      "영업 관리자",
      "기술영업",
      "주요고객사 담당자",
      "솔루션 컨설턴트",
      "해외영업",
    ],
  },
  {
    id: "2a",
    title: "미디어",
    duties: [
      "콘텐츠 크리에이터",
      "PD",
      "영상 편집가",
      "에디터",
      "비디오 제작",
      "작가",
      "출판 기획자",
    ],
  },
  {
    id: "3a",
    title: "인사",
    duties: [
      "인사담당",
      "리크루터",
      "조직문화",
      "평가·보상",
      "헤드헌터",
      "HRBP",
      "HRD",
    ],
  },
  {
    id: "4a",
    title: "게임 제작",
    duties: [
      "게임 기획자",
      "게임 그래픽 디자이너",
      "모바일 게임 개발자",
      "게임 아티스트",
      "게임 클라이언트 개발자",
      "게임 서버 개발자",
      "유니티 개발자",
    ],
  },
  {
    id: "5a",
    title: "엔지니어링·설계",
    duties: [
      "전자 엔지니어",
      "기계 엔지니어",
      "전기 엔지니어",
      "전기기계 공학자",
      "로봇·자동화",
      "QA 엔지니어",
      "제품 엔지니어",
    ],
  },
];

const exploreTitleItems = [
  "엔지니어링 설계",
  "물류·무역",
  "제조·생산",
  "의료·제약·바이오",
  "교육",
  "법률·법집행기관",
  "식·음료",
  "건설·시설",
  "공공·복지",
];
export { exploreItems, exploreTitleItems, leftMenuItems };
