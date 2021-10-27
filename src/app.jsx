import React, { Component } from "react";
import Userposition from "./user.position.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      errorMessage: "",
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <Userposition latitude={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return <h1>Loading.....</h1>;
    }
  }
}
export default App;
