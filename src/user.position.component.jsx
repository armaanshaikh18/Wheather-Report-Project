import React from "react";
import "./styles.css";

//summer -->           monsoon --->          winter--->
//2,3,4,5               6,7   8,9              10,11,  0,1
//march-apr-may-jun    july-aug-sep-oct        nov-dec-jan-feb

const Wreport = (lat, month) => {
  if (month >= 2 && month <= 9) {
    return lat < 1 ? "summer" : "monsoon";
  } else {
    return lat > 1 ? "summer" : "winter";
  }
};

const Userposition = (props) => {
  let season = Wreport(props.latitude, new Date().getMonth());
  if (season === "summer") {
    return (
      <div className={"container summer"}>
        <div className="row">
          <div className="col-md-12">
            <h1>It is hot!!</h1>
          </div>
        </div>
      </div>
    );
  }
  if (season === "winter") {
    return (
      <div className={"container winter"}>
        <div className="row">
          <div className="col-md-12">
            <h1>It is cold!!</h1>
          </div>
        </div>
      </div>
    );
  } else {
    if (season === "monsoon") {
      return (
        <div className={"container monsoon"}>
          <div className="row">
            <div className="col-md-12">
              <h1>It is Raining!!</h1>
            </div>
          </div>
        </div>
      );
    }
  }
};
export default Userposition;
