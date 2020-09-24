import React from "react";
import logo from "./logo.svg";
import "./App.css";
import moment from "moment";

function App() {
  function getMonths(month, year) {
    var ar = [];
    var start = moment(year + "-" + month, "YYYY-MMM");
    for (
      var end = moment(start).add(1, "month");
      start.isBefore(end);
      start.add(1, "day")
    ) {
      ar.push(start.format("D-ddd"));
    }
    return ar;
  }
  console.log(getMonths("Jan", 2020));

  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    //gridColumn: 1/10,
    gridAutoColumns: "auto",
    backgroundColor: "#2196F3",
    padding: 10,
  };

  const gridItemStyle = {
    padding: 20,
  };
  return (
    <div className="App">
      <div class="grid">
        <div class="head">1</div>
        <div class="head">2</div>
        <div class="head">3</div>
        <div class="head">4</div>
        <div class="head">5</div>
        <div class="head">6</div>
        <div class="elem start1 end2">A</div>
        <div class="elem start2 end5">B</div>
        <div class="elem start2 end3">C</div>
        <div class="elem start3 end4">D</div>
        <div class="elem start3 end3">E</div>
        <div class="elem start5 end6">F</div>
        <div class="elem start5 end7">G</div>
        <div class="elem start6 end8">H</div>
      </div>
    </div>
  );
}

export default App;
