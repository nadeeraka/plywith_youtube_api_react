import React, { Component } from "react";
import Vedio from "./vedio";
import uuid from "uuid";

//{props.data && props.data.map(r => <Vedio key={uuid()} data={props.data[r]} />)}
const VedioList = props => (
  <div>
    <ul>
      {props.data && props.data.map(r => <Vedio key={uuid()} data={r} />)}
    </ul>
  </div>
);

export default VedioList;
