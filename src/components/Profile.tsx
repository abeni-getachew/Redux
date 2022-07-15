import userImage from "../assets/image-jeremy.png";
import styles from "../styles/profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { Timeframes } from "../types";
function Profile() {
  const {
    profileContainer,
    userContainer,
    timeframeOptions,
    userInfo,
    active,
  } = styles;
  const dispatch = useDispatch();
  const { selected }: any = useSelector((state: any) => state);
  const { setSelected } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className={profileContainer}>
      <div className={userContainer}>
        <img src={userImage} alt="profilepic" />
        <div className={userInfo}>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className={timeframeOptions}>
        <button
          className={`${selected === Timeframes.Daily && active}`}
          onClick={() => setSelected(Timeframes.Daily)}
        >
          Daily
        </button>
        <button
          className={`${selected === Timeframes.Weekly && active}`}
          onClick={() => setSelected(Timeframes.Weekly)}
        >
          Weekly
        </button>
        <button
          className={`${selected === Timeframes.Monthly && active}`}
          onClick={() => setSelected(Timeframes.Monthly)}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default Profile;
