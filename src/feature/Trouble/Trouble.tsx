interface troubleinterface {
    id: number,
    title: string,
    tags: string[],
    project: string,
    problem: string,
    cause: string,
    solution: string,
    result: string,
}
export const Trouble: troubleinterface[] = [
    {
        id: 1,
        project: "연락운임 프로젝트",
        title: "대량 JSON 데이터 렌더링 시 UI 프리징 및 리렌더링 병목",
        tags: ["React", "TypeScript", "Custom Hook", "Component"],
        problem:
            "실시간 API로 들어오는 대규모 JSON 데이터를 화면에 표출할 때, 부모 컴포넌트의 잦은 상태 변경으로 전체 UI가 버벅이고 인풋 딜레이가 발생함.",
        cause:
            "비즈니스 로직과 API 통신, 테이블 뷰 렌더링이 하나의 컴포넌트에 강하게 결합되어 있어 단일 상태 업데이트가 모든 하위 자식 노드의 불필요한 리렌더링을 유발함.",
        solution:
            "데이터 패칭 및 가공 로직을 커스텀 훅으로 완전히 격리하고, 화면 렌더링 단위로 컴포넌트를 잘게 쪼갠 후 `useMemo`와 메모이제이션 기법을 적용해 렌더링 트리를 최적화함.",
        result:
            "비즈니스 로직과 UI 컴포넌트의 역할 분리로 코드 가독성 및 유지보수성을 확보함.",
    },
    {
        id: 2,
        project: "생성형 AI PDF 분류 프로젝트",
        title: "LLM 서빙 환경의 GPU VRAM 부족 및 OOM 이슈 해결",
        tags: ["FastAPI", "Python", "PaddleOCR", "Gemma 3"],
        problem:
            "제한된 개발/서버 인프라 환경에서 Gemma 3 모델 구동 시 VRAM 용량 초과로 인한 OOM(Out Of Memory) 현상 발생 및 프로세스 중단",
        cause:
            "고정밀도 모델 가중치 로드 및 학습 파라미터 연산 중 VRAM 임계치를 초과하여 프로세스 크래시(Crash)가 발생하고 파인튜닝이 중단됨",
        solution:
            "양자화(4-bit/8-bit Quantization) 및 QLoRA 기법을 적용하여 메모리 풋프린트를 최적화하고 경량화된 학습·추론 환경 구축",
        result:
            "VRAM 점유율을 대폭 절감하여 동일 하드웨어 스펙 내에서 크래시 없이 안정적인 모델 파인튜닝 및 실시간 문서 분류 서빙 달성",
    },
    {
        id: 3,
        project: "생성형 AI PDF 분류 프로젝트",
        title: "인력 공백 발생에 따른 일정 지연 리스크 관리 ",
        tags:  ["React", "FastAPI", "Python", "UI/UX","JavaScript"],
        problem:
            "프론트엔드 및 산출물 담당 팀원의 이탈로 인해 개발 병목 현상 및 핵심 일정 지연 위기 발생",
        cause:
            "기존 담당자의 부재로 작업이 중단되었으며, 짧은 개발 기간 내 대체 인력 투입이 불가능한 구조적 한계",
        solution:
            "주기적인 회의 및 기능 우선순위를 재정의하여 잔여 작업을 팀원 역량에 맞춰 유연하게 재분배",
        result:
            "프론트엔드 핵심 UI/UX와 백엔드 연동을 정상 복구하여 프로젝트 완성을 달성",
    },
];