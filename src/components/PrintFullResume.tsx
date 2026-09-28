import Home from "../pages/Home";
import Career from "../pages/Career";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import Skills from "../pages/Skills";
import TroubleShooting from "../pages/TroubleShooting";
// TroubleShooting 등 추가 페이지가 있다면 함께 import

export const PrintFullResume = () => {
  return (
    <div className="print-only-container">
      {/* 1. 홈 섹션 */}
      <section className="print-section">
        <Home />
      </section>

      {/* 2. 프로필 섹션 */}
      <section className="print-section">
        <Profile />
      </section>
      {/* 3. 스킬 섹션 */}
      <section className="print-section">
        <Skills />
      </section>
      {/* 4. 경력 섹션 */}
      <section className="print-section">
        <Career />
      </section>
      {/* 5. 경력 섹션 */}
      <section className="print-section">
        <Projects />
      </section>

      {/* 6. 트러블 섹션 */}
      <section className="print-section">
        <TroubleShooting />
      </section>
    </div>
  );
};