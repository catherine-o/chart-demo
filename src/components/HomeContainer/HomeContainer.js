import React from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import BarChartContainer from "../BarChart/BarChart";
import "./HomeContainer.css";

export default function HomeContainer({
  selectedId,
  selectedSales,
  updateSelectedId,
  updateSelectedSales,
  ids,
}) {
  return (
    <div className="home-container">
      <header className="search-title">
        <h2 className="home-title">Store Overview</h2>
        <Search updateSelectedId={updateSelectedId} ids={ids} />
      </header>
      <Table
        selectedId={selectedId}
        data={ids[selectedId]}
        updateSelectedSales={updateSelectedSales}
      />
      <BarChartContainer selectedSales={selectedSales} />
    </div>
  );
}
