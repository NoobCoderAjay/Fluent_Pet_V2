export const Color = {
  BLACK_000: '#FFFFFF',
  BLACK_200: '#F7F9FC',
  BLACK_300: '#EDF1F7',
  BLACK_400: '#E4E9F2',
  BLACK_500: '#C5CEE0',
  BLACK_600: '#8F9BB3',
  BLACK_700: '#2E3A59',
  BLACK_800: '#222B45',

  GREEN_100: '#E2F3FB',
  GREEN_200: '#BDEEFD',
  GREEN_300: '#79DAE4',
  GREEN_400: '#006271',
  GREEN_500: '#02434D',

  BLUE_100: '#E9EDFC',
  BLUE_200: '#D6DCF6',
  BLUE_300: '#93C0FA',
  BLUE_400: '#273A8F',
  BLUE_500: '#1E2F7B',

  PINK_100: '#FFE5E5',
  PINK_200: '#FFD1C6',
  PINK_300: '#FF9F87',

  YELLOW_100: '#FBECDA',
  YELLOW_200: '#FEE0BC',
  YELLOW_300: '#FCBC71',

  PURPLE_400: '#73215C',
  PURPLE_500: '#581746',

  RED_300: '#EC657D',
  RED_400: '#97132B',
  RED_500: '#740D1F',

  // PINK_200
  BUTTON_RED: '#FFD1C6',
  // YELLOW_200
  BUTTON_ORANGE: '#FEE0BC',
  BUTTON_YELLOW: '#FFF6BD',
  BUTTON_GREEN: '#B7F2EE',
  // GREEN_200
  BUTTON_BLUE: '#BDEEFD',
  // BLUE_200
  BUTTON_VIOLET: '#D6DCF6',

  SYSTEM_RED: '#FF354A',
  SYSTEM_GREEN: '#30AE78',
  SYSTEM_YELLOW: '#FFD977',
} as const;

export type Color = typeof Color[keyof typeof Color];
