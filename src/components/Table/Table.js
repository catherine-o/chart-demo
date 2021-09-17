import React from "react";
import "./Table.css";

export default function Table({ selectedId, data, updateSelectedSales }) {
  const yearsList = Object.keys(data);
  // same stores are in both years, so just grab stores from one
  const storesList = Object.keys(data[yearsList[0]]);

  const createYears = (years) => {
    return years.map((year) => {
      return (
        <th key={year} className="tb-year" colSpan="4">
          {year}
        </th>
      );
    });
  };

  const createQuarters = (years) => {
    return years.map((year) => {
      return [...Array(4).keys()].map((index) => {
        const quarter = `Q${index + 1}`;
        return (
          <th key={quarter} className="tb-col">
            {year} {quarter}
          </th>
        );
      });
    });
  };

  const createRows = (storesList) => {
    return storesList.map((store) => {
      return (
        <tr key={store} className="tb-row">
          <td className="tb-data">{store}</td>
          {mapThroughYears(store)}
        </tr>
      );
    });
  };

  const mapThroughYears = (store) => {
    return yearsList.map((year) => {
      const storeData = data[year][store];
      return storeData.map((dataPoint) => (
        <td
          key={dataPoint}
          className="tb-data"
          onClick={() => updateSelectedSales(dataPoint)}
        >
          {dataPoint}
        </td>
      ));
    });
  };

  return (
    <table className="table">
      <tr>
        <th colSpan="2"></th>
        <th className="tb-title" colSpan="8">
          Date/Quarter
        </th>
      </tr>
      <tr>
        <th colSpan="2"></th>
        {createYears(yearsList)}
      </tr>
      <tr>
        <th className="tb-col">State</th>
        <th className="tb-col">Store</th>
        {createQuarters(yearsList)}
      </tr>
      <>
        <td className="tb-row" rowSpan="4">
          {selectedId}
        </td>
        {createRows(storesList)}
      </>
    </table>
  );
}
