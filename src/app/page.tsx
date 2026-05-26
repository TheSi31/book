"use client";

import { useState } from "react";
import { PhysicsWheel } from "../components/Wheel/PhysicsWheel";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";
import { AboutProject } from "../components/About/AboutProject";
import { TopicContent } from "../components/TopicContent/TopicContent";

type Section = "Теория" | "Опыты" | "Тесты" | "О проекте";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("Теория");
  const [activeQuarter, setActiveQuarter] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTheory = () => {
    setActiveSection("Теория");
    setSelectedTopic(null);   // возвращаем колесо
  };

  const handleExperiments = () => {
    window.open("https://phet.colorado.edu/en/simulations/filter?subjects=physics&type=html", "_blank");
  };

  const handleTests = () => {
    window.open("https://adu.by/ru/uchenikam/respublikanskaya-olimpiada-po-uchebnym-predmetam/fizika.html", "_blank");
  };

  const handleAbout = () => {
    setActiveSection("О проекте");
    setSelectedTopic(null);
  };

  const handleQuarterClick = (index: number) => {
    setActiveQuarter(index);
    // По индексу определяем название раздела
    const topics = ["Механика", "Термодинамика", "Электродинамика", "Оптика"];
    setSelectedTopic(topics[index]);
    setActiveSection("Теория"); // остаёмся в теории, но показываем контент
  };

  const handleBackToWheel = () => {
    setSelectedTopic(null);
  };

  const renderContent = () => {
    if (activeSection === "О проекте") {
      return <AboutProject />;
    }
    if (activeSection === "Теория") {
      if (selectedTopic) {
        return <TopicContent topic={selectedTopic} onBack={handleBackToWheel} />;
      }
      return (
        <PhysicsWheel
          onQuarterClick={handleQuarterClick}
          activeQuarter={activeQuarter}
        />
      );
    }
    // Для Опытов и Тестов мы открываем внешние ссылки, поэтому сюда не попадаем
    return null;
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