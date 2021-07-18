import React from "react";
import { Card } from "antd";

function StatsCards({ stats }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "98%",
          justifyContent: "space-between",
        }}
      >
        <Card title="💪 Strengths" style={{ width: "33%" }}>
          <ul>
            {stats.strengths.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </Card>
        <Card title="✋ Needs" style={{ width: "33%" }}>
          <ul>
            {stats.weaknesses.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </Card>
        <Card title="✨ Interests" style={{ width: "33%" }}>
          <ul>
            {stats.interests.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

export default StatsCards;
