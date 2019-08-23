import React, { useContext } from "react";
import { Button, Modal, Header } from "semantic-ui-react";
import CombatButton from "./CombatButton";
import { CharacterContext } from "../../../Store/Store";
import HealthBar from "./HealthBar";

const CombatModal = ({ open, onOpen, onClose }) => {
  const [character, setCharacter] = useContext(CharacterContext);
  return (
    <Modal open={open} onOpen={onOpen} onClose={onClose} size="large">
      <Modal.Header> Combat Phase </Modal.Header>
      <Modal.Content>
        <HealthBar currentHP={character.hp.current} maxHP={character.hp.max} />
        <Modal.Description>
          <Header> Lets fight </Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}> End Combat </Button>
      </Modal.Actions>
    </Modal>
  );
};

// function CombatModal({ open, close }) {
//   return (
//     <Modal size="Large" open={open}>
//       <Modal.Header> Combat </Modal.Header>
//       <Modal.Content>
//         <p>Are you sure you want to delete your account</p>
//       </Modal.Content>
//       <Modal.Actions onClick={close}>
//         <Button negative>No</Button>
//         <Button positive icon="checkmark" labelPosition="right" content="Yes" />
//       </Modal.Actions>
//     </Modal>
//   );
// }

export default CombatModal;
