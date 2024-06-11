import * as Linking from 'expo-linking';
import { PendoSDK } from 'rn-pendo-sdk';

import { Screen } from '@navigation/constants';
import { screenNameToDeepLinkPath } from '@navigation/linking';

function encodeParams(params: any) {
  const queryParams: any = {};
  for (const key in params) {
    if (key === 'key') {
      continue;
    } //
    try {
      queryParams[key] = Object.keys(params[key])
        ? JSON.stringify(params[key])
        : params[key];
    } catch (e) {
      continue;
    }
  }
  return queryParams;
}

export function openUrl(screenName: Screen, params: any = {}) {
  const path = screenNameToDeepLinkPath(screenName);
  const url = Linking.createURL(path, { queryParams: encodeParams(params) });
  console.debug(`Visiting ${url} via ${path}`);
  if (PendoSDK) {
    PendoSDK.track(screenName, { route: screenName, url });
  }
  Linking.openURL(url);
}

export function decodeParams(params: any) {
  for (const key in params) {
    try {
      const newValue = JSON.parse(decodeURIComponent(params[key]));
      params[key] = Object.keys(newValue).length ? newValue : params[key];
    } catch (e) {
      continue;
    }
  }
  return params;
}
