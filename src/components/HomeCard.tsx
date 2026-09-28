import  { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

// 1. 공통 카드 래퍼 (Shell)
interface HomeCardProps {
  title: string;
  to: string;
  info?: string;
  children?: ReactNode;
}

const MoreLink = ({ to }: { to: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: "12px",
        fontWeight: 600,
        textDecoration: "none",
        padding: "4px 12px",
        borderRadius: "9999px",
        backgroundColor: hovered ? "rgba(170, 59, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
        color: hovered ? "#d8b4fe" : "#94a3b8",
        border: `1px solid ${hovered ? "rgba(170, 59, 255, 0.4)" : "rgba(255, 255, 255, 0.08)"}`,
        transition: "all 0.2s ease",
      }}
    >
      <span>자세히보기</span>
    </Link>
  );
};

export const HomeCard = ({ title, to, info, children }: HomeCardProps) => {
  return (
    <section
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        marginBottom: "36px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 700,
            color: "#fff",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          {title}
        </h3>
        <MoreLink to={to} />
      </div>

      {info && (
        <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8", lineHeight: 1.6 }}>
          {info}
        </p>
      )}

      {children}
    </section>
  );
};