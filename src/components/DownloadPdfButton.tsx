import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const DownloadPdfButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const printContainer = document.querySelector(".print-only-container") as HTMLElement;
    if (!printContainer || isDownloading) return;

    const originalStyle = printContainer.getAttribute("style");

    try {
      setIsDownloading(true);

      // 1. 캡처 대상에 다크모드 배경색(#242941)과 글자색을 인라인으로 강제 주입
      printContainer.style.cssText = `
        display: block !important;
        position: fixed !important;
        top: 0 !important;
        left: -99999px !important;
        width: 1120px !important;
        background-color: #242941 !important;
        color: #ffffff !important;
        z-index: -9999 !important;
        opacity: 1 !important;
        pointer-events: none !important;
      `;

      // 2. AG Charts 및 DOM 렌더링 안정화 대기
      await new Promise((resolve) => setTimeout(resolve, 400));

      // 3. html2canvas 옵션에 backgroundColor를 다크모드 색상(#242941)으로 명시
      const canvas = await html2canvas(printContainer, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#242941", // ⭐ 흰 배경 방어용 핵심 설정
        logging: false,
        windowWidth: 1200,
        ignoreElements: (el) => el.classList.contains("download-pdf-fab"),
      });

      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error("캔버스 캡처 실패");
      }

      // 4. PDF 변환 및 다운로드
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, pageWidth, imgHeight, undefined, "FAST");
        heightLeft -= pageHeight;
      }

      pdf.save("김근우_포트폴리오.pdf");
    } catch (error) {
      console.error("PDF 생성 에러:", error);
    } finally {
      // 5. 원래 스타일로 완벽 복구
      if (originalStyle !== null) {
        printContainer.setAttribute("style", originalStyle);
      } else {
        printContainer.removeAttribute("style");
      }
      setIsDownloading(false);
    }
  };

  return (
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
        {isDownloading ? "PDF 생성 중..." : "전체 포트폴리오 PDF 다운로드"}
      </span>

      <button
        onClick={handleDownload}
        disabled={isDownloading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="전체 포트폴리오 PDF 다운로드"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#aa3bff",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          cursor: isDownloading ? "wait" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
          transform: isHovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: isHovered
            ? "0 12px 28px rgba(170, 59, 255, 0.5)"
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
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>
    </div>
  );
};