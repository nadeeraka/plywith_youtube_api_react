import React from "react";
import Vedio from "./vedio";
import uuid from "uuid";

const VedioList = props => (
  <div>
    {props.data && (
      <ul className="col-md-4 list group g">
        <div className="vedio-list media">
          <div className="media-left">
            {" "}
            {props.data.map(r => (
              <div key={uuid()}>
                {" "}
                <Vedio key={uuid()} data={r} />
              </div>
            ))}
          </div>
        </div>
      </ul>
    )}
  </div>
);

export default VedioList;
