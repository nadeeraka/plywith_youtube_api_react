import React, { Component } from "react";
import searchYoutube from "youtube-api-v3-search";

import Title from "./components/title";
import SerchBar from "./components/serchbar";
import API_KEY from "../src/secret/api";
import VedioList from "./components/vediolist";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.formData = this.formData.bind(this);
  // }
  state = {
    vedios: []
  };

  formData = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.data.value.trim();
    console.log(searchTerm);
    const options = {
      q: searchTerm,
      part: "snippet",
      type: "video"
    };

    let result = await searchYoutube(API_KEY, options);
    console.log(result);
    if (result.items) {
      this.setState(() => ({ vedios: result.items }));
    } else {
      alert("Somthing went wrong");
    }
  };

  render() {
    return (
      <div>
        <Title />
        <SerchBar formData={this.formData} />
        <VedioList data={this.state.vedios} />
      </div>
    );
  }
}

export default App;
