import { bell, search, userImg, dropdown } from "../components/index";
import { IoReorderThreeSharp, IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Ctx } from "../contexts/globalContext";

const Header = ({ handleDrawer }: { handleDrawer: Function }) => {
  const [searchIsVisible, setSearchIsVisible] = useState<Boolean>(false);
  const { user } = Ctx();
  const searchHandler = () => {
    const input: HTMLInputElement = document
      .querySelector(".headerbox-1")
      ?.querySelector("input")!;
    if (getComputedStyle(input).display === "none") {
      setSearchIsVisible(true);
    }
  };

  const handleAlternateSearch = () => {
    setSearchIsVisible(false);
  };
  return (
    <header className="header">
      <div
        className="search__popup"
        style={searchIsVisible ? { top: "0" } : { top: "-10rem" }}
      >
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search for anything"
        />
        <IoCloseCircleOutline
          className="close-icon"
          onClick={handleAlternateSearch}
        />
      </div>

      <div className="headerbox-1">
        <IoReorderThreeSharp
          className="mb-drawer"
          onClick={() => handleDrawer()}
        />
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search for anything"
          />
          <button onClick={searchHandler}>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>

      <div className="headerbox-3">
        <a href="/#">Docs</a>
        <img src={bell} alt="notification" />
        <img src={userImg} alt="search" className="user" />
        <p>{user && user}</p>
        <img src={dropdown} alt="dropdwon" />
      </div>
    </header>
  );
};

export default Header;
