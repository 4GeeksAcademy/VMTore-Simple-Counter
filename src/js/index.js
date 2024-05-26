//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props) {
  return (
    <div className="bigSquare">
      <div className="clokImg">
        <i class="fa-regular fa-clock"></i>
      </div>
      <div className="hoursTwo">{props.tensHour % 10}</div>
      <div className="hoursOne">{props.unitsHour}</div>
      <div>
        <i class="fa-regular fa-colon"></i>
      </div>
      <div className="minutesTwo">{props.tensMinutes % 10}</div>
      <div className="minutesOne">{props.unitsMinutes % 10}</div>
      <div>
        <i class="fa-solid fa-colon"></i>
      </div>
      <div className="secondsTwo">{props.tensSeconds % 10}</div>
      <div className="secondsOne">{props.unitsSeconds % 10}</div>
    </div>
  );
}
SimpleCounter.propTypes = {
  tensHour: PropTypes.number,
  unitsHour: PropTypes.number,
  tensMinutes: PropTypes.number,
  unitsMinutes: PropTypes.number,
  tensSeconds: PropTypes.number,
  unitsSeconds: PropTypes.number,
};

let counter = 0;
setInterval(function () {
  const tHours = Math.floor(counter / 100000);
  const uHours = Math.floor(counter / 10000);
  const tMinutes = Math.floor(counter / 1000);
  const uMinutes = Math.floor(counter / 100);
  const tSeconds = Math.floor(counter / 10);
  const uSeconds = Math.floor(counter / 1);
  counter++;

  ReactDOM.render(
    <SimpleCounter
      tensHour={tHours}
      unitsHour={uHours}
      tensMinutes={tMinutes}
      unitsMinutes={uMinutes}
      tensSeconds={tSeconds}
      unitsSeconds={uSeconds}
    />,
    document.querySelector("#app")
  );
}, 1000);
