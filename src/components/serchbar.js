import React, { Component } from "react";

const SerchBar = props => (
  <form action="" onSubmit={props.formData}>
    <input type="text" name="data" />
    <button>Search</button>
  </form>
);

export default SerchBar;
