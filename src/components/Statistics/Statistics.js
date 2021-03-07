import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.statistic}>
      <p className={s.item}>
        good: <span className={s.value}>{good}</span>
      </p>
      <p className={s.item}>
        neutral: <span className={s.value}>{neutral}</span>
      </p>
      <p className={s.item}>
        bad: <span className={s.value}>{bad}</span>
      </p>
      <p className={s.item}>
        total: <span className={s.value}>{total}</span>
      </p>
      <p className={s.item}>
        Positive Feedback:
        <span
          className={s.value}
          style={{ color: positivePercentage >= 50 ? "green" : "red" }}
        >
          {positivePercentage}
        </span>
        %
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
