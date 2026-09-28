import { ProfileCard } from "../components/ProfileCard";
import { ProfileInfo } from "../feature/Profile/ProfileInfo";

const Profile = () => {
  return (
    <section style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "left", padding: "0 20px 60px 20px" }}>
      {/* 1. 상단 인적사항 & 사진 영역 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr", gap: "16px", alignItems: "stretch", marginBottom: "24px" }}>
        {/* 증명사진 박스 */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ProfileInfo.myPhotoUrl}
            alt="프로필 사진"
            style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "10px" }}
          />
        </div>

        {/* 인적사항 3열 그리드 박스 */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "20px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
            alignContent: "start",
          }}
        >
          <h3
            style={{
              gridColumn: "span 2",
              margin: "0 0 4px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#f8fafc",
              borderLeft: "3px solid #aa3bff",
              paddingLeft: "10px",
            }}
          >
            기본 인적사항
          </h3>

          <ProfileCard label="이름" value={`${ProfileInfo.name} (${ProfileInfo.gender})`} />
          <ProfileCard label="생년" value={ProfileInfo.birthday} />
          <ProfileCard label="병역" value={ProfileInfo.military} />

          <ProfileCard label="휴대폰" value={ProfileInfo.phone} />
          <ProfileCard label="Email" value={ProfileInfo.email} />
          <ProfileCard label="주소" value={ProfileInfo.location} />
        </div>
      </div>

      {/* 2. 경력 사항 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: 700,
            color: "#f8fafc",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          경력 사항
        </h3>
        {ProfileInfo.careers.map((career, idx) => (
          <div key={idx}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
              <strong style={{ fontSize: "15px", color: "#ffffff" }}>
                {career.company}{" "}
                <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 400 }}>
                  | {career.department} {career.position}
                </span>
              </strong>
              <span style={{ fontSize: "13px", color: "#c084fc", fontWeight: 600 }}>
                {career.period} ({career.duration})
              </span>
            </div>
            <div style={{ margin: "0 0 8px 0", fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6 }}>
              {career.description.map((desc, dIdx) => (
                <div key={dIdx}>• {desc}</div>
              ))}
            </div>
            <div style={{ fontSize: "12px", color: "#64748b" }}>
              주요 직무: {career.role}
            </div>
          </div>
        ))}
      </div>

      {/* 3. 학력 사항 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: 700,
            color: "#f8fafc",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          학력 사항
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {ProfileInfo.educations.map((edu, idx) => (
            <div
              key={idx}
              style={{
                borderBottom: idx !== ProfileInfo.educations.length - 1 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                paddingBottom: idx !== ProfileInfo.educations.length - 1 ? "12px" : "0",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <strong style={{ fontSize: "15px", color: "#ffffff" }}>{edu.schoolName}</strong>
                  <span style={{ fontSize: "13px", color: "#94a3b8", marginLeft: "8px" }}>
                    {edu.major} ({edu.status})
                  </span>
                </div>
                <span style={{ fontSize: "13px", color: "#94a3b8" }}>{edu.period}</span>
              </div>
              {edu.gpa && (
                <div style={{ marginTop: "4px", fontSize: "13px", color: "#cbd5e1" }}>
                  학점: <strong style={{ color: "#34d399" }}>{edu.gpa}</strong>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. 교육 이수 사항 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "20px 24px",
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: 700,
            color: "#f8fafc",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          교육 이수
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {ProfileInfo.trainings.map((training, idx) => (
            <div
              key={idx}
              style={{
                borderTop: idx > 0 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                paddingTop: idx > 0 ? "14px" : "0",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <strong style={{ fontSize: "14px", color: "#ffffff" }}>{training.courseName}</strong>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>{training.period}</span>
              </div>
              <div style={{ fontSize: "12px", color: "#a855f7", marginBottom: "4px" }}>
                {training.institution}
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "#cbd5e1", lineHeight: 1.6 }}>
                {training.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. 자격증 및 수상 내역 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
        {/* 자격증 */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "20px 24px",
          }}
        >
          <h3
            style={{
              margin: "0 0 16px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#f8fafc",
              borderLeft: "3px solid #aa3bff",
              paddingLeft: "10px",
            }}
          >
            자격증
          </h3>
          {ProfileInfo.certificates.map((cert, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <strong style={{ fontSize: "14px", color: "#ffffff", display: "block" }}>{cert.name}</strong>
                <span style={{ fontSize: "12px", color: "#94a3b8" }}>발행기관: {cert.issuer}</span>
              </div>
              <span style={{ fontSize: "12px", color: "#94a3b8" }}>{cert.date}</span>
            </div>
          ))}
        </div>

        {/* 수상 내역 */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "20px 24px",
          }}
        >
          <h3
            style={{
              margin: "0 0 16px 0",
              fontSize: "16px",
              fontWeight: 700,
              color: "#f8fafc",
              borderLeft: "3px solid #aa3bff",
              paddingLeft: "10px",
            }}
          >
            수상 내역
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {ProfileInfo.awards.map((award, idx) => (
              <div
                key={idx}
                style={{
                  borderTop: idx > 0 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                  paddingTop: idx > 0 ? "8px" : "0",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "14px", color: "#ffffff" }}>{award.title}</strong>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>{award.year}</span>
                </div>
                <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#cbd5e1" }}>
                  {award.institution} · {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. 자기소개서 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          padding: "20px 24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            fontWeight: 700,
            color: "#f8fafc",
            borderLeft: "3px solid #aa3bff",
            paddingLeft: "10px",
          }}
        >
          자기소개
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "13px", color: "#cbd5e1", lineHeight: 1.7 }}>
          {ProfileInfo.selfIntroductions.map((item, idx) => (
            <div key={idx}>
              <h4 style={{ margin: "0 0 6px 0", fontSize: "14px", color: "#f8fafc", fontWeight: 700 }}>
                {item.title}
              </h4>
              <p style={{ margin: 0 }}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;