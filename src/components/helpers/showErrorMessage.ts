import { showMessage, MessageType } from 'react-native-flash-message';

export const showErrorMessage = (
  message: string,
  title = 'Error',
  type: MessageType = 'danger',
  duration: number = 4000,
) => {
  showMessage({
    message: title,
    description: message,
    type: type,
    duration: duration,
  });
};
