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
