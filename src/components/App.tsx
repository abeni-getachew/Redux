import styles from "../styles/app.module.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import { useEffect } from "react";
import Profile from "./Profile";
import Card from "./Card";
const data = require("../data.json");

function App() {
  const { container, cardsContainer, appContent } = styles;
  const dispatch = useDispatch();
  const { appData }: any = useSelector((state: any) => state);
  const { setAppData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    setAppData(data);
  });

  return (
    <>
      <main className={`${container}`}>
        <div className={appContent}>
          <Profile />
          <div className={cardsContainer}>
            {appData.map((cardData: any, i: any) => (
              <Card key={i} cardData={cardData} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default App;
