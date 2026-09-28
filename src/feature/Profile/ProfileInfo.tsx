// 1. 상세 하위 인터페이스 정의
export interface CareerItem {
  company: string;
  department: string;
  position: string;
  period: string;
  duration: string;
  description: string[];
  role: string;
}

export interface EducationItem {
  schoolName: string;
  major: string;
  period: string;
  status: string;
  gpa?: string;
}

export interface TrainingItem {
  courseName: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
}

export interface AwardItem {
  title: string;
  institution: string;
  year: string;
  description: string;
}

export interface SelfIntroductionItem {
  title: string;
  content: string;
}

// 2. 전체 ProfileInfo 인터페이스
export interface ProfileInfointerface {
  myPhotoUrl: string;
  name: string;
  gender: string;
  role: string;
  birthday: string;
  military: string;
  email: string;
  phone: string;
  location: string;
  info: string;
  tech: string[];
  careers: CareerItem[];
  educations: EducationItem[];
  trainings: TrainingItem[];
  certificates: CertificateItem[];
  awards: AwardItem[];
  selfIntroductions: SelfIntroductionItem[];
}

// 3. 실제 데이터 객체
export const ProfileInfo: ProfileInfointerface = {
  myPhotoUrl: "/images/MyFace.png",
  name: "김근우",
  gender: "남",
  role: "Frontend & Web Developer",
  birthday: "1998년 (만 28세)",
  military: "[군필] 육군 병장 제대",  //(2018.02 ~ 2019.10)
  email: "caker456mail@gmail.com",
  phone: "010-7538-7357",
  location: "경기 화성시 새솔동",
  info: `성실함으로 늘 발전하는 프론트엔드 개발자입니다. 초등학생 때부터 프로그래밍에 흥미를 느껴 마인크래프트 모드 개발로 코딩을 접했으며, 사용자 경험을 중심에 둔 직관적이고 완성도 높은 웹 서비스를 만들기 위해 끊임없이 역량을 확장하고 있습니다.`,

  tech: [
    "TypeScript",
    "React",
    "Vue.js",
    "HTML5",
    "CSS",
    "JavaScript",
    "PostgreSQL",
    "Restful API",
    "FastAPI",
    "Spring Boot",
    "Java",
    "Git",
  ],

  careers: [
    {
      company: "소울인포테크",
      department: "모빌리티ICT개발팀",
      position: "사원 팀원",
      period: "2026. 04 ~ 2026. 07",
      duration: "4개월",
      role: "프론트엔드개발자",
      description: [
        "React와 TypeScript를 활용해 RESTful API 통신(GET/POST) 및 JSON 데이터를 화면에 보여주는 프론트엔드 실무 담당",
        "컴포넌트와 커스텀 훅의 역할을 분리하는 아키텍처 설계 감각 습득",
        "AI를 참고하여 PostgreSQL DB 구조를 파악하고 데이터 전처리 과정 수행",
      ],
    },
  ],

  educations: [
    {
      schoolName: "원광대학교",
      major: "컴퓨터소프트웨어공학",
      period: "2017. 03 ~ 2022. 02",
      status: "졸업 (4년)",
      gpa: "3.8 / 4.5",
    },
    {
      schoolName: "양지고등학교",
      major: "인문계",
      period: "2014. 03 ~ 2017. 02",
      status: "졸업",
    },
  ],

  trainings: [
    {
      courseName:
        "심화_AI학습모델(Ollama, Gemma)과 생성형AI을 활용한 문서인식분류",
      institution: "글로벌아카데미 (구. 글로벌직업전문학교)",
      period: "2025. 09 ~ 2025. 11",
      description:
        "React와 FastAPI를 연동하며 전체적인 풀스택 웹 서비스 구조를 이해하고, PostgreSQL DB 연동 및 Gemma 3, PaddleOCR 기반 AI 파인튜닝 실무 기술 습득.",
    },
    {
      courseName: "자바, 파이썬 인공지능 응용SW 개발자 양성",
      institution: "티아이에스정보기술교육센터학원",
      period: "2022. 10 ~ 2023. 02",
      description:
        "Java Spring Boot 및 Python을 응용하여 백엔드/프론트엔드 연동 웹페이지 개발 수행.",
    },
  ],

  certificates: [
    {
      name: "COS 1급 (스크레치)",
      issuer: "YBM",
      date: "2016. 06",
    },
  ],

  awards: [
    {
      title: "Start-App 캠프&경진대회 은상",
      institution: "원광대학교 프라임사업단",
      year: "2021년",
      description:
        "개인 자격요건 매칭 및 맞춤형 국가 제도 안내 앱 프로젝트 개발",
    },
    {
      title: "정보과학경진대회(모바일 앱) 우수상",
      institution: "양지고등학교",
      year: "2016년",
      description: "모바일 앱 개발 러닝 액션 게임 제작 수상",
    },
  ],

  selfIntroductions: [
    {
      title: "1. 프로그래밍에 대한 흥미와 성장 과정",
      content:
        "초등학생 때 마인크래프트 모드 개발을 통해 처음 Java를 접했고, 이클립스 환경에서 플러그인과 모드를 직접 제작하면서 소프트웨어 개발의 재미와 성취감을 느꼈습니다. 대학교 진학 후에는 다양한 프로젝트와 교내 대회에 참가하며 개발 역량을 체계적으로 쌓았습니다. 웹·애플리케이션 개발에 필요한 여러 개발 도구와 기술 스택을 접하며 새로운 기술을 빠르게 습득하고 실무에 적용하는 유연성을 길렀습니다.",
    },
    {
      title: "2. 직무 역량 및 아키텍처에 대한 고민",
      content:
        "실무에서 React와 TypeScript 기반으로 RESTful API 통신과 UI 연동을 담당하며, 컴포넌트와 커스텀 훅의 역할을 명확히 분리하는 아키텍처의 중요성을 경험했습니다. 또한 FastAPI, Spring Boot 등 백엔드 기술과 PostgreSQL DB 연동, 생성형 AI(Gemma 3) 파인튜닝 과정을 학습하며 프론트엔드에 국한되지 않고 전체 서비스의 흐름을 이해하는 개발자로 성장해 왔습니다.",
    },
    {
      title: "3. 개발자로서의 지향점 및 목표",
      content:
        "개발자로서 가장 중요하게 생각하는 목표는 '사용자가 편리하게 사용할 수 있는 웹 서비스'를 만드는 것입니다. 웹 서비스를 이용하며 느꼈던 UI/UX적 아쉬움들을 직접 개선하는 개발자가 되고자 하며, 사용자 경험을 중심에 둔 직관적이고 완성도 높은 웹 서비스를 개발하기 위해 꾸준히 역량을 확장해 나가겠습니다.",
    },
  ],

};