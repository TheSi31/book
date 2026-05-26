"use client";

type MenuItem = {
  label: string;
  onClick: () => void;
};

type SidebarMenuProps = {
  onTheory?: () => void;
  onExperiments?: () => void;
  onTests?: () => void;
  onAbout?: () => void;
  activeProgress?: number; // 0..3
};

export const SidebarMenu = ({
  onTheory,
  onExperiments,
  onTests,
  onAbout,
  activeProgress = 0,
}: SidebarMenuProps) => {
  const menuItems: MenuItem[] = [
    { label: "Теория", onClick: onTheory || (() => {}) },
    { label: "Опыты", onClick: onExperiments || (() => {}) },
    { label: "Тесты", onClick: onTests || (() => {}) },
    { label: "О проекте", onClick: onAbout || (() => {}) },
  ];

  return (
    <aside
      style={{
        width: "280px",
        height: "100vh",
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(16px)",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        padding: "32px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 10,
      }}
    >
      <div>
        {/* Заголовок */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ color: "white", fontSize: "28px", margin: 0 }}>Физика</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "4px" }}>
            9 класс
          </p>
        </div>

        {/* Меню */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
                padding: "12px 16px",
                borderRadius: "12px",
                textAlign: "left",
                cursor: "pointer",
                transition: "0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div>
        {/* Цитата */}
        <div
          style={{
            marginBottom: "32px",
            padding: "16px",
            borderLeft: "3px solid rgba(255,255,255,0.3)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
          }}
        >
          «Физика — это наука понимать природу»
          <div style={{ marginTop: "8px", fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
            Р. Фейнман
          </div>
        </div>

        {/* Прогресс */}
        <div>
          <div style={{ color: "white", fontSize: "14px", marginBottom: "12px", opacity: 0.7 }}>
            Твой прогресс
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            {["I", "II", "III", "IV"].map((q, idx) => (
              <div
                key={idx}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "40px",
                  background: idx <= activeProgress ? "#4ea1ff" : "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  transition: "0.2s",
                }}
              >
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};