import type { Projectinterface } from "../feature/Project/ProjectInfo";
import type { CareerInterface } from "../feature/Career/CareerInfo";

// 두 데이터 타입을 모두 수용하는 유니온 타입 정의
type HomeListItem = Projectinterface | CareerInterface;

interface HomeProjectListProps {
  items: HomeListItem[];
}

export const HomeProjectList = ({ items }: HomeProjectListProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
        gap: "16px",
      }}
    >
      {items.map((proj, idx) => {
        // CareerInterface(agency)와 Projectinterface(agency / period) 둘 다 안전하게 출력
        const subInfo =
          "agency" in proj && proj.agency
            ? proj.agency
            : "period" in proj
            ? proj.period
            : "";

        return (
          <article
            key={proj.projectName || idx}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "12px",
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                {proj.projectName}
              </h4>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12px", color: "#cbd5e1" }}>
                {subInfo}
              </span>
              <span style={{ fontSize: "12px", color: "#cbd5e1" }}>
                {proj.date}
              </span>
            </div>

            <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8", lineHeight: 1.5 }}>
              {proj.summary}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {proj.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(170, 59, 255, 0.12)",
                    border: "1px solid rgba(170, 59, 255, 0.25)",
                    color: "#d8b4fe",
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
};