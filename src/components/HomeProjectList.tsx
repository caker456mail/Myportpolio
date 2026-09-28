import type { Projectinterface } from "../feature/Project/ProjectInfo";

export const HomeProjectList = ({ items }: { items: Projectinterface[] }) => {
    return (
        <div
            style={{
                display: "grid",
                // 모바일 대응: 최소 너비를 100% 또는 300px 수준으로 유연하게 설정
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: "16px",
            }}
        >
            {items.map((proj, idx) => (
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

                        <span style={{ fontSize: "12px", color: "#cbd5e1" }}>{proj.agency ? proj.agency : proj.period}</span>
                        <span style={{ fontSize: "12px", color: "#cbd5e1" }}>{proj.date}</span>

                    </div>
                    <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8", lineHeight: 1.5 }}>
                        {proj.summary}
                    </p>

                    {/* 고정 5열 대신 flex-wrap 적용 */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px"}}>
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
            ))}

        </div>
    );
};