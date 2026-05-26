"use client";

export const AboutProject = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        padding: "40px",
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(12px)",
        borderRadius: "32px",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>О проекте</h2>
      <p style={{ fontSize: "18px", lineHeight: 1.5, marginBottom: "24px" }}>
        Интерактивная книга по физике для 9 класса. Здесь вы найдёте теорию, опыты и тесты,
        которые помогут понять мир физических явлений.
      </p>
      <div
        style={{
          fontStyle: "italic",
          borderLeft: "3px solid rgba(255,255,255,0.3)",
          paddingLeft: "20px",
          margin: "24px 0",
          textAlign: "left",
        }}
      >
        <div style={{ fontWeight: 500 }}>Разработчик:</div>
        <div style={{ marginTop: "8px", fontWeight: 500 }}>— Вересов Александр Дмитриевич группа Ф-33(1)</div>
      </div>
      <p style={{ fontSize: "14px", opacity: 0.7 }}>
        Версия 1.0.0 
      </p>
    </div>
  );
};