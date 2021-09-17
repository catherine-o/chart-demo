import React from "react";
import "./Search.css";

export default function Search({ updateSelectedId, ids }) {
  const idsList = Object.keys(ids);

  const createOptions = (ids) => {
    return ids.map((id) => {
      return (
        <option key={id} value={id}>
          {id}
        </option>
      );
    });
  };

  const handleChange = (event) => {
    const selection = event.target.value;
    updateSelectedId(selection);
  };

  return (
    <form className="search-form">
      <h5>State</h5>
      <select className="select-box" onChange={handleChange}>
        {createOptions(idsList)}
      </select>
    </form>
  );
}
