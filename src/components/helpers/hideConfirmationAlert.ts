import { Alert } from 'react-native';

export enum ItemTypeToHide {
  CONNECT_BUTTON = 'connectButton',
  ARCHIVE_ANY = 'archive',
  UNARCHIVE_ANY = 'unarchive',
}
const hideConfirmationAlert = (
  onConfirm: () => void,
  itemTypeToHide?: ItemTypeToHide | null,
  actionObject?: string | undefined,
) => {
  let message: string = '';
  let buttonText: string = '';

  switch (itemTypeToHide) {
    case ItemTypeToHide.ARCHIVE_ANY:
      message = `Are you sure you want to archive "${actionObject}"?`;
      buttonText = 'Archive';
      break;
    case ItemTypeToHide.UNARCHIVE_ANY:
      message = `Are you sure you want to unarchive "${actionObject}"?`;
      buttonText = 'Unarchive';
      break;
    case ItemTypeToHide.CONNECT_BUTTON:
      message = `Are you sure you want to unlink "${actionObject}"?`;
      buttonText = 'Unlink';
      break;
  }
  Alert.alert('Are you sure?', message, [
    { text: 'Cancel', style: 'cancel' },
    { text: buttonText, onPress: onConfirm, style: 'destructive' },
  ]);
};

export default hideConfirmationAlert;
