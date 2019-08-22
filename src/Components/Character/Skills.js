import { Becky } from "../../Resource/becky";
import { List, Header, Popup } from "semantic-ui-react";
import React, { Fragment } from "react";

function Skills() {
  const skills = Becky.skills;
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
                    content={skill.description}
                    trigger={<p>{skill.name} (e)</p>}
                  />
                </List.Header>
              ) : (
                <List.Header>
                  <Popup
                    content={skill.description}
                    trigger={<p>{skill.name}</p>}
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
