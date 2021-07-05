import "./styles.css";
import { FaHamburger } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="Header">
      <h1 className="HeaderTitle">
        <FaHamburger /> kenzie burger
      </h1>
      <span className="HeaderSlogan">"com garbo & elegância"</span>
    </header>
  );
};
