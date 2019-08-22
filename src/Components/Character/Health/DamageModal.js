import React from "react";
import { Button, Modal } from "semantic-ui-react";

function DamageModal() {
  return (
    <Modal size={size} open={open} onClose={this.close}>
      <Modal.Header>Delete Your Account</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete your account</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative>No</Button>
        <Button positive icon="checkmark" labelPosition="right" content="Yes" />
      </Modal.Actions>
    </Modal>
  );
}

export default DamageModal;
