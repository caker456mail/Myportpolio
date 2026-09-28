import { useState } from "react";

export const DownloadPdfButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    window.print();
    setTimeout(() => {
      setIsDownloading(false);
    }, 1200);
  };

  return (
    <>
      <style>
        {`
          @keyframes pdfGlowPulse {
            0% { box-shadow: 0 0 0 0 rgba(170, 59, 255, 0.5); }
            70% { box-shadow: 0 0 0 12px rgba(170, 59, 255, 0); }
            100% { box-shadow: 0 0 0 0 rgba(170, 59, 255, 0); }
          }
          @keyframes bounceDownload {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }

          /* [평상시 화면] 인쇄 전용 묶음은 브라우저에서 절대 보이지 않게 숨김 */
          .print-only-container {
            display: none !important;
          }

          /* [인쇄 / PDF 모드] 오직 PrintFullResume만 남기고 싹 다 숨김 */
          @media print {
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            /* 기존 화면 전체 숨김 (사이드바, 현재 라우터 화면 Outlet, 버튼 일체) */
            aside,
            main,
            button,
            .download-pdf-fab {
              display: none !important;
            }

            /* 전체 합본 컨테이너만 인쇄 영역으로 표시 */
            .print-only-container {
              display: block !important;
              width: 100% !important;
              margin: 0 !important;
              padding: 20px 0 !important;
              background-color: #0b0a14 !important;
            }

            .print-section {
              page-break-after: auto;
              break-after: auto;
              margin-bottom: 32px;
            }

            body, html {
              background-color: #0b0a14 !important;
              margin: 0 !important;
              padding: 0 !important;
            }
          }
        `}
      </style>

      {/* 우측 하단 고정 버튼 */}
      <div
        className="download-pdf-fab"
        style={{
          position: "fixed",
          right: "32px",
          bottom: "32px",
          zIndex: 900,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#f8fafc",
            backgroundColor: "rgba(18, 16, 36, 0.9)",
            border: "1px solid rgba(170, 59, 255, 0.3)",
            padding: "8px 14px",
            borderRadius: "10px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
            whiteSpace: "nowrap",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(8px)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: "none",
          }}
        >
          {isDownloading ? "인쇄 창 생성 중..." : "전체 포트폴리오 PDF 저장"}
        </span>

        <button
          onClick={handleDownload}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="전체 포트폴리오 PDF 저장"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#aa3bff",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            transform: isHovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            animation: isHovered ? "none" : "pdfGlowPulse 2.5s infinite ease-in-out",
            boxShadow: isHovered
              ? "0 12px 28px rgba(170, 59, 255, 0.5), 0 0 20px rgba(170, 59, 255, 0.4)"
              : "0 6px 18px rgba(0, 0, 0, 0.35)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: isDownloading ? "bounceDownload 0.6s infinite ease" : "none",
            }}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
      </div>
    </>
  );
};