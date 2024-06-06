import React from "react";
import { Path, Svg } from "react-native-svg";
import { Colors } from "../../theme/Colors";

type Props = {
  color: Colors;
  size: number;
};

const ButtonInfoMeaning: React.FC<Props> = ({ color, size = 20 }) => {
  return (
    <Svg width={size} height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 6C9 5.448 9.448 5 10 5C10.552 5 11 5.448 11 6C11 6.552 10.552 7 10 7C9.448 7 9 6.552 9 6ZM9 9C9 8.448 9.448 8 10 8C10.552 8 11 8.448 11 9V14C11 14.552 10.552 15 10 15C9.448 15 9 14.552 9 14V9ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.522 20 20 15.523 20 10C20 4.477 15.522 0 10 0Z"
        fill={color}
      />
    </Svg>
  );
};

export default ButtonInfoMeaning;
