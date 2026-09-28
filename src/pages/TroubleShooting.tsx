import { Trouble } from "../feature/Trouble/Trouble";



const TroubleShooting = () => {
  return (
    <section style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "left", padding: "0 20px 60px 20px" }}>
      {/* 1. 상단 타이틀 배너 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "32px",
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
          Problem Solving
        </span>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: 800, color: "#f8fafc" }}>
          트러블슈팅 및 기술적 고민
        </h2>
        <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
          프로젝트 개발 및 실무 과정에서 직면했던 기술적 문제들과, 이를 논리적으로 분석하고 해결해 나간 기록입니다.
        </p>
      </div>

      {/* 2. 트러블슈팅 카드 목록 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {Trouble.map((item) => (
          <article
            key={item.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {/* 카드 상단: 프로젝트 태그 & 제목 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#cbd5e1",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {item.project}
                </span>
                {/* 기술 태그 */}
                <div style={{ display: "flex", gap: "6px" }}>
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "2px 7px",
                        borderRadius: "4px",
                        backgroundColor: "rgba(170, 59, 255, 0.12)",
                        border: "1px solid rgba(170, 59, 255, 0.25)",
                        color: "#d8b4fe",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#f8fafc",
                  borderLeft: "3px solid #aa3bff",
                  paddingLeft: "10px",
                }}
              >
                {item.title}
              </h3>
            </div>

            {/* 4단계 구조화 분석 그리드 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
                gap: "12px",
              }}
            >
              {/* 1. Problem */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "10px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#f87171" }}>
                  ● Problem (문제 현상)
                </span>
                <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                  {item.problem}
                </p>
              </div>

              {/* 2. Cause */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                  borderRadius: "10px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#fbbf24" }}>
                  ● Cause (원인 분석)
                </span>
                <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                  {item.cause}
                </p>
              </div>

              {/* 3. Solution */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  borderRadius: "10px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#c084fc" }}>
                  ● Solution (해결 방안)
                </span>
                <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                  {item.solution}
                </p>
              </div>

              {/* 4. Result */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(52, 211, 153, 0.2)",
                  borderRadius: "10px",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#34d399" }}>
                  ● Result & Learned (결과 및 배운 점)
                </span>
                <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5 }}>
                  {item.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TroubleShooting;