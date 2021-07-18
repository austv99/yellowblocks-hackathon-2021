import React from "react";
import { Line } from "react-chartjs-2";

const SkillsGraph = () => {
  const data = {
    labels: [
      "Mar 2021",
      "Apr 2021",
      "May 2021",
      "Jun 2021",
      "Jul 2021",
      "Aug 2021",
    ],
    datasets: [
      {
        label: "Concentration",
        data: [3, 4, 4.5, 4, 5, 5],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Problem Solving",
        data: [2, 2.5, 4.2, 4, 5, 7],
        fill: false,
        backgroundColor: "#ffa940",
        borderColor: "#ffd591",
      },
      {
        label: "Speaking",
        data: [1, 3, 6, 8, 8],
        fill: false,
        backgroundColor: "#3f6600",
        borderColor: "#b7eb8f",
      },
      {
        label: "Behaviour",
        data: [1, 3, 5, 6, 7],
        fill: false,
        backgroundColor: "#003a8c ",
        borderColor: "#adc6ff",
      },
      {
        label: "Sociability",
        data: [1, 3, 7, 8, 9],
        fill: false,
        backgroundColor: "#391085",
        borderColor: "#d3adf7 ",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
};
export default SkillsGraph;
