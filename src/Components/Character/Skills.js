import { List, Header, Popup } from "semantic-ui-react";
import React, { Fragment } from "react";

function Skills({ skills }) {
  const trigger = skills.proficient ? skills.name : skills.name;

  return (
    <Fragment>
      <Header ac="h3"> Skills </Header>
      <List>
        {skills.map(skill => (
          <List.Item>
            <List.Content>
              {skill.proficient === true ? (
                <List.Header>
                  <Popup
                    wide="very"
                    content={skill.description}
                    trigger={<span>{skill.name} (e)</span>}
                    position="right center"
                  />
                </List.Header>
              ) : (
                <List.Header>
                  <Popup
                    wide="very"
                    content={skill.description}
                    trigger={<span>{skill.name}</span>}
                    position="right center"
                  />
                </List.Header>
              )}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Fragment>
  );
}

export default Skills;
