import React from "react";
import moment from "moment";

function Header({date, key}) {
  return (
    <div className="head" key={`header_key_${key}`}>
      <span>{moment(date).format("MM-DD")}</span>
    </div>
  );
}
export default Header;
