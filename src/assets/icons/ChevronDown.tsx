import React from "react";
import Svg, { Path } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const ChevronDown: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={14} height={7} viewBox={"0 0 14 7"}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.99991 6.99998C6.77191 6.99998 6.54491 6.92298 6.35991 6.76798L0.359909 1.76798C-0.0640909 1.41498 -0.122091 0.783984 0.231909 0.359984C0.584909 -0.0640163 1.21491 -0.121016 1.63991 0.231984L7.01091 4.70798L12.3729 0.392984C12.8029 0.0469837 13.4329 0.114984 13.7789 0.544984C14.1249 0.974984 14.0569 1.60398 13.6269 1.95098L7.62691 6.77898C7.44391 6.92598 7.22191 6.99998 6.99991 6.99998Z"
        fill={color}
      />
    </Svg>
  );
};

export default ChevronDown;
