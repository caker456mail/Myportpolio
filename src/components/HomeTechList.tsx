interface HomeTechListProps {
  skills: string[];
}

export const HomeTechList = ({ skills }: HomeTechListProps) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {skills.map((skill) => (
        <span
          key={skill}
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
          {skill}
        </span>
      ))}
    </div>
  );
};