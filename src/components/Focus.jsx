import backgroundImg from "../assets/you focus on your scale.png";

const Focus = () => {
  return (
    <div className="focusContainer">
      <img src={backgroundImg} alt="" className="backgroundImg" />
      <span className="backgroundImg-1" />
      <span className="backgroundImg-1 bg2" />
      <h1>
        You focus on scale,
        <br /> leave the rest to us
      </h1>
      <div className="focusContents">
        <div className="content_box">
          <span />
          <div className="each_focusContent" style={{flex:'1'}}>
            <p>Auto scale-up and scale-down</p>
            <small>You only pay for what you use</small>
          </div>
        </div>
        <div className="content_box">
          <span />
          <div className="each_focusContent" style={{flex:'1'}}>
            <p>Auto scale-up and scale-down</p>
            <small>You only pay for what you use</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
