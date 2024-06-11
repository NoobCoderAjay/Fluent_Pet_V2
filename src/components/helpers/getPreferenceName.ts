import { PreferenceType } from 'src/model/preference';

export const getPreferenceName = (preferenceType: PreferenceType) => {
  const preferenceCleanNames = {
    [PreferenceType.ACTIVITY_SORT]: 'activity feed sort',
    [PreferenceType.BUTTON_SORT]: 'button sort',
    [PreferenceType.DEFAULT_PUSHER]: 'default pusher',
    [PreferenceType.FEATURE_FLAGS]: 'feature flags',
    [PreferenceType.PUSH_NOTIFICATION_FREQUENCY]: 'push notification frequency',
  };

  const name = preferenceCleanNames[preferenceType];

  return name ? `${name} preference` : 'user preference';
};
