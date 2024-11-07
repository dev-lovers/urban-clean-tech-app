import React from "react";
import { Button, Dialog, Portal, Text } from "react-native-paper";

interface CustomDialogProps {
  title: string;
  message: string;
  buttonText: string;
  isVisible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  title,
  message,
  buttonText,
  isVisible,
  onClose,
  onConfirm,
}) => {
  const handlePress = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  return (
    <Portal>
      <Dialog visible={isVisible} onDismiss={onClose}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handlePress}>{buttonText}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CustomDialog;
