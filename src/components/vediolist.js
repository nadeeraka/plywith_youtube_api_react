import React from "react";
import Vedio from "./vedio";
import uuid from "uuid";

const VedioList = props => (
  <div>
    {props.data && (
      <ul className="col-md-4 list group">
        {props.data.map(r => (
          <div>
            {" "}
            <Vedio key={uuid()} data={r} />
            <p>Vedio Details</p>
          </div>
        ))}
      </ul>
    )}
  </div>
);

export default VedioList;
