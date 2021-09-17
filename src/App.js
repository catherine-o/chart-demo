import React from "react";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import "./App.css";

const initialState = {
  selectedId: "BE",
  selectedSales: 55,
  ids: {
    BE: {
      2013: {
        111: [11, 12, 13, 14],
        222: [21, 22, 23, 24],
        333: [31, 32, 33, 44],
      },
      2014: {
        111: [22, 32, 43, 54],
        222: [31, 42, 53, 64],
        333: [41, 52, 63, 74],
      },
    },
    HE: {
      2013: {
        777: [41, 32, 23, 14],
        888: [51, 42, 33, 24],
        999: [61, 52, 43, 34],
      },
      2014: {
        777: [72, 62, 43, 54],
        888: [31, 42, 53, 64],
        999: [41, 52, 63, 74],
      },
    },
  },
};

function App() {
  const [state, setState] = React.useState(initialState);
  const updateSelectedId = (id) => {
    setState({ ...state, selectedId: id });
  };

  const updateSelectedSales = (num) => {
    setState({ ...state, selectedSales: num });
  };

  return (
    <div className="App">
      <HomeContainer
        selectedId={state.selectedId}
        selectedSales={state.selectedSales}
        updateSelectedId={updateSelectedId}
        updateSelectedSales={updateSelectedSales}
        ids={state.ids}
      />
    </div>
  );
}

export default App;
