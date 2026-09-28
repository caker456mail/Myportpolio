
import { CareerInfo } from "../feature/Career/CareerInfo";
import { Growth } from "../feature/Career/Growth";
// 분리되어 있다면: import { CareerInfo } from './careerData';

const Career = () => {
  return (
    <section style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "left", padding: "0 20px 60px 20px" }}>
      {/* 1. 상단 타이틀 배너 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "24px",
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
          Training & Growth
        </span>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: 800, color: "#f8fafc" }}>
          교육 이수 및 대외 활동
        </h2>
        <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
          체계적인 개발 교육과 프로젝트 중심의 실습을 통해 웹 프론트엔드부터 백엔드, AI 연동까지 서비스 전반의 기술 역량을 다져온 과정입니다.
        </p>
      </div>

      {/* 2. 전문 교육 이수 섹션 (동적 데이터 바인딩) */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 20px 0",
            fontSize: "17px",
            fontWeight: 700,
            color: "#f8fafc",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          전문 교육 이수 (Training Courses)
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {CareerInfo.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "6px",
                }}
              >
                <strong style={{ fontSize: "16px", color: "#ffffff" }}>
                  {item.projectName}
                </strong>
                <span style={{ fontSize: "13px", color: "#c084fc", fontWeight: 600 }}>
                  {item.date}
                </span>
              </div>

              <div style={{ fontSize: "13px", color: "#a855f7", marginBottom: "12px", fontWeight: 600 }}>
                {item.agency}
              </div>

              <p style={{ margin: "0 0 14px 0", fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6 }}>
                {item.summary}
              </p>

              {/* 활용 기술 태그 */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(170, 59, 255, 0.12)",
                      border: "1px solid rgba(170, 59, 255, 0.25)",
                      color: "#d8b4fe",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 수상 내역 및 프로젝트 경진대회 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 20px 0",
            fontSize: "17px",
            fontWeight: 700,
            color: "#f8fafc",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          경진대회 수상 (Awards)
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "16px" }}>
          {/* 대회 1: Start-App 캠프 */}
          {Growth.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "12px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: `${item.color}`, backgroundColor: "rgba(52, 211, 153, 0.12)", padding: "2px 8px", borderRadius: "4px" }}>
                  {item.prize}
                </span>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>2021년</span>
              </div>
              <strong style={{ fontSize: "15px", color: "#ffffff" }}>
                {item.title}
              </strong>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                {item.agency}
              </div>
              <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6 }}>
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;