import styles from "../styles/card.module.css";
import { useSelector } from "react-redux";

const ellipsis = require("../assets/icon-ellipsis.svg").default;
const selfcare = require("../assets/icon-self-care.svg").default;
const exercise = require("../assets/icon-exercise.svg").default;
const play = require("../assets/icon-play.svg").default;
const social = require("../assets/icon-social.svg").default;
const study = require("../assets/icon-study.svg").default;
const work = require("../assets/icon-work.svg").default;

function Card({ cardData }: any) {
  const { container, cardbg, cardContent, top, bot, values } = styles;
  const { selected }: any = useSelector((state: any) => state);

  const handleSRC = () => {
    let obj = {
      image: selfcare,
      color: "hsl(43, 84%, 65%)",
    };
    switch (cardData["title"]) {
      case "Work":
        obj.image = work;
        obj.color = "hsl(43, 84%, 65%)";
        return obj;
      case "Play":
        obj.image = play;
        obj.color = "hsl(195, 74%, 62%)";
        return obj;
      case "Study":
        obj.image = study;
        obj.color = " hsl(348, 100%, 68%)";
        return obj;
      case "Exercise":
        obj.image = exercise;
        obj.color = " hsl(145, 58%, 55%)";
        return obj;
      case "Social":
        obj.image = social;
        obj.color = "hsl(264, 64%, 52%)";
        return obj;
      case "Self Care":
        obj.image = play;
        obj.color = "hsl(195, 74%, 62%)";
        return obj;
      default:
        return obj;
    }
  };

  return (
    <div className={container}>
      <div className={cardbg} style={{ background: handleSRC().color }}>
        <img src={handleSRC().image} alt="icon" />
      </div>
      <div className={cardContent}>
        <div className={top}>
          <h1>{cardData.title}</h1>
          <img src={ellipsis} alt="more" />
        </div>
        <div className={values}>
          <p>{cardData.timeframes[selected].current}hrs</p>
          <div className={bot}>
            <div>Last Week - {cardData.timeframes[selected].previous}hrs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
