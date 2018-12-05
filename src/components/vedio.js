import React from "react";

const Vedio = props => (
  <div>
    <li>
      <p>{props.data && props.data.snippet.title}</p>
      <img src={props.data.snippet.thumbnails.medium.url} alt="" />
    </li>
  </div>
);

export default Vedio;
