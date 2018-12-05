import React from "react";
const Vedio = props => (
  <div className="card">
    <li>
      <h4 className="card-title">
        Title {props.data && props.data.snippet.title}
      </h4>

      <a href={`https://www.ssyoutube.com/watch?v=${props.data.id.videoId}`}>
        {" "}
        <img
          className="card-img-top"
          src={props.data.snippet.thumbnails.default.url}
          alt=""
        />
      </a>
      <div>
        <div class="card-body">
          <p>Vedio Details</p>
          <p>
            Chanel Name{" "}
            <b ClassName="card-text">{props.data.snippet.channelTitle}</b>{" "}
          </p>
          <p ClassName="card-text">
            Description{" "}
            {props.data.snippet.description.length > 23
              ? props.data.snippet.description.substring(0, 45) + "....."
              : props.data.snippet.description}
          </p>
        </div>
      </div>
    </li>
  </div>
);

export default Vedio;
