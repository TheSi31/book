"use client";

import { useState } from "react";
import { PhysicsWheel } from "../components/Wheel/PhysicsWheel";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import { AboutProject } from "../components/About/AboutProject";

type Section = "Теория" | "Опыты" | "Тесты" | "О проекте";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("Теория");
  const [activeQuarter, setActiveQuarter] = useState(0);

  // Обработчики пунктов меню
  const handleTheory = () => {
    setActiveSection("Теория");
  };

  const handleExperiments = () => {
    window.open("https://phet.colorado.edu/en/simulations/filter?subjects=physics&type=html", "_blank");
  };

  const handleTests = () => {
    window.open("https://adu.by/ru/uchenikam/respublikanskaya-olimpiada-po-uchebnym-predmetam/fizika.html", "_blank");
  };

  const handleAbout = () => {
    setActiveSection("О проекте");
  };

  const handleQuarterClick = (index: number) => {
    setActiveQuarter(index);
    console.log(`Выбрана четверть: ${index}`);
    setActiveSection("Теория");
  };

  // Отображение контента справа
  const renderContent = () => {
    if (activeSection === "О проекте") {
      return <AboutProject />;
    }
    // Для теории показываем колесо  
    return (
      <PhysicsWheel
        onQuarterClick={handleQuarterClick}
        activeQuarter={activeQuarter}
      />
    );
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        background: "#0f172a",
        overflow: "hidden",
      }}
    >
      <SidebarMenu
        onTheory={handleTheory}
        onExperiments={handleExperiments}
        onTests={handleTests}
        onAbout={handleAbout}
        activeProgress={activeQuarter}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderContent()}
      </div> 
    </div>
  );
}