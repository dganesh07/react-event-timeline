import React from "react";
import moment from "moment";
import timelineItems from "./timelineItems";
import Header from "./Header";

function Timeline() {
  const sortData = (data) => {
    let sorted = data.sort((a, b) => {
      a = new Date(a.start);
      b = new Date(b.start);
      return a < b ? -1 : a > b ? 1 : 0;
    });

    return sorted;
  };

  const getEndDate = (data) => {
    let sorted = data.sort((a, b) => {
      a = new Date(a.end);
      b = new Date(b.end);
      return a < b ? -1 : a > b ? 1 : 0;
    });

    return sorted[sorted.length - 1]["end"];
  };

  const getDatesBetween = (start, end) => {
    let dates = [];
    let currDate = moment(start).startOf("day");
    let endDate = moment(end).startOf("day");
    dates.push(currDate.toDate());

    while (currDate.add(1, "days").diff(endDate) < 0) {
      dates.push(currDate.clone().toDate());
    }

    dates.push(endDate.toDate());
    dates.push(endDate.add(1, "days").toDate());
    console.log("date count", dates.length)
    return dates;
  };

  const outputHeader = (dates) => {
    return dates.map((date, index) => {
      return <Header date={date} key={index} />;
    });
  };

  const data = timelineItems;

  // Sort the data ordered by start.
  const sortedData = sortData(data);

  // Get the start date.
  const startDate = sortedData[0]["start"];
  // Get the end date.
  const endDate = getEndDate(data);
  // Get dates between start and end to output.
  const datesBetween = getDatesBetween(startDate, endDate);

  return (
    <div className="grid">
      {outputHeader(datesBetween)}
      {/* <div
        className="timeline-grid__content"
        style={{ height: `${40 * data.length}px` }}
      >
        {this.outputTimeline(sortedData, startDate)}
      </div> */}
    </div>
  );
}

export default Timeline;
