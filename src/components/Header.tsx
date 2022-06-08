import Menu from "./Menu";
import Logo from "../images/CircleLogov3.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="header__right">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
