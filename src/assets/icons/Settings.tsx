import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Settings: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={16} height={17} viewBox="0 0 16 17">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0C7.45 0 7 0.45 7 1V16C7 16.55 7.45 17 8 17C8.55 17 9 16.55 9 16V1C9 0.45 8.55 0 8 0ZM15 8C14.45 8 14 8.45 14 9V16C14 16.55 14.45 17 15 17C15.55 17 16 16.55 16 16V9C16 8.45 15.55 8 15 8ZM0 5C0 4.45 0.45 4 1 4C1.55 4 2 4.45 2 5V16C2 16.55 1.55 17 1 17C0.45 17 0 16.55 0 16V5Z"
        fill={color}
      />
    </Svg>
  );
};

export default Settings;
