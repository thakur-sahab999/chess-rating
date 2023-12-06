"use client";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
  BarController,
} from "chart.js";
export default function RatingChart({ data }) {
  const chartData = {
    labels: data.map((player) => player?.username),
    datasets: [
      {
        label: "Rating",
        data: data.map((player) => player?.perfs?.classical?.rating),
        backgroundColor: "blue",
        hoverBackgroundColor: "skyblue",
      },
    ],
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    BarElement,
    BarController
  );

  return (
    <Chart
      type="bar"
      data={chartData}
      options={{
        responsive: true,
        animation: {
          duration: 1000,
          easing: "easeInOut",
        },
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      }}
    />
  );
}
