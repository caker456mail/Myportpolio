import { useMemo } from "react";
import { AgCharts } from "ag-charts-react";
import type { AgChartOptions } from "ag-charts-community";
import { ModuleRegistry, AllCommunityModule } from "ag-charts-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      color: "#aa3bff",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS"],
    },
    {
      category: "Backend",
      color: "#c084fc",
      skills: ["FastAPI", "Spring Boot", "Java", "PostgreDB", "RESTful API"],
    },
    {
      category: "Tools",
      color: "#34d399",
      skills: ["Git", "Unity", "PyPDF2", "Gemma 3", "Ollama", "AG Grid"],
    },
  ];

  const chartData = useMemo(
    () =>
      skillCategories.map((item) => ({
        domain: item.category,
        count: item.skills.length,
      })),
    []
  );

  const chartOptions = useMemo<AgChartOptions>(
    () => ({
      theme: "ag-default-dark",
      background: { fill: "transparent" },
      data: chartData,
      
      title: {
        text: "보유 기술 도메인 분포",
        color: "#f8fafc",
        fontSize: 16,
        fontWeight: "bold",
      },
      legend: {
        enabled: true,
        position: "bottom",
        item: {
          label: {
            color: "#94a3b8",
            fontSize: 12,
          },
        },
      },
      series: [
        {
          type: "donut",
          angleKey: "count",
          legendItemKey: "domain",
          sectorLabelKey: "count",
          sectorLabel: {
            color: "#ffffff",
            fontWeight: "bold",
          },
          innerRadiusRatio: 0.65,
          fills: ["#aa3bff", "#818cf8", "#34d399"],
          strokes: ["#0f172a"],
          strokeWidth: 2,
          highlight: {
           highlightedItem: { fill: "#d946ef" },
          },
        },
      ],
    }),
    [chartData]
  );

  return (
    <section
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        textAlign: "left",
        padding: "0 20px 60px 20px",
      }}
    >
      {/* 1. 상단 타이틀 배너 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "24px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#c084fc",
            backgroundColor: "rgba(168, 85, 247, 0.12)",
            border: "1px solid rgba(168, 85, 247, 0.28)",
            padding: "4px 12px",
            borderRadius: "9999px",
            marginBottom: "12px",
          }}
        >
          Tech Stack & Capabilities
        </span>
        <h2
          style={{
            margin: "0 0 8px 0",
            fontSize: "24px",
            fontWeight: 800,
            color: "#f8fafc",
          }}
        >
          기술 및 도구
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#94a3b8",
            lineHeight: 1.6,
          }}
        >
          프론트엔드와 백엔드 개발부터 최신 오픈소스 AI 모델 활용 및 데이터 파이프라인 연계까지, 실제 서비스 구축과 문제 해결에 활용한 기술 스택입니다.
        </p>
      </div>

      {/* 2. 대시보드 2열 레이아웃 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {/* 좌측: 도넛 차트 위젯 카드 */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "24px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "380px",
          }}
        >
          <div style={{ width: "100%", height: "340px" }}>
            <AgCharts options={chartOptions} />
          </div>
        </div>

        {/* 우측: 도메인별 스택 카드 묶음 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            justifyContent: "space-between",
          }}
        >
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "20px 24px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* 카테고리 헤더 라인 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: group.color,
                    }}
                  />
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#f8fafc",
                    }}
                  >
                    {group.category}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#94a3b8",
                  }}
                >
                  {group.skills.length} skills
                </span>
              </div>

              {/* 뱃지 태그 리스트 */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "4px 9px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(170, 59, 255, 0.12)",
                      border: "1px solid rgba(170, 59, 255, 0.25)",
                      color: "#d8b4fe",
                      lineHeight: 1.4,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;