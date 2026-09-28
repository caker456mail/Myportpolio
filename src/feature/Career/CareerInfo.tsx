export interface CareerInterface {
  id: string;
  projectName: string;
  agency: string;
  date: string;
  summary: string;
  tech: string[];
}

export const CareerInfo: CareerInterface[] = [
  {
    id: "training-1",
    projectName: "심화_AI학습모델(Ollama, Gemma)과 생성형AI을 활용한 문서인식분류",
    agency: "글로벌아카데미 (구. 글로벌직업전문학교)",
    date: "2025. 09 ~ 2025. 11",
    summary:
      "프론트엔드(React)와 백엔드(FastAPI)를 연계하며 전체적인 웹 서비스의 요청·응답 흐름을 체계적으로 이해했습니다. PostgreSQL을 활용한 데이터베이스 연동과 함께 Gemma 3, PaddleOCR 등 다양한 최신 AI 모델을 활용한 파인튜닝 실무 역량을 길렀습니다.",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemma 3", "Ollama", "PaddleOCR", "PyPDF2"],
  },
  {
    id: "training-2",
    projectName: "자바, 파이썬 인공지능 응용SW 개발자 양성 과정",
    agency: "티아이에스정보기술교육센터학원",
    date: "2022. 10 ~ 2023. 02",
    summary:
      "Java Spring Boot 프레임워크와 Python 언어를 응용하여 웹 서버를 구축하고 데이터 연동 웹 애플리케이션을 직접 개발해보는 실습 과정을 거쳤습니다. 백엔드 관점에서의 API 설계와 데이터 처리 기본기를 다졌습니다.",
    tech: ["Java", "Spring Boot", "Python", "RESTful API", "HTML/CSS"],
  },
];