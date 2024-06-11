import { IS_IOS } from 'src/constants';

type PermissionNameClean =
  | 'Location'
  | 'Camera'
  | 'Microphone'
  | 'Notifications';

export const getHowToEnablePermissionText = (
  permissionNameClean: PermissionNameClean,
) => {
  if (IS_IOS) {
    return `Please go to your device's Settings > Privacy > ${permissionNameClean} and turn FluentPet on.`;
  }

  return `Please go to your device's Settings > Apps > FluentPet > Permissions, select ${permissionNameClean} and tap Allow.`;
};
