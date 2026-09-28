// src/components/ProfileCard.tsx
interface ProfileCardProps {
  label: string;
  value: string;
  colSpan?: number;
}

export const ProfileCard = ({ label, value, colSpan = 1 }: ProfileCardProps) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "12px 18px",
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
      }}
    >
      {label && (
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#94a3b8",
            borderRight: "2px solid #aa3bff",
            paddingRight: "10px",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      )}
      <span
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#ffffff",
          whiteSpace: colSpan > 1 ? "normal" : "nowrap",
          lineHeight: colSpan > 1 ? 1.6 : 1,
        }}
      >
        {value}
      </span>
    </div>
  );
};