import React from "react";
import { Path, Svg } from "react-native-svg";

import { Colors } from "../../theme/Colors";

import { IconProps } from "./types";

const Support: React.FC<IconProps> = ({ color = Colors.BLACK }) => {
  return (
    <Svg width={20} height={16} viewBox="0 0 20 16">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 14H3C2.449 14 2 13.552 2 13V3.25L9.4 8.8C9.578 8.934 9.789 9 10 9C10.211 9 10.422 8.934 10.6 8.8L18 3.25V13C18 13.552 17.551 14 17 14ZM16.333 2L10 6.75L3.667 2H16.333ZM17 0H3C1.346 0 0 1.346 0 3V13C0 14.654 1.346 16 3 16H17C18.654 16 20 14.654 20 13V3C20 1.346 18.654 0 17 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Support;
