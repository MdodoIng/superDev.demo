import buildImg from "../assets/Build your next socila app.png";


const Consider = () => {
  return (
    <><div className="consContainer">
      <h1>Why and who should consider?</h1>
      <div className="conBox">
        <div className="contentCon">
          <div className="conHead">
          <span />

            <h2>
              Organisation
            <p>Managing existing infrastructure
            </p>
            </h2>
          </div>
          <div className="conTexts">
            <h4>Automate the work of DevOps team</h4>
            <h4>Manage environments, rollbacks & more</h4>
          </div>
        </div>

        <div className="contentCon">
          <div className="conHead">
          <span />

            <h2>
              Individual or early stage startup
            <p>Building fresh projects
            </p>
            </h2>
          </div>
          <div className="conTexts">
            <h4>Lets you focus more on product iteration</h4>
            <h4>Pay only for what you use</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="buildContainer">
      <div className="buildTitle">
        <h1>
        Build your next <span>social app</span> <br />ready for millions
        </h1>
      </div>
      <div className="buildCContact">
        <button>Join the waitlist</button>
        <p>Have questions? drop us at <a href="info@superdevnow.com"></a>info@superdevnow.com</p>
      </div>

      </div>
      </>
  )
};

export default Consider;
