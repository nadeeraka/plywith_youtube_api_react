import React from "react";
// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>
const Vedio = props => (
  <div className="card">
    <li>
      <h4 className="card-title title">
        Title {props.data && props.data.snippet.title}
      </h4>

      <a href={`watch?v=${props.data.id.videoId}`}>
        {" "}
        <img
          className="card-img-top"
          src={props.data.snippet.thumbnails.medium.url}
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
