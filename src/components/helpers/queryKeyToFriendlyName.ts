import { QueryKeys } from 'src/api/constants';

const queryKeyToFriendlyNameMap: Record<string, string> = {
  [QueryKeys.BUTTON_CONCEPTS]: 'button concepts',
  [QueryKeys.HOUSEHOLD_INVITATION]: 'household invitation',
  [QueryKeys.INTERACTION_MEANINGS]: 'interaction meanings',
  [QueryKeys.LEARNER_TYPES]: 'learner types',
  [QueryKeys.PUSHER]: 'household member',
  [QueryKeys.PUSHERS]: 'household members',
};

export const queryKeyToFriendlyName = (key: string) =>
  queryKeyToFriendlyNameMap[key] ?? key;
