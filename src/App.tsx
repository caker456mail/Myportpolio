import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { DownloadPdfButton } from "./components/DownloadPdfButton";
import { PrintFullResume } from "./components/PrintFullResume"; // 🌟 추가
function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* 고정 사이드바 */}
      <Sidebar />

      {/* 라우트에 맞춰 바뀌는 본문 영역 */}
      <main
        style={{
          marginLeft: "68px", // 사이드바가 닫혀있을 때의 기본 너비
          flex: 1,
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </main>
        {/* 3. 인쇄 전용 전체 뷰 (평상시 숨김, window.print() 시에만 렌더링) */}
        <PrintFullResume />
        {/* 4. 플로팅 다운로드 버튼 */}
        <DownloadPdfButton />
    </div>
  );
}

export default App;