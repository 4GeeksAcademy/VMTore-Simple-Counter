import React from "react";
import PropTypes from "prop-types";

function SimpleCounter(props) {
  return (
    <div className="bigSquare">
      <div className="clokImg">
        <i className="fa-regular fa-clock"></i>
      </div>
      <div className="hoursTwo">{props.tensHour % 10}</div>
      <div className="hoursOne">{props.unitsHour}</div>
      <div>:</div>
      <div className="minutesTwo">{props.tensMinutes % 10}</div>
      <div className="minutesOne">{props.unitsMinutes % 10}</div>
      <div>:</div>
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

export default SimpleCounter;
