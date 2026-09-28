import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SideMenu } from "../feature/SideMenu";
const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isHovered ? "240px" : "68px",
        height: "100vh",
        backgroundColor: "#fff",
        borderRight: "1px solid #e5e4e7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "24px 14px",
        boxSizing: "border-box",
        zIndex: 1000,
        transition: "width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        boxShadow: isHovered ? "4px 0 16px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div>
        {/* 상단 로고 / 타이틀 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            padding: "0 6px",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              minWidth: "28px",
              height: "28px",
              borderRadius: "8px",
              backgroundColor: "#aa3bff",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "14px",
              boxShadow: "0 2px 8px rgba(170, 59, 255, 0.35)",
            }}
          >
            K
          </div>

          {/* 2단 텍스트 구조로 변경 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.2s ease",
              lineHeight: 1.2,
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#16171d" }}>
              Geunwoo Kim
            </span>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#aa3bff", letterSpacing: "0.02em" }}>
              Frontend Developer
            </span>
          </div>
        </div>

        {/* 네비게이션 메뉴 (NavLink 적용) */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {SideMenu.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "10px 10px",
                borderRadius: "8px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                textDecoration: "none",
                color: isActive ? "#aa3bff" : "#4b5563",
                backgroundColor: isActive ? "rgba(170, 59, 255, 0.08)" : "transparent",
                fontWeight: isActive ? 600 : 400,
                transition: "background-color 0.15s ease, color 0.15s ease",
              })}
            >
              <div
                style={{
                  minWidth: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  fontSize: "14px",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.2s ease",
                }}
              >
                {item.title}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#9ca3af",
          whiteSpace: "nowrap",
          padding: "0 8px",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        © 2026 Geunwoo
      </div>
    </aside>
  );
};

export default Sidebar; 