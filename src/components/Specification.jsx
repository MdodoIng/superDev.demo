import tick from "../assets/Frame 3.png";
import { specification, languesIcons } from "../data";

const ContentBox = ({ number, title, feature }) => (
  <div className="spFeatures_contentBox">
    <div className="border">
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="number">{number}</span>
        <h4>{title}</h4>
      </div>
      <ul>
        {feature.map((item, idx) => (
          <li key={idx}>
            <img src={tick} alt="" />
            {item?.title}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Specification = () => (
  <div className="spContainer">
    <div className="spHead">
      <h2>
        Deploy your code
        <br />
        in minutes
      </h2>
      <p>
        We can make code on your machine ready for millions of users. Our
        Platform as Service (PaaS) will automatically detect your requirement.
        No configuration required
      </p>
    </div>
    <div className="spFeatures">
      {specification.map((item) => (
        <ContentBox
          key={item.id}
          title={item.title}
          number={item.number}
          feature={item.feature}
        />
      ))}
    </div>
    <div className="spSupports">
      <p>We support multiple frameworks and languages</p>
      <div className="icons">
        {languesIcons.map((item) => (
          <img key={item.id} src={item.icon} alt={item.name} />
        ))}
      </div>
    </div>
  </div>
);

export default Specification;
