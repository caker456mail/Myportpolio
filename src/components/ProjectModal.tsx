import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Projectinterface } from "../feature/Project/ProjectInfo";

// deployUrl 확장을 위한 인터페이스 (Projectinterface에 아직 없다면 여기서 병합)
export interface ExtendedProjectInterface extends Projectinterface {
    deployUrl?: string;
}

interface ProjectModalProps {
    project: ExtendedProjectInterface | null;
    onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    // ESC 키 닫기 및 배경 스크롤 락
    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    const isDeployed = Boolean(project.deployUrl);

    return createPortal(
        <>
            <style>
                {`
          @keyframes modalBackdropFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalContentSlideUp {
            from {
              opacity: 0;
              transform: translateY(24px) scale(0.97);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 9999px;
          }
        `}
            </style>

            {/* 딤드 배경 (Backdrop) */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(9, 9, 18, 0.8)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    padding: "20px",
                    animation: "modalBackdropFadeIn 0.22s ease-out forwards",
                }}
            >
                {/* 모달 박스 */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="custom-scrollbar"
                    style={{
                        backgroundColor: "#110f22",
                        border: "1px solid rgba(170, 59, 255, 0.25)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(170, 59, 255, 0.15)",
                        borderRadius: "20px",
                        maxWidth: "880px",
                        width: "100%",
                        maxHeight: "88vh",
                        overflowY: "auto",
                        padding: "28px",
                        color: "#f8fafc",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        animation: "modalContentSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    }}
                >
                    {/* 1. 상단 메타 바 (기간, 유형 뱃지, 닫기 버튼) */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                            <span
                                style={{
                                    fontSize: "12px",
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

                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color: "#38bdf8",
                                    backgroundColor: "rgba(56, 189, 248, 0.12)",
                                    border: "1px solid rgba(56, 189, 248, 0.25)",
                                    padding: "4px 10px",
                                    borderRadius: "6px",
                                }}
                            >
                                {project.period}
                            </span>

                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color: "#34d399",
                                    backgroundColor: "rgba(52, 211, 153, 0.12)",
                                    border: "1px solid rgba(52, 211, 153, 0.25)",
                                    padding: "4px 10px",
                                    borderRadius: "6px",
                                }}
                            >
                                {project.category}
                            </span>
                        </div>

                        <button
                            onClick={onClose}
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                color: "#94a3b8",
                                fontSize: "16px",
                                cursor: "pointer",
                                padding: "6px 12px",
                                borderRadius: "8px",
                                lineHeight: 1,
                                transition: "all 0.2s",
                            }}
                            aria-label="닫기"
                        >
                            ✕
                        </button>
                    </div>

