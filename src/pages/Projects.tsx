import { useState } from "react";
import { ProjectInfo, type Projectinterface } from "../feature/Project/ProjectInfo";
import { ProjectModal } from "../components/ProjectModal";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Projectinterface | null>(null);

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
          Project Timeline
        </span>
        <h2 style={{ margin: "0 0 8px 0", fontSize: "24px", fontWeight: 800, color: "#f8fafc" }}>
          프로젝트 (Projects)
        </h2>
        <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: 1.6 }}>
          초기부터 현재까지의 개발 경험과 기술적 성장을 시간 순으로 정리한 화면입니다. 카드를 클릭하면 상세 내용을 확인할 수 있습니다.
        </p>
      </div>

      {/* 2. 타임라인 리스트 */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {ProjectInfo.map((project, idx) => (
          <div
            key={idx}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: "24px",
              position: "relative",
            }}
          >
            {/* [왼쪽] 기간 + 세로선 & 노드 */}
            <div
              style={{
                position: "relative",
                borderRight: "2px solid rgba(170, 59, 255, 0.25)",
                paddingRight: "24px",
                paddingBottom: "48px",
                textAlign: "right",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-7px",
                  top: "6px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#aa3bff",
                  border: "2px solid #1e1b4b",
                  boxShadow: "0 0 10px rgba(170, 59, 255, 0.7)",
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#c084fc",
                  backgroundColor: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                {project.date}
              </span>
            </div>

            {/* [오른쪽] 프로젝트 내용 카드 (클릭 가능) */}
            <article
              onClick={() => setSelectedProject(project)}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                padding: "22px 24px",
                marginBottom: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                cursor: "pointer",
                transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(170, 59, 255, 0.4)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* 헤더 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
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
                  {project.projectName}
                </h3>

                {/* 링크 그룹 (이벤트 버블링 차단) */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#f8fafc",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src="https://unpkg.com/simple-icons@v10/icons/github.svg"
                        alt="GitHub"
                        style={{ width: "14px", height: "14px", filter: "invert(1)" }}
                      />
                      GitHub
                    </a>
                  )}

                  {project.pptUrl && (
                    <a
                      href={project.pptUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#fca5a5",
                        backgroundColor: "rgba(239, 68, 68, 0.12)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png"
                        alt="PPT"
                        style={{ width: "16px", height: "16px" }}
                      />
                      발표자료
                    </a>
                  )}
                </div>
              </div>

              {/* 요약 */}
              <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>
                {project.summary}
              </p>

              {/* 기술 칩 */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "2px" }}>
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(170, 59, 255, 0.12)",
                      border: "1px solid rgba(170, 59, 255, 0.25)",
                      color: "#d8b4fe",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* 팝업 모달 마운트 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;