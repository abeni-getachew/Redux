import { useSelector } from "react-redux";
import styles from "../styles/footer.module.css";

function Footer() {
  const { attribution } = styles;
  const { appTheme }: any = useSelector((state: any) => state);

  return (
    <footer
      className={`${attribution} ${appTheme ? "text-black" : "text-light"}`}
    >
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.linkedin.com/in/luispintodev/"
        target="_blank"
        rel="noreferrer"
      >
        Luís Pinto
      </a>
      .
    </footer>
  );
}

export default Footer;
