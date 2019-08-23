import React, { Fragment, useContext } from "react";
import { List, Header } from "semantic-ui-react";
import Skills from "./Skills";

function Languages({ languages }) {
  return (
    <Fragment>
      <Header ac="h3"> Languages </Header>
      <List>
        {languages.map(language => (
          <List.Item>
            <List.Content>
              <Header size="small">{language}</Header>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
}
export default Languages;
