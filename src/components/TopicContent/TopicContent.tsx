"use client";

import { Kinematics } from "../../content/Kinematics";
import { Dynamics } from "../../content/Dynamics";
import { Statics } from "../../content/Statics";
import { ConservationLaws } from "../../content/ConservationLaws";

type TopicContentProps = {
  topic: string;
  onBack: () => void;
};

export const TopicContent = ({
  topic,
  onBack,
}: TopicContentProps) => {
  const renderTopic = () => {
    switch (topic) {
      case "Кинематика":
        return <Kinematics />;
      case "Динамика":
        return <Dynamics />;
      case "Статика":
        return <Statics />;
      case "Законы сохранения":
        return <ConservationLaws />;
      default:
        return <div>Раздел не найден</div>;
    }
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        padding: "40px",
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(12px)",
        borderRadius: "32px",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "white",
        overflowY: "auto",
        maxHeight: "90vh",
      }}
    >
      {renderTopic()}

      <button
        onClick={onBack}
        style={{
          marginTop: "30px",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "10px 20px",
          borderRadius: "40px",
          color: "white",
          cursor: "pointer",
        }}
      >
        ← Назад
      </button>
    </div>
  );
};