import React, { Fragment } from "react";

function HitPoints({ currentHealth, maxHP, percentage, ac }) {
  return (
    <Fragment>
      <table>
        <tr>
          <th>AC:</th>
          <td>{ac}</td>
        </tr>
        <tr>
          <th>HP:</th>
          <td>
            {currentHealth}/{maxHP}
          </td>
        </tr>
      </table>
      <div className="progress">
        <div
          class="progress-bar bg-danger progress-bar-animated progress-bar-striped"
          role="progressbar"
          style={{ width: percentage }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax={maxHP}
        >
          <a style={{ color: "black", fontWeight: 600 }}>
            {currentHealth}/{maxHP}
          </a>
        </div>
      </div>
    </Fragment>
  );
}
export default HitPoints;
