import { useMemo } from "react";

import { AgCharts } from "ag-charts-react";
import type { AgChartOptions } from "ag-charts-community";
import {ModuleRegistry,AllCommunityModule } from "ag-charts-community";
ModuleRegistry.registerModules([
    AllCommunityModule,
]);
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ProjectInfo } from "../feature/Project/ProjectInfo";
import { HomeCard } from "../components/HomeCard";
import { CareerInfo } from "../feature/Career/CareerInfo";
import { HomeProjectList } from "../components/HomeProjectList";
import { HomeTechList } from "../components/HomeTechList";
import { TechInfo } from "../feature/Tech/techinfo";



const Home = () => {
  // 3. AG Charts 옵션 메모이제이션 (0 -> 목표값 트랜지션)
 const barChartOptions = useMemo<AgChartOptions>(() => ({
    theme: "ag-default-dark",
    data: ProjectInfo,
    title: { text: "프로젝트별 완성도 및 프로덕션 달성률" },
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "projectName",
        yKey: "progress",
        yName: "진행률 (%)",
        fill: "#aa3bff",
        stroke: "#c084fc",
        highlight: {
          highlightedItem: {
            fill: "#c084fc",
            stroke: "#ffffff",
            strokeWidth: 2,
          },
        },
      },
    ],
  }), []);

  return (
    <div style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "left" }}>
      {/* 1. 상단 히어로 배너 */}
      <div className="banner">
        <span className="banner-tag">
          Frontend Developer
        </span>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: 800,
            margin: "0 0 12px 0",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          깊은 몰입과 로직 분리에 강점이 있는
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#cbd5e1",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: "680px",
          }}
        >
          React & TypeScript 환경에서{" "}
          <strong style={{ color: "#c084fc", fontWeight: 600 }}>
            컴포넌트와 커스텀 훅을 분리
          </strong>
          하여 읽기 좋은 코드를 고민합니다.
          <br />
          강한 몰입력과 꾸준한 학습으로 성장하는 신입 프론트엔드 개발자{" "}
          <strong style={{ color: "#ffffff", fontWeight: 700 }}>김근우</strong>의
          포트폴리오입니다.
        </p>
      </div>

      {/* 2. 핵심 이력 요약 바 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {/* 이력서/자기소개 요약 위젯 */}
        <HomeCard
          title="소개 / 프로필"
          info="AI(LLM)을 적극 활용하여 생산성을 극대화하며,
            복잡한 비즈니스 로직은 명확한 타입 시스템과 재사용 가능한 컴포넌트 아키텍처로 풀어냅니다.
            실무 환경에서의 데이터 정합성과 배포 자동화를 함께 고려합니다."
          to="/profile" />

        {/* 핵심 기술 스택 위젯 */}
        <HomeCard
          title="기술 / 도구"
          to="/skills">
          <HomeTechList skills={TechInfo} />
        </HomeCard>
      </div>
      {/* 경력부분 */}
      <HomeCard
        title="경력 / 교육"
        to="/career"
       >
        <HomeProjectList items={CareerInfo} />

      </HomeCard>
      {/* 3. 프로젝트 간략 요약 카드 4종 */}

      <HomeCard title="프로젝트" to="/projects" info="진행한 주요 프로젝트 목록입니다.">
        <HomeProjectList items={ProjectInfo} />
        <AgCharts options={barChartOptions} />
      </HomeCard>

      {/* 4. 프로젝트 진행률 AG Charts 시각화 위젯 */}
    </div>
  );
};

export default Home;