                    {/* 2. 타이틀 & 외부 링크(Github/PPT) */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "12px" }}>
                        <h3
                            style={{
                                margin: 0,
                                fontSize: "22px",
                                fontWeight: 800,
                                color: "#ffffff",
                                borderLeft: "4px solid #aa3bff",
                                paddingLeft: "12px",
                            }}
                        >
                            {project.projectName}
                        </h3>

                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
                                        backgroundColor: "rgba(255, 255, 255, 0.08)",
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
                    {/* 배포중이면 주의사항 */}
                    {project.warning && (<div style={{
                        fontSize: "12px",
                        color: "#949494",
                    }}>
                        주의 사항 : {project.warning}
                    </div>)}


                    {/* 3. 진행도 게이지바 (progress가 존재할 때) */}
                    {typeof project.progress === "number" && (
                        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                                <span style={{ color: "#94a3b8" }}>프로젝트 완성도</span>
                                <span style={{ color: "#c084fc", fontWeight: 700 }}>
                                    {project.progress}% {project.progress === 100 ? "(완료)" : "(진행 중)"}
                                </span>
                            </div>
                            <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255, 255, 255, 0.08)", borderRadius: "9999px", overflow: "hidden" }}>
                                <div
                                    style={{
                                        width: `${project.progress}%`,
                                        height: "100%",
                                        backgroundColor: project.progress === 100 ? "#34d399" : "#aa3bff",
                                        borderRadius: "9999px",
                                        transition: "width 0.6s ease",
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* 4. 브라우저 목업 형태의 화면 미리보기 뷰어 */}
                    <div
                        style={{
                            backgroundColor: "#0d0c18",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "14px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        {/* 브라우저 상단 주소창 바 */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 14px",
                                backgroundColor: "rgba(255, 255, 255, 0.04)",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                                gap: "12px",
                            }}
                        >
                            {/* 왼쪽: 배포 여부 상태 뱃지 박스 */}
                            <span
                                style={{
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    letterSpacing: "0.04em",
                                    padding: "3px 8px",
                                    borderRadius: "4px",
                                    backgroundColor: isDeployed ? "rgba(34, 197, 94, 0.15)" : "rgba(249, 115, 22, 0.15)",
                                    color: isDeployed ? "#4ade80" : "#fb923c",
                                    border: isDeployed ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(249, 115, 22, 0.3)",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {isDeployed ? "LIVE" : "LOCAL"}
                            </span>

                            {/* 가운데: URL 표시 영역 */}
                            <div
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                                    padding: "4px 12px",
                                    borderRadius: "6px",
                                    fontSize: "11px",
                                    color: "#94a3b8",
                                    flex: 1,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {project.deployUrl ? (
                                    <a
                                        href={project.deployUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            textDecoration: "none",
                                            color: "#94a3b8",
                                        }}
                                    >
                                        {project.deployUrl}
                                    </a>
                                ) : (
                                    `https://demo.local/${project.projectName.replace(/\s+/g, "-").toLowerCase()}`
                                )}
                            </div>

                            {/* 오른쪽 끝: deployUrl이 있을 때만 '사이트 접속' 버튼 표시 (없으면 비워둠) */}
                            {project.deployUrl ? (
                                <a
                                    href={project.deployUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "4px",
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        color: "#ffffff",
                                        backgroundColor: "#9333ea",
                                        padding: "4px 10px",
                                        borderRadius: "6px",
                                        textDecoration: "none",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    사이트 접속
                                </a>
                            ) : null}
                        </div>

                        {/* 실제 스크린샷 렌더링 컨테이너 */}
                        <div
                            style={{
                                position: "relative",
                                minHeight: "300px",
                                maxHeight: "480px",
                                backgroundColor: "#05050d",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            }}
                        >
                            {project.images ? (
                                <img
                                    src={project.images}
                                    alt={`${project.projectName} 구동 화면`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        maxHeight: "480px",
                                        objectFit: "contain",
                                        display: "block",
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                        const parent = e.currentTarget.parentElement;
                                        if (parent) {
                                            parent.innerHTML = `
                        <div style="padding: 40px; text-align: center; color: #64748b;">
                          <div style="font-size: 32px; margin-bottom: 8px;">🖼️</div>
                          <div style="font-size: 13px;">이미지 경로를 확인해주세요: ${project.images}</div>
                        </div>
                      `;
                                        }
                                    }}
                                />
                            ) : (
                                <div
                                    style={{
                                        padding: "40px",
                                        textAlign: "center",
                                        color: "#64748b",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px",
                                    }}
                                >
                                    <span style={{ fontSize: "36px" }}>🖥️</span>
                                    <span style={{ fontSize: "14px" }}>등록된 화면 이미지가 없습니다.</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 5. 요약 및 설명 */}
                    <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", marginBottom: "6px" }}>
                            프로젝트 요약
                        </div>
                        <p style={{ margin: 0, fontSize: "14px", color: "#cbd5e1", lineHeight: 1.7 }}>
                            {project.summary}
                        </p>
                    </div>

                    {/* 6. 기술 스택 칩 */}
                    <div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8", marginBottom: "8px" }}>
                            활용 기술 스택
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        padding: "4px 10px",
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
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};