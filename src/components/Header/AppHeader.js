import "./AppHeader.scss";
import { Link } from "react-router-dom";
import MainMenu from "../Menu/MainMenu";
import SearchBox from "../SearchBox";
import { Avatar, Typography } from "antd";
import Logo from "../../assets/images/logo.png";

function AppHeader() {
  return (
    <div className="appHeader">
      <div className="menuHeader">
        <MainMenu />
      </div>
      <div className="appTitle">
        <Link to="/">
          <Typography.Title>جسر المعرفة <Avatar src={Logo} size={"large"}/></Typography.Title>
    
        </Link>
      </div>
      <div className="rightHeader">
        <div className="searchCard">
          <SearchBox />
        </div>

      </div>
    </div>
  );
}

export default AppHeader;
