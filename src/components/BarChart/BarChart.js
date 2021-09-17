import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "./BarChart.css";

export default function BarChartContainer({ selectedSales }) {
  const generateData = () =>
    [...Array(31).keys()].map((num) => ({
      name: num + 1,
      none: Math.floor(Math.random() * selectedSales + 1),
      promo: Math.floor(Math.random() * selectedSales + 1),
    }));

  const data = generateData();

  return (
    <div className="bar-chart">
      <h2 className="bar-chart-title">Store Transactions</h2>
      <BarChart width={950} height={400} data={data} barCategoryGap={"87%"}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: "Sales", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="none" fill="#8884d8" barSize="5px" />
        <Bar dataKey="promo" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
