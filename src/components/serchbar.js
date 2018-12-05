import React, { Component } from "react";

const SerchBar = props => (
  <div className="form-inline pad">
    <form action="" onSubmit={props.formData}>
      <input type="text" name="data" className="form-control" />
      <button className="btn btn-danger">Search</button>
    </form>
  </div>
);

export default SerchBar;
