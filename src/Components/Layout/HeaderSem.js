import React, { Fragment, useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
function Header() {
  const [active, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <div>
      <Menu pointing secondary style={{ marginBottom: "1%" }}>
        <Menu.Item header> D&D Character Tracker </Menu.Item>
        <Menu.Item
          as="a"
          name="Home"
          active={active === "Home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="My Character"
          active={active === "My Character"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
}

export default Header;

{
  /* <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/Home">
          Character Tracker
        </a>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Features">
                Character
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Features">
                Button 2
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment> */
}
