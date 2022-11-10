import React from "react";

const Features = () => {
  return (
    <div className="featuresContainer">
      <h1>There’s lot more... and a lot planned</h1>
      <div className="ftContentBox">
        <div className="fx_first_col">
          <h4>
            Monitor logs to debug
            code on the fly
          </h4>
          <p>
            Get notified for incidents that affects pricing or performance of your code
          </p>
        </div>
        <div className="fx_first_cols">
          <div className="fx_first_col">
            <h4>
              Usage pattern to
              <br /> optimise cost
            </h4>
          </div>
          <div className="fx_first_col last">
            <h4>
              Invite teams and <br />
              assign roles
            </h4>
          </div>
          <div className="fx_first_col ">
            <h4>
              Cron Jobs,<br /> manage database
            </h4>
            <span>
              Phase 2
            </span>
          </div>
          <div className="fx_first_col last">
            <h4>
              Deployment rollbacks, <br />
              multiple environments
            </h4>
            <span>
              Phase 2
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Features;
