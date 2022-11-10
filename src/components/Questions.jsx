import arrow from "../assets/Group 17.png";
import up from "../assets/Group 18.png";
import down from "../assets/Group 18 (1).png";
import { questions } from "../data";
import { useState } from "react";

const Questions = () => {
  const [clicked, setClicked] = useState(false);
  const [QstId, setQstId] = useState('');
  const [qstSelection, setQstSelection] = useState("Deployment");

  const handleQst = (id) => {
    if (!clicked) {
      setClicked(true);
      setQstId(id);
    } else {
      setQstId(id);
    }
  };

  const QuestionBox = ({ item }) => (
    <div key={item.id}
      className={questions[questions.length - 1]?.id === item.id ? "qstCont noLastLine" : 'qstCont'}>
      <h4 onClick={() => handleQst(item.id)}>
        {item.qst}
        <img
          src={clicked && QstId === item.id ? up : down}
          alt=""
          height={28}
        />
      </h4>{" "}
      {QstId === item.id && <p>{item.ans}</p>}
    </div>
  )


  return (
    <>
      <div className="questionsContainer">
        <h1>Frequently asked questions</h1>
        <div className="qstContents">
          <div className="qst_btns">
            <button
              onClick={(e) => setQstSelection(e.target.innerText)}
              className={qstSelection === "Deployment" ? "active" : ""}
            >
              Deployment <img src={arrow} alt="" height={20} />
            </button>

            <button
              onClick={(e) => setQstSelection(e.target.innerText)}
              className={qstSelection === "Management" ? "active" : ""}
            >
              Management <img src={arrow} alt="" height={20} />
            </button>
          </div>
          <div className="qstBox">
            {qstSelection === "Deployment" &&
              questions.map((item) => (
                <QuestionBox key={item.id} item={item} />
              ))}
            {qstSelection === "Management" &&
              questions.map((item) => (
                <QuestionBox key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Seness Techonologies Pvt. Ltd. 2022</p>
      </div>
    </>
  );
};

export default Questions;
