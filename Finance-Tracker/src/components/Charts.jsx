import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Charts({ categoryData, monthlyData }) {
  const pieRef = useRef(null);
  const lineRef = useRef(null);
  let pieChart;
  let lineChart;

  useEffect(() => {
    if (pieRef.current) {
      if (pieChart) pieChart.destroy(); // destroy old
      pieChart = new Chart(pieRef.current, {
        type: "pie",
        data: {
          labels: Object.keys(categoryData),
          datasets: [
            {
              data: Object.values(categoryData),
              backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
            },
          ],
        },
      });
    }

    if (lineRef.current) {
      if (lineChart) lineChart.destroy(); // destroy old
      lineChart = new Chart(lineRef.current, {
        type: "line",
        data: {
          labels: Object.keys(monthlyData),
          datasets: [
            {
              label: "Monthly Spending",
              data: Object.values(monthlyData),
              fill: false,
              borderColor: "#36a2eb",
              tension: 0.1,
            },
          ],
        },
      });
    }
    
    // Cleanup charts on unmount
    return () => {
      if (pieChart) pieChart.destroy();
      if (lineChart) lineChart.destroy();
    };
  }, [categoryData, monthlyData]);

  return (
    <div className="charts">
      <canvas ref={pieRef}></canvas>
      <canvas ref={lineRef}></canvas>
    </div>
  );
}

export default Charts;
