export default {
  API_URL: 'https://app.fluent.pet',
  BASE_TILE_AP_URL: 'http://10.10.0.1',
  PUSH_NOTIFICATIONS_API_KEY: '2dd1ef2cc26afef640ed16338e137bcc',
  MIXPANEL_PROJECT_TOKEN: '5dbc66dade2ecacf2b805887bd105b50',
  PENDO_KEY:
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiJiMTllNzczZDE1NzU3ZWUwNTljZjdiOGRiNDBkMTgzZTAxODdiNDRkMGU2Zjg0ZTVhNTA0ZDE3ZDQwM2ZiNzNjMDhiYjg2YzRlY2U3ZWFkYzk2N2M2NDQzYzAzMGFjMDcxMmE4ODY3NDI0M2E4MjU5YjRkMWZiOTZhMGUzYjdlM2IwNjFkNWI3YzlhNjU1ZWJiOWY2ZWJjZjA1OWU2M2Y3MmUzZGFlMzk2NzA2NDNjZjdjMzc5ZWM4MWMxMTkxZThkMDRhODE3YmJiMmEzNDY4OTIxMjliMDk4ODhlZDZiZC40Mjc3ODYxNjk1ZDhhNGFkZjdmMzE2NTZjM2Q0OWFkMy40ZDY1YjlmNmQzMDQ0YjhkODRmZWViZjU3YTI3MmFjNzY3MWI5NzA0ODQ3MmY4ODk1ZjhlNTI4OGE4NzliMDc4In0.MYr8l-Cr-fV0ecFv2ODX3WzUEOX6Drj_MCGqS_IrlRiS_GsPBWM6o7GnUMgBw4B-GZE5gdoEEmNS3OOb-Bwjr35fM7n9Lc6m-j4lRT1WOef1L3hzQ_athdAPwruJTZTgdnaJQo2N7RfuUdXWY1WOWMDGMzR1oIdH07vlE0tDofM',
  SENTRY_DSN_URL:
    'https://74d8d6bd6c424f07bea977d394128107@o1098081.ingest.sentry.io/6120043',
  SENTRY_USER_FEEDBACK_URL:
    'https://sentry.io/api/0/projects/fluentpet/fluentpet/user-feedback/',
  SENTRY_USER_FEEDBACK_TOKEN:
    '63085829e74b40af910b2c1c9866e270fe080c77ac1c49f3bd02e0e299bc2246',
  // Don't log errors to 'production' when running the app in dev mode
  SENTRY_ENVIRONMENT: __DEV__ ? 'development' : 'production',
};